const shapes = require("./lib/shapes.js");

const rect = new shapes.Rectangle(`SVG`, `red`);
const cir = new shapes.Circle("PIX", "blue");
const tri = new shapes.Triangle("TUC", "green");

rect.print();
cir.print();
tri.print();
