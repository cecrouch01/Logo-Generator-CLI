const Text = require('./text.js')

//testing to see if I am creating three characters
describe('Text', () => {
    describe('Text Element', () => {
        it('should render the correct svg text element', () => {
            const TextEl = new Text('cec', '#1AFFa1', 'triangle', 'white')
            const render = `<text x='5' y='125' font-size='95px' fill='#1AFFa1'>CEC</text>`
            expect(TextEl.render()).toEqual(render)
        });
    });
    describe('Text Length', () => {
        it('should render the correct svg text element', () => {
            const TextText = new Text('cec', '#1AFFa1', 'triangle', 'white');
            expect(TextText.text.length).toBeLessThanOrEqual(3)
        });
    });
})