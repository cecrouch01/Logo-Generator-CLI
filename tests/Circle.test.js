const Circle = require('../lib/Circle')

describe('Circle', () => (
    it('should render a circle svg', () => {
        const circle = new Circle('cec', 'white', 'circle', 'black');
        const render = `<circle cx='50%' cy='50%' r='35%' fill='black'/>`;
        expect(circle.render()).toEqual(render);
    })
));