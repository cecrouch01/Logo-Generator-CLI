const Logo = require('./Logo')
//This creates the text for the logo based on user input
class Text extends Logo {
    render() {
       return `<text x='5' y='125' font-size='95px' fill='${this.textColor}'>${this.text.toUpperCase()}</text>`
    }
}

module.exports = Text
