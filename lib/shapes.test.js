const Shapes = require('./shapes')

describe('Shapes', () => {
    describe('Square User input', () => {
        it('should render a square svg element', () => {
            const shapeArray = ['square', 'circle', 'triangle']
            const renderArray = [`<rect x='0' y='0' width='200' height='200' fill='pink'/>`,`<circle cx='50%' cy='50%' r='35%' fill='pink' />`, `<polygon points='150, 5 5,195 295, 195' fill='pink' />`]
            for(let i = 0; i < shapeArray.length; i++) {
                const shapeClass = new Shapes('cec', 'black', shapeArray[i], 'pink')
                expect(shapeClass.render()).toEqual(renderArray[i])
            }
        });
    });
});
//check to see if the render matches the expected outcome