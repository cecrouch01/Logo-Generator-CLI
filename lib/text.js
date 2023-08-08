const Logo = require('./Logo')

class Text extends Logo {
    render(data) {
       return `<text x='5' y='125' font-size='95px'>${this.text}</text>`
    }
}

module.exports = Text