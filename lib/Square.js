const Logo = require('./Logo')

class Square extends Logo {
    render() {
        return`<rect x='0' y='0' width='200' height='200' fill='${this.shapeColor}'/>
        <text x='5' y='125' font-size='95px' fill='${this.textColor}'>${this.text.toUpperCase()}</text>`
    }
}

module.exports = Square