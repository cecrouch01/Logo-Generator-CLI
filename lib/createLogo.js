const Shape = require('./shapes')
const Text = require('./text')

function createSVGFile() {
    const shape = new Shape.render();
    const text = new Text.render();
    const svgFile = `
    <svg width='300' height='200' xmlns='http://www.w3.org/2000/svg'>
    ${shape}
    ${text}
    </svg>
    `
    return svgFile
};

module.exports = { createSVGFile }