import {fireEvent} from '@testing-library/dom';
import {toHaveStyle} from '@testing-library/jest-dom';


// testing structure
describe('#fileOrClassName', () => {

    // the stuff in this code block happens before all the tests are run
    beforeAll(() => {
        // stuff like setting up jquery to use in tests
        globalJquery = global.$;
        global.$ = require("jquery");
    });

    // the stuff in this code block happens after all the tests are run
    afterAll(() => {
        // stuff like putting jquery back to normal again
        global.$ = globalJquery;
    });

    describe('#functionName', () => {
        it('what is this test showing us?', () => {
            // put some test stuff here

            // using the `expect` keyword tells jest what to look for
            expect.anything();
        })
    })

});
// the above structure can be however you like it with as many or few describe() and it() functions to suit your tests
// what is shown here is my preferred structure as it is nicely nested and easy to read :)

describe('#script', () => {

    // normal javascript / jest test
    describe('#getText', () => {
        const getText = require('../script').getText;

        it('returns the string with given hex colour', () => {
            const actual = getText("#FOO");
            const expected = '<li class="list-group-item">#FOO</li>'
        
            expect(actual).toBe(expected);
        });
    });

    // tests for jquery in jest
    describe('#loadButtonActions', () => {
        const loadButtonActions = require('../script').loadButtonActions;

        beforeAll(() => {
            globalJquery = global.$;
            global.$ = require("jquery");
        });
    
        afterAll(() => {
            global.$ = globalJquery;
        });

        it('hide button hides the welcome text', () => {
            document.body.innerHTML = `
            <body class="container">
                <h1 id="welcomeHeading">welcome to the django jquery test site</h1>
                <button type="button" id="hideBtn">Hide Welcome Text</button>
            </body>
            `;

            loadButtonActions();

            const button = document.querySelector('#hideBtn');
            const welcomeHeading = document.querySelector('#welcomeHeading');

            expect(welcomeHeading).toBeVisible();

            fireEvent.click(button);

            expect(welcomeHeading).not.toBeVisible();
        });
        it('unhide button shows the welcome text', () => {
            document.body.innerHTML = `
            <body class="container">
                <h1 id="welcomeHeading" style="display: none;">welcome to the django jquery test site</h1>
                <button type="button" id="unhideBtn">Unhide Welcome Text</button>
            </body>
            `;

            loadButtonActions();

            const button = document.querySelector('#unhideBtn');
            const welcomeHeading = document.querySelector('#welcomeHeading');

            expect(welcomeHeading).not.toBeVisible();

            fireEvent.click(button);

            expect(welcomeHeading).toBeVisible();
        });
        it('make welcome text pink', () => {
            document.body.innerHTML = `
            <body class="container">
                <h1 id="welcomeHeading">welcome to the django jquery test site</h1>
                <button type="button" id="pinkBtn">Make Pink</button>
            </body>
            `;

            loadButtonActions();

            const button = document.querySelector('#pinkBtn');
            const welcomeHeading = document.querySelector('#welcomeHeading');

            fireEvent.click(button);

            expect(welcomeHeading).toHaveStyle("color: PaleVioletRed;");
        });  
        it('make welcome text gray', () => {
            document.body.innerHTML = `
            <body class="container">
                <h1 id="welcomeHeading">welcome to the django jquery test site</h1>
                <button type="button" id="greyBtn">Make Gray</button>
            </body>
            `;

            loadButtonActions();

            const button = document.querySelector('#greyBtn');
            const welcomeHeading = document.querySelector('#welcomeHeading');

            fireEvent.click(button);

            expect(welcomeHeading).toHaveStyle("color: DarkGray;");
        });
    });

    describe('#addColourHistory', () => {
        const addColourHistory = require('../script').addColourHistory;

        beforeAll(() => {
            globalJquery = global.$;
            global.$ = require("jquery");
        });
    
        afterAll(() => {
            global.$ = globalJquery;
        });

        it('append is called with colour html string', () => {
            const appendSpy = jest.spyOn($.fn, "append");

            addColourHistory("blue");

            expect(appendSpy).toHaveBeenCalled();
            expect(appendSpy).toHaveBeenCalledTimes(1);
            expect(appendSpy).toHaveBeenCalledWith(
                `<li class="list-group-item">blue</li>`
            );
        });
    });
});

