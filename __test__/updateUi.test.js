import { updateUi } from '../src/js/updateUi'
import { JSDOM } from 'jsdom'
const dom = new JSDOM();
global.document = dom.window.document

describe('Testing the UI updater function', () => {

    test('Test for updateUi function', () => {
        document.body.innerHTML = '<div id="resultsContainer"></div>';
        
        const mockJson = { 
            score_tag: 'NEU',
            subjectivity: 'SUBJECTIVE',
            sentence_list: [
                 { text: 'Dummy text' },
                 { text: 'Dummy text' },
                 { text: 'Dummy text' },
                 { text: 'Dummy text' },
                 { text: 'Dummy text' },
                 { text: 'Dummy text' },
                 { text: 'Dummy text' },
                 { text: 'Dummy text' },
                 { text: 'Dummy text' },
                 { text: 'This is a sentence' }
            ]
        };

        expect(updateUi(mockJson)).toBeDefined();
    });
});
