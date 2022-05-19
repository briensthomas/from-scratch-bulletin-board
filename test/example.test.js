// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderPosts } from '../render-utils.js';

const test = QUnit.test;

test('test renderPosts function, should render a duplicate of the hardcoded HTML', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="post-listings"><div class="div-left"><img src="https://assets.petco.com/petco/image/upload/f_auto,q_auto/category-grooming-baths-for-every-breed-384w-384h" class="post-image"></div><div class="div-right"><h2 class="post-title">Pet Grooming Services</h2><p class="post-description">We’ll suds away dirt, oil and debris to help skin &amp; coats of all types look and feel great.</p><span class="post-contact">David F.</span></div></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const dogTrainingClasses = {
        id: 1,
        title: 'Pet Grooming Services',
        description: 'We’ll suds away dirt, oil and debris to help skin & coats of all types look and feel great.',
        contact: 'David F.',
        image: 'https://assets.petco.com/petco/image/upload/f_auto,q_auto/category-grooming-baths-for-every-breed-384w-384h',
    };
    const actual = renderPosts(dogTrainingClasses);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
