import { checkAuth, createNewPost } from '../fetch-utils.js';

checkAuth();

const createPostForm = document.getElementById('create-post-form');

createPostForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(createPostForm);
    const newPost = {
        title: data.get('title'),
        description: data.get('description'),
        contact: data.get('contact'),
        image: data.get('image'),
    };
    const response = await createNewPost(newPost);
    console.log(response);
    window.location.href = '/';
});