const SUPABASE_URL = 'https://plkemcgrxzmmcpdtjfif.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsa2VtY2dyeHptbWNwZHRqZmlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIyOTcxOTYsImV4cCI6MTk2Nzg3MzE5Nn0.kfBRa_T42tBk603NpWRP4Wq03rowUysjlQ_fwhXu6Jw';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
//Displays all posts to front page
export async function fetchPosts() {
    const response = await client.from('Posts').select('*');
    return response.data;
}

//functions for validating if user is able to access
export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export function checkAuth() {
    const user = getUser();

    if (!user) window.location.href = '/authentication-page';
}

export async function redirectLoggedIn() {
    if (getUser()) {
        location.replace('/');
    }
}

export async function signUpUser(email, password) {
    const response = await client.auth.signUp({ email, password });
    if (response.user) {
        return response.user;
    } else {
        console.error(response.error);
    }
}

export async function loginUser(email, password) {
    const response = await client.auth.signIn({ email, password });
    if (response.user) {
        return response.user;
    } else {
        console.error(response.error);
    }
}

export async function createNewPost(post) {
    const response = await client.from('Posts').insert(post);
    if (response.data) {
        return response.data;
    } else {
        console.error(response.error);
    }
}

//logout function
export async function logout() {
    await client.auth.signOut();
    return (window.location.href = '/');
}