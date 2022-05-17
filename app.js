// import functions and grab DOM elements
import { fetchPosts } from './fetch-utils.js';
import { renderPosts } from './render-utils.js';
// let state

const main = document.querySelector('main');

const authButton = document.getElementById('authentication-button');


// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

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