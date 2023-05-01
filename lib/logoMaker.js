//this file contains the code that will call the other files and generate the selected shape
const Square = require("./square");    // lines 2-4 containt the constants of the shapes and file locations we want the code to pull information from
const Triangle = require("./triangle");
const Circle = require("./circle");

function logoMaker(response) { // in this line we create a funtion and we call it logo maker, this function contains an if statement that will check and verify 
                               //what the user has selected. 

if (response.shape === "Circle") { //if the user selects a circle this respose will trigger and a new instance of a circle will be called and created, 
const circle = new Circle; // this constant will allow a "new" circle to be generated 
var shapeRender = circle.render(response.shapeColor) // in this variable the selected color is called through the render method, on the selectedshape
}                                                    //this result will them be stored in "shapeRender" to be used in line 24
else if (response.shape === "Square") { // if the user selects square this section will trigger
const square = new Square;
var shapeRender = square.render(response.shapeColor) 
} 
else if (response.shape === "Triangle") { // and if the user selects this shape this section will trigger.
const triangle = new Triangle;
var shapeRender = triangle.render(response.shapeColor)
}

return `
<svg 
width="300" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">${shapeRender}
<text font-size="2em" x="117" y="133" fill="${response.textColor}">${response.text}</text>
</svg>`
// the code above contains additional paramaters that will be shared among all the shapes. we start and end the paramaters in an "svg" tag 
// to allow the content to be viewed were svg content is supported

}

module.exports = logoMaker;
//lastly this allows the code to be exported and used in other areas of the program.