// import functions and grab DOM elements
import { fetchPosts } from './fetch-utils.js';
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
}

loadData();

authButton.addEventListener('click', () => {
    window.location.href = '/authentication-page';
});

createPostButton.addEventListener('click', () => {
    window.location.href = '/create-post';
});