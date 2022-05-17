// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderPosts } from '../render-utils.js';

const test = QUnit.test;

test('test renderPosts function, should render a duplicate of the hardcoded HTML', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="post-listings"><div class="div-left"><img src="https://place-puppy.com/300x300" class="post-image"></div><div class="div-right"><h2 class="post-title">Dog Training Classes</h2><p class="post-description">At Happy-Go-Lucky Dog Training, we hold an average of 16 different classes a week in two training rooms. We have four instructors and six assistant instructors, all of whom are on-staff to maintain consistency in methods and a high level of experience throughout our classes. There’s lots of one-on-one attention and hands-on practice, helping you and your dog succeed every step of the way.</p><span class="post-contact">Happy-Go-Lucky Dog Training</span></div></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const dogTrainingClasses = {
        id: 3,
        title: 'Dog Training Classes',
        description: 'Looking for roommate to split rent late summer or fall, located in SE Portland. $650/month',
        contact: 'Happy-Go-Lucky Dog Training',
        image: 'https://place-puppy.com/300x300',
    };
    const actual = renderPosts(dogTrainingClasses);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
