export function renderPosts(posts) {
    const div = document.createElement('div');
    div.classList.add('post-listings');

    const divLeft = document.createElement('div');
    divLeft.classList.add('div-left');

    const img = document.createElement('img');
    img.src = `${posts.image}`;
    img.classList.add('post-image');

    const divRight = document.createElement('div');
    divRight.classList.add('div-right');

    const h2 = document.createElement('h2');
    h2.classList.add('post-title');
    h2.textContent = `${posts.title}`;

    const p = document.createElement('p');
    p.classList.add('post-description');
    p.textContent = `${posts.description}`;

    const span = document.createElement('span');
    span.classList.add('post-contact');
    span.textContent = `${posts.contact}`;

    divLeft.append(img);
    divRight.append(h2, p, span);
    div.append(divLeft, divRight);
    return div;
}