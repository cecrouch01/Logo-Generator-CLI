const Logo = require('./Logo')
//This will grab the shape element that corresponds with the user input. 
class Shapes extends Logo{
    render() {
        const possibleShapes = {
            square: `<rect x='0' y='0' width='200' height='200' fill='${this.shapeColor}'/>`,
            circle: `<circle cx='50%' cy='50%' r='35%' fill='${this.shapeColor}' />`,
            triangle: `<polygon points='150, 5 5,195 295, 195' fill='${this.shapeColor}' />`,
        }
        return possibleShapes[this.shape]
    }
}
module.exports = Shapes