//This is the generic object for the logo
class Logo {
    text = ''
    textColor = ''
    shape = ''
    shapeColor = ''
    constructor(text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor
    }
    render(){
        throw 'Child class must implement render() method.'
      }
}

module.exports = Logo