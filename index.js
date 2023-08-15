const shapes = require("./lib/shapes.js");
const inquirer = require("inquirer");

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

    let name = a.name;
    let textColor = a.textColor;
    let fill = a.fill;

    let shape = questions[2].choices;
    switch (a.shape) {
      case shape[0]:
        const circle = new shapes.Circle(name, textColor, fill);
        circle.render();
        break;
      case shape[1]:
        const rectangle = new shapes.Rectangle(name, textColor, fill);
        rectangle.render();
      case shape[2]:
        const triangle = new shapes.Triangle(name, textColor, fill);
        triangle.render();
      default:
        break;
    }
  }

  print();
}

init();
