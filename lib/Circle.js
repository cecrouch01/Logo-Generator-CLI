const Logo = require('./Logo')

class Circle extends Logo{
    render(){
        return `<circle cx='50%' cy='50%' r='35%' fill='${this.shapeColor}'/>`
    }
}

module.exports = Circle