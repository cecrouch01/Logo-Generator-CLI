const Square = require('../lib/Square')

describe('Square', () => (
    it('should render a square svg', () => {
        const square = new Square('cec', 'white', 'square', 'black');
        const render = `<rect x='0' y='0' width='200' height='200' fill='black'/>
        <text x='5' y='125' font-size='95px' fill='white'>CEC</text>`;
        expect(square.render()).toEqual(render)
    })
));