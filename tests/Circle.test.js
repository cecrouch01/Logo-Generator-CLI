const Circle = require('../lib/Circle')

describe('Circle', () => (
    it('should render a circle svg', () => {
        const circle = new Circle('cec', 'white', 'circle', 'black');
        const render = `<circle cx='50%' cy='50%' r='35%' fill='black'/>
        <text x='80' y='125' font-size='70px' fill='white'>CEC</text>`;
        expect(circle.render()).toEqual(render);
    })
));