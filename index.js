const shapes = require("./lib/shapes.js");
const inquirer = require("inquirer");
const fs = require("fs");

// question propts to appear in the console.
const questions = [
  {
    type: "input",
    name: "name",
    message: "Input up to 3 characters for your logo.",
    validate: (name) =>
      name.length >= 4 ? "That is too many characters" : true,
  },
  {
    type: "input",
    name: "textColor",
    message: "Enter a color name or hexidecimal color code for the text color",
    validate: (textColor) =>
      !textColor
        ? "Enter a color name or hexidecimal color code for the text color"
        : true,
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
    message: "Enter a color name or hexidcimal color code for the fill color",
    validate: (fill) =>
      !fill
        ? "Enter a color name or hexidcimal color code for the fill color"
        : true,
  },
];

// Initial Application
function init() {
  let answers = () => inquirer.prompt(questions).then((response) => response);

  async function print() {
    let a = await answers(); // waits for all prompt responses

    let fileName = a.name;
    let name = a.name;
    let textColor = a.textColor;
    let fill = a.fill;
    let shapeCode; // Injects a specific element w/ properties based on the shape selected
    let textSize = 60; // configures the text size depending on the shape selected
    let textPosition; // configures the position of text based on the shape selected

    let shape = questions[2].choices;

    // switch to return specific shape
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
        name = `<tspan x="100" y="124">${name}</tspan>`;
        break;
      case shape[2]:
        const triangle = new shapes.Triangle(fill);
        shapeCode = triangle.render();
        textPosition = `x="150" y="144" text-anchor="middle"`;
        textSize = 48;
      default:
        break;
    }

    // prints the new file or overwrites existing file in examples dir
    fs.writeFile(
      `./examples/${fileName}_logo.svg`,
      `<?xml version="1.0" encoding="UTF-8"?>
            <svg width='300' height='200' version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                ${shapeCode}
                <text ${textPosition} font-size="${textSize}" fill="${textColor}">
                    ${name}
                </text>
            </svg>`,
      (err) =>
        err ? console.log(err) : console.log("Saved to examples folder")
    );
  }

  print(); // Calls the funtion to print the file
}

init(); // Calls the application when node is ran
