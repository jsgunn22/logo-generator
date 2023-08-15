const fs = require("fs");

class Shape {
  constructor(fill) {
    this.fill = fill;
  }
}

class Rectangle extends Shape {
  print(text) {
    fs.writeFile(
      `./examples/${text}.svg`,
      `<svg width='160' height='160'>
        <rect x='0' y='0' width='160' height='160' fill='${this.fill}'/>
        <text x='0' y='0' font-size="60" fill="white">
            <tspan x="16.5" y="104">${text}</tspan>
        </text>
    </svg>`,
      (err) =>
        err ? console.log(err) : console.log("Saved to examples folder")
    );
  }
}

module.exports = {
  Rectangle,
};
