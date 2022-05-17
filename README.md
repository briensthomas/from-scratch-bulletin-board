## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"** 
  -- https://miro.com/app/board/uXjVO6VViV8=/
1) **Look at the drawing and name the HTML elements you'll need to realize your vision**

script tag for HTML:
```
<script defer src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js"></script>
```
SUPABASE import code in js:
```js
fetch-util.js

const SUPABASE_URL = '';
const SUPABASE_KEY = '';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
```

## Main/Home Page ##
  Div - Display posts on the home page
  h2 - Title
  p - post description
  span - Contact/Poster information
  img - for images to go with the post.

```js
render-utils.js

export function renderPosts() {
  const div = document.createElement('div');

  const h2 = document.createElement('h2');
  h2.textContent = post.title

  const p = document.createElement('p');
  p.textContent = post.description;

  const span = document.createElement('span');
  span.textContent = post.content;

  const img = document.createElement('img');
  img.src = `${post.image};

  div.append('h2', 'p', 'span', 'img');
  return div;
}
```


```js
app.js

const posts = await getPosts();
  for (let post of posts) {
    const postDiv = renderPosts(post);
    PlaceToAppend.append(postDiv);
  }
```

-   [ ] button - Login/Register Button for users to sign in with -- redirects to authentication page

```js
app.js

Login/Register Button: .addEventListener('click', () => {
  location.replace('/authentication-page');
})
```

## Login Page ##
  Div to Contain both forms
  Span/Label for each form: Login, and a New User Sign Up
  
    Login Form:
    Input for e-mail
    Input for password
    button for submit

    Sign Up Form:
    Input for e-mail
    Input for password
    button for submit

 ```js
 app.js

  signUpForm .addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signUpForm);
    const user = await signUpUser(data.get('email'), data.get('password'));
    if (user) {
      location.replace('/');
    }
  })
  ```
  
  ```js
  fetch-utils.js

  export async function signUpUser(email, password) {
      const response = client.auth.signUp({ email, password });
      if (response.user) {
        return response.user;
      } else {
        console.error(response.error);
      }
  }
```
## Updated Home Page ##
  Button: Login/Register Button re-displayed as logout 
  Button: Create New Post 

Logout Button:
```js
app.js

.addEventListener('click', async () => {
  await logout();
});
```
```js
fetch-utils.js

export async function logout() {
  await client.auth.signOut();
  return (location.replace('/'));
}
```

- [] Create New Post Button:
```js
app.js

.addEventListener('click', () => {
  location.replace('create-post-page');
})
```

## Create Post Page ##
    div - To contain new post form
    form - To save the user's post information
    label - Title
      input - User's title for the post
    label -Description
      input - User's content for the post
    label - Contact
      input - Contact info for the user?
    label - Image
      input - Save the user's image to the database?

    button - Submit Form

```js
create-post-page.js

createPostForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(createPostForm);
  const newPost = {
    title: data.get('title'),
    description: data.get('description'),
    contact: data.get('contact'),
    image: data.get('image'),
  }
  return (location.replace('/'));
});
```

<!-- Disregard above maybe? Demo code has the format below -->
```js
create-post-page.js

createPostForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(createPostForm);
  const createPost({
    title: data.get('title'),
    description: data.get('description'),
    contact: data.get('contact'),
    image: data.get('image'),
  }),
  location.replace('/');
})
```

```js
fetch-utils.js

export async function createPost(post) {
  const response = await client.from('TABLE NAME').insert(post);
  return response.data
})
```

1) **Look at the drawing and imagine using the app. What _state_ do you need to track?** 
1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")** 
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)
