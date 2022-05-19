import { signUpUser, loginUser, redirectLoggedIn } from '../fetch-utils.js';

const signUpForm = document.getElementById('signup-form');
const loginForm = document.getElementById('login-form');

redirectLoggedIn();

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signUpForm);
    const user = await signUpUser(data.get('email'), data.get('password'));
    console.log(user);
    if (user) {
        window.location.href = '/';
    }
});

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(loginForm);
    const user = await loginUser(data.get('email'), data.get('password'));
    if (user) {
        window.location.href = '/';
    }
});