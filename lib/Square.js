const Logo = require('./Logo')

class Square extends Logo {
    render() {
        return`<rect x='0' y='0' width='200' height='200' fill='${this.shapeColor}'/>`
    }
}

module.exports = Square