const Circle = require("../lib/circle");


describe("Circle", () => {

    describe("render", () => {
    it("", () => {
  
      const myCircle = new Circle('abc', 'green', 'blue');

      expect(myCircle.render('red')).toBe('<circle cx="150" cy="125" r="80"   fill="red"/>');
    });
  });
});