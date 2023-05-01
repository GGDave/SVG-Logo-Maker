const Square = require("../lib/square");

describe("Square", () => {
  
    describe("render", () => {
      it("", () => {
       
        const mySquare = new Square('abc', 'green', 'blue');
        
        expect(mySquare.render('red')).toBe('<rect x="50" y="20" width="200" height="200" fill= "red"/>');
      });
    });
  });