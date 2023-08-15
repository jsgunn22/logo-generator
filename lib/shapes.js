const fs = require("fs");

class Shape {
  constructor(text, fill) {
    this.text = text;
    this.fill = fill;
  }
}

class Rectangle extends Shape {
  print() {
    fs.writeFile(
      `./examples/${this.text}_rectangle.svg`,
      `<svg width='160' height='160'>
        <rect x='0' y='0' width='160' height='160' fill='${this.fill}'/>
        <text x='0' y='0' font-size="60" fill="white">
            <tspan x="16.5" y="104">${this.text}</tspan>
        </text>
    </svg>`,
      (err) =>
        err ? console.log(err) : console.log("Saved to examples folder")
    );
  }
}

class Circle extends Shape {
  print() {
    fs.writeFile(
      `./examples/${this.text}_circle.svg`,
      `<svg width='160' height='160'>
      <circle cx="150" cy="100" r="80" fill="${this.fill}"/>
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${this.text}</text>
    </svg>`,
      (err) =>
        err ? console.log(err) : console.log("Saved to examples folder")
    );
  }
}

class Triangle extends Shape {
  print() {
    fs.writeFile(
      `./examples/${this.text}_triangle.svg`,
      `<svg width='160' height='160'>
      <polygon points="150, 18 244, 182 56, 182" fill='${this.fill}'/>
      <text x="150" y="140" font-size="40" text-anchor="middle" fill="white">${this.text}</text>
    </svg>`,
      (err) =>
        err ? console.log(err) : console.log("Saved to examples folder")
    );
  }
}

module.exports = {
  Rectangle,
  Circle,
  Triangle,
};
