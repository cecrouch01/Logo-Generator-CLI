const Logo = require('./Logo')

class Triangle extends Logo {
    render(){
        return `<polygon points='150, 5 5,195 295, 195' fill='${this.shapeColor}'/>`

    }
}

module.exports = Triangle