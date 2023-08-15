const shapes = require("./shapes.js");

describe("Shapes", () => {
  describe("Rectangle", () => {
    it("should render the basic rect element", () => {
      const shape = new shapes.Rectangle();
      shape.setColor("blue");
      expect(shape.render()).toEqual(
        "<rect x='0' y='0' width='160' height='160' fill='blue'/>"
      );
    });
  });

  describe("Circle", () => {
    it("should render the basic circle element", () => {
      const shape = new shapes.Circle();
      shape.setColor("red");
      expect(shape.render()).toEqual(
        '<circle cx="150" cy="100" r="80" fill="red"/>'
      );
    });
  });

  describe("Triangle", () => {
    it("should render a polygon element", () => {
      const shape = new shapes.Triangle();
      shape.setColor("green");
      expect(shape.render()).toEqual(
        "<polygon points='150, 18 244, 182 56, 182' fill='green'/>"
      );
    });
  });
});
