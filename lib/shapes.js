//here we create a class of shapes, that all new shapes created will inherit the attributes from.
class Shapes {
    constructor(shape, text, textColor, shapeColor) {
      this.shape = shape;
      this.text = text;
      this.textColor = textColor;
      this.shapeColor = shapeColor;
    }
  }
 
  
  module.exports = Shapes;
 