class Logo {

    constructor(text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor
    }
    render(){
        throw 'Child class must implement render() method.'
      }
    //   renderSVG(){
    //     for(let i = 0; i < this.children.length; i++){
    //       this.render(this.children[i])
    //     }
    //   }
}

module.exports = Logo