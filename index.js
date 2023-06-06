// import { prompt } from "inquirer";
const inquirer = require("inquirer");
const fs = require("fs");
// const Triangle = require("./lib/Shapes.js");
// const Square = require("./lib/Shapes.js");
// const Circle = require("./lib/Shapes.js");
const { Triangle, Square, Circle } = require("./lib/Shapes");
// const jest = require("jest");
// var width = 200;
// var height = 300;
// const svg = SVG(document.documentElement).size(width, height);

const logomaker = [
  {
    type: "input",
    message: "what text would you like to put on your svg(up to 3 Characters)?",
    name: "text",
    validate:(input) => input.length < 4
  },
  {
    type: "input",
    message: "what is the text color",
    name: "textColor",
  },
  {
    type: "list",
    message: "what shape do you want your svg?",
    name: "shape",
    choices: ["Triangle", "Circle", "Square"]
  },
  {
    type: "input",
    message: "What color would you like your svg?",
    name: "svgColor",
  },
];

// What do we do?

// // Prompt user for input
// function runSVGGenerator() {
//   return inquirer.prompt(logomaker)
//     .then((results) => {
//       console.log(results);
//       // if results.shape === 'circle' then, make a circle SVG
//       // call circle class to do its job. text, text color, and shape color
//       // Circle.CreateSVG(results.text, results.textColor, results.svgColor);
//       if (results.shape === "square") {
//         let shape = new Square();
//         shape.createSVG(results.text, results.textColor, results.svgColor);
//       }
//       // if results.shape === 'triangle' then, make a triangle SVG
//       // Triangle.CreateSVG(results.text, results.textColor, results.svgColor);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

// runSVGGenerator();
// Store user input

// WHat does the input want us to do?

// Use the input to create the correct image
function writeToFile(results) {
  let svgString = "<svg version='1.1' width='300' height='200' xmlns='http://www.w3.org/2000/svg'>";
  // let shapeChoice = new (eval(results.shape))()
  let shapeChoice = new (eval(results.shape))()
  shapeChoice.setColor(results.svgColor)
  svgString += shapeChoice.render()
  svgString += `<text x='150' y='130' text-anchor='middle' font-size='40px' fill='${results.textColor}'>${results.text}</text>`
  svgString += "</svg>"
  fs.writeFileSync("logo.svg", svgString);
}

//create file
function init() {
    inquirer.prompt(logomaker)
      .then((results) => {
        console.log("Initializing the Setup of your Own Personalized SVG File");
        writeToFile(results) 
    })
}
init()