const fs = require("fs");

class Shape {
  constructor(x, y, fill) {
    this.x = x;
    this.y = y;
    this.fill = fill;
  }
}

class Rectangle extends Shape {
  constructor(x, y, fill) {
    super(x, y, fill);
  }

  print(text) {
    fs.writeFile(`${text}.svg`, () => {});
  }
}

module.exports = {
  Rectangle,
};
