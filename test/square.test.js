//this file contains the paramaters for testing the square, and can be initiated by using the "npm run test" in the comand line with jest installed
const Square = require("../lib/square");

describe("Square", () => {//in this line we call a jest framework feature by creating a describe function.
  
    describe("render", () => {
      it("should return the a new generated shape with the refferenced paramaters", () => {
       
        const squareTest = new Square('abc', 'green', 'blue');// here we create a constant an give it a value of a new shape.
        
        expect(squareTest.render('red')).toBe('<rect x="50" y="20" width="200" height="200" fill= "red"/>');
        //in this the above line we use the new shape constant and compare it to the paramaters above. if the paramaters match the test will pass.
      });
    });
  });