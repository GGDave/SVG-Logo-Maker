//this file contains the paramaters for testing the triangle, and can be initiated by using the "npm run test" in the comand line with jest installed
const Triangle = require("../lib/triangle");

describe("Triangle", () => { //in this line we call a jest framework feature by creating a describe function. 
  
    describe("render", () => {
      it("should return the a new generated shape with the refferenced paramaters", () => {
       
        const triangleTest = new Triangle('abc', 'green', 'blue'); // here we create a constant an give it a value of a new shape.
       
        expect(triangleTest.render('red')).toBe("<polygon points='150, 18 244, 182 56, 182' fill='red' />");
        //in this the above line we use the new shape constant and compare it to the paramaters above. if the paramaters match the test will pass.
      });
    });
  });