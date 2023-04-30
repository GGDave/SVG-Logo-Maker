const Triangle = require("../lib/triangle");


describe("Triangle", () => {
  
    describe("render", () => {
      it( () => {
       
        const myTriangle = new Triangle('abc', 'green', 'blue');
       
        expect(myTriangle.render('red')).toBe("<polygon points='150, 18 244, 182 56, 182' fill='red' />");
      });
    });
  });