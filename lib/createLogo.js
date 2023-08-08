const Text = require('./Text')
const Triangle = require('./Triangle')
const Circle = require('./Circle')
const Square = require('./Square')

//This decides which class to use
function shapeRender(input) {
    const triangle = new Triangle(...input)
    const circle = new Circle(...input)
    const square = new Square(...input)
    const shapeArray = [ 
        {
            name: 'Triangle',
            object: triangle,
        },
        {
            name: 'Circle',
            object: circle,
        },
        {
            name: 'Square',
            object: square
        }
    ]
    for (let i = 0; i < shapeArray.length; i++){
        if(input[2] === shapeArray[i].name){
            return shapeArray[i].object.render()
        }
    }
}

//This creates the contents for the svg file
function createSVGFile(data) {
    const userInput = [data.text, data.textColor, data.shape, data.shapeColor]
    const text = new Text(...userInput).render();
    const svgFile = `<svg class='${data.shape}' width='300' height='200' xmlns='http://www.w3.org/2000/svg'>
    ${shapeRender(userInput)}
    ${text}
    </svg>
    `
    return svgFile
};

module.exports = { createSVGFile }