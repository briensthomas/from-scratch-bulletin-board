export function renderPosts() {
    const div = document.createElement('div');
    div.classList.add('post-listings');

    const divLeft = document.createElement('div');
    divLeft.classList.add('div-left');

    const img = document.createElement('img');
    img.src = 'https://place-puppy.com/300x300';
    img.classList.add('post-image');

    const divRight = document.createElement('div');
    divRight.classList.add('div-right');

    const h2 = document.createElement('h2');
    h2.classList.add('post-title');
    h2.textContent = 'Dog Training Classes';

    const p = document.createElement('p');
    p.classList.add('post-description');
    p.textContent = 'At Happy-Go-Lucky Dog Training, we hold an average of 16 different classes a week in two training rooms. We have four instructors and six assistant instructors, all of whom are on-staff to maintain consistency in methods and a high level of experience throughout our classes. There’s lots of one-on-one attention and hands-on practice, helping you and your dog succeed every step of the way.';

    const span = document.createElement('span');
    span.classList.add('post-contact');
    span.textContent = 'Happy-Go-Lucky Dog Training';

    divLeft.append(img);
    divRight.append(h2, p, span);
    div.append(divLeft, divRight);
    return div;
}