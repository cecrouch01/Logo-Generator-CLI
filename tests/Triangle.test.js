const Triangle = require('../lib/Triangle')

describe('Triangle', () => (
    it('should render a triangle svg', () => {
        const triangle = new Triangle('cec', 'white', 'triangle', 'black');
        const render = `<polygon points='150, 5 5,195 295, 195' fill='black'/>
        <text x='80' y='160' font-size='70px' fill='white'>CEC</text>`;
        expect(triangle.render()).toEqual(render);
    })
));