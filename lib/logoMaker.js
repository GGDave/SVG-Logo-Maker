const Square = require("./square");
const Triangle = require("./triangle");
const Circle = require("./circle");

function logoMaker(response) {

if (response.shape === "Circle") {
const circle = new Circle;
var shapeRender = circle.render(response.shapeColor)
} 
else if (response.shape === "Square") {
const square = new Square;
var shapeRender = square.render(response.shapeColor) 
} 
else if (response.shape === "Triangle") {
const triangle = new Triangle;
var shapeRender = triangle.render(response.shapeColor)
}




return `
<svg width="300" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
${shapeRender}
<text font-size="2em" x="125" y="130" fill="${response.textColor}">${response.text}</text>
</svg>`
}

module.exports = logoMaker;