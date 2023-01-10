import { handleSubmit } from '../src/js/formHandler'
import { JSDOM } from 'jsdom'

const dom = new JSDOM(`<!doctype html><html><input type=text id='textToSend'></input></html>`);
global.document = dom.window.document
global.window= dom.window

describe('Testing the form handler function', () => {
    test('Testing the handleSubmit() function', () => {
        const fakeEvent = new Event('submit')
        expect(handleSubmit(fakeEvent)).toBeUndefined()
    });
});
