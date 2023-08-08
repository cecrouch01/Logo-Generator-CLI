const Logo = require('./Logo')

class Circle extends Logo{
    render(){
        return `<circle cx='50%' cy='50%' r='35%' fill='${this.shapeColor}'/>
        <text x='80' y='125' font-size='70px' fill='${this.textColor}'>${this.text.toUpperCase()}</text>`
    }
}

module.exports = Circle