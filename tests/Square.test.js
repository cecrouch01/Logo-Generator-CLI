const Square = require('../lib/Square')

describe('Square', () => (
    it('should render a square svg', () => {
        const square = new Square('cec', 'white', 'square', 'black');
        const render = `<rect x='0' y='0' width='200' height='200' fill='black'/>`;
        expect(square.render()).toEqual(render)
    })
));