const fs = require("fs");

class Shape {
  constructor(fill) {
    this.fill = fill;
  }

  setColor(f) {
    this.fill = f;
  }
}

class Rectangle extends Shape {
  render() {
    return `<rect x='0' y='0' width='160' height='160' fill='${this.fill}'/>`;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.fill}"/>`;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points='150, 18 244, 182 56, 182' fill='${this.fill}'/>`;
  }
}

module.exports = {
  Rectangle,
  Circle,
  Triangle,
};
