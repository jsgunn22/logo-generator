const shapes = require("./lib/shapes.js");

const rect = new shapes.Rectangle(`SVG`, `red`);
const cir = new shapes.Circle("PIX", "blue");

rect.print();
cir.print();
