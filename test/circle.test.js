//this file contains the paramaters for testing the circle, and can be initiated by using the "npm run test" in the comand line with jest installed
const Circle = require("../lib/circle");

describe("Circle", () => {//in this line we call a jest framework feature by creating a describe function.

    describe("render", () => {
    it("should return the a new generated shape with the refferenced paramaters", () => {
  
      const circleTest = new Circle('abc', 'green', 'blue');// here we create a constant an give it a value of a new shape.

      expect(circleTest.render('red')).toBe('<circle cx="150" cy="125" r="80"   fill="red"/>');
      //in this the above line we use the new shape constant and compare it to the paramaters above. if the paramaters match the test will pass.
    });
  });
});