const Shapes = require("./shapes.js"); 
 //in this line we create a constant of shapes and have it qual to "require" and add the file 
 //path we want to import, this will will allow the following function to receive the inherited attibutes from 
 //the "shapes" file 



class Circle extends Shapes { //in this line we create a class of circle, we use "extend shape" to allow the the cunstructor to receive the attibutes from shapes.js
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
        this.shape = "Circle"
    }

    render(color) {
        return `<circle cx="150" cy="125" r="80"   fill="${color}"/>`;
    }
}

module.exports = Circle;