// import functions and grab DOM elements
import { fetchPosts, getUser, logout } from './fetch-utils.js';
import { renderPosts } from './render-utils.js';
// let state

const main = document.querySelector('main');

const authButton = document.getElementById('authentication-button');
const createPostButton = document.getElementById('create-post-button');

async function loadData() {
    const posts = await fetchPosts();
    
    for (let post of posts) {
        const postDiv = renderPosts(post);
        main.append(postDiv);
    }

    const user = getUser();
    if (user) {
        authButton.textContent = 'Logout';
        authButton.addEventListener('click', handleLogout);
    } else {
        authButton.textContent = 'Sign In / Sign Up';
        authButton.addEventListener('click', handleAuthentication);
    }
}

loadData();

// authButton.addEventListener('click', () => {
//     window.location.href = '/authentication-page';
// });

createPostButton.addEventListener('click', () => {
    window.location.href = '/create-post';
});

//handle Authentication and Logout
async function handleAuthentication() {
    window.location.href = '/authentication-page';
}

async function handleLogout() {
    await logout();
}