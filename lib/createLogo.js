const Shapes = require('./shapes')
const Text = require('./text')

function createSVGFile(data) {
    const userInput = [data.text, data.textColor, data.shape, data.shapeColor]
    const shape = new Shapes(...userInput).render();
    const text = new Text(...userInput).render();
    const svgFile = `<svg class='${data.shape} width='300' height='200' xmlns='http://www.w3.org/2000/svg'>
    ${shape}
    ${text}
    </svg>
    `
    return svgFile
};

module.exports = { createSVGFile }