const Shapes = require("./shapes.js"); 
 //in this line we create a constant of shapes and have it qual to "require" and add the file 
 //path we want to import, this will allow the following function to inherited attibutes from 
 //the "shapes" file 



class Circle extends Shapes { //in this line we create a class of circle, we use "extend shape" to allow the the constructor to receive the attibutes from shapes.js
    constructor(text, textColor, shapeColor) { //in this line the constructor will pull the three named parameters from class Shapes
        super(text, textColor, shapeColor) //we pass in a super keyword to allow the parameters to pass from class shapes
        this.shape = "Circle" // in this line we identify what we want to name what this constructor will generate,
                              // in this example we name it circle. and will be used any time a new circle is created.
    }

    render(color) { 
        return `<circle cx="150" cy="125" r="80"   fill="${color}"/>`;
    }
    //when this method gets called, it will return a circle with the parameters defined, "center y, center x and radius"
    //and the fill parameter of color will be selected by the user and passed to this method ultimately generating the circle.
}

module.exports = Circle; 
//lastly we add the above line so the information in this page is accessible to the other files,
// by allowing the information to be exported. 