const shapes = require("./lib/shapes.js");
const inquirer = require("inquirer");
const fs = require("fs");

// const rect = new shapes.Rectangle(`SVG`, "white", `red`);
// const cir = new shapes.Circle("PIX", "white", "blue");
// const tri = new shapes.Triangle("TUC", "white", "green");

// rect.render();
// cir.render();
// tri.render();

const questions = [
  {
    type: "input",
    name: "name",
    message: "Input 3 characters for your logo.",
  },
  {
    type: "input",
    name: "textColor",
    message: "Enter a color name or hexidecimal color code for the text color",
  },
  {
    type: "list",
    name: "shape",
    message: "What shape would you like for your logo?",
    choices: ["Circle", "Square", "Triangle"],
  },
  {
    type: "input",
    name: "fill",
    message: "Ender a color name or hexidcimal color code for the fill color",
  },
];

function init() {
  let answers = () => inquirer.prompt(questions).then((response) => response);

  async function print() {
    let a = await answers();

    let fileName = a.name;
    let name = a.name;
    let textColor = a.textColor;
    let fill = a.fill;
    let shapeCode;
    let textSize = 60;
    let textPosition;

    let shape = questions[2].choices;

    switch (a.shape) {
      case shape[0]:
        const circle = new shapes.Circle(fill);
        shapeCode = circle.render();
        textPosition = `x="150" y="122" text-anchor="middle"`;
        break;
      case shape[1]:
        const rectangle = new shapes.Rectangle(fill);
        shapeCode = rectangle.render();
        textPosition = `x="0" y="0"`;
        name = `<tspan x="16.5" y="104">${name}</tspan>`;
        break;
      case shape[2]:
        const triangle = new shapes.Triangle(fill);
        shapeCode = triangle.render();
        textPosition = `x="150" y="144" text-anchor="middle"`;
        textSize = 48;
      default:
        break;
    }

    fs.writeFile(
      `./examples/${fileName}.svg`,
      `<svg width='160' height='160'>
        ${shapeCode}
        <text ${textPosition} font-size="${textSize}" fill="${textColor}">
        ${name}
         </text>
        </svg>`,
      (err) =>
        err ? console.log(err) : console.log("Saved to examples folder")
    );
  }

  print();
}

init();
