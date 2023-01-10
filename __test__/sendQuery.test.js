import { sendQuery } from '../src/client/js/srvInteract'

const mockUrl = { url: 'https://meresophistry.substack.com/p/seven-layers-of-listening' };

describe('Testing the client sends a POST request', () => {
    test('Testing the sendQuery function', () => {
        expect(sendQuery(mockUrl)).toBeDefined();
    });
});
