const Logo = require('./Logo')

class Triangle extends Logo {
    render(){
        return `<polygon points='150, 5 5,195 295, 195' fill='${this.shapeColor}'/>
        <text x='80' y='160' font-size='70px' fill='${this.textColor}'>${this.text.toUpperCase()}</text>`

    }
}

module.exports = Triangle