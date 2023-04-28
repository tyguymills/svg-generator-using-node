const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");

var width = 0;
var height = 0;
const svg = SVG(document.documentElement).size(width, height);

const logomaker = [
    {
        type:"input",
        message:"what would you like to put on your svg?",
        name:"text"
    },
    {
        type:"input",
        message:"",
        name:""
    },
    {
        type:"input",
        message:"",
        name:""
    },
    {
        type:"list",
        message:"what shape do you want your svg?",
        name:"shape",
        choices:["triangle", "circle", "square"],
        filter(value) {
            return value.toLowerCase();
    },
    {
        type:"input",
        message:"What color would you like your svg?",
        name:"svgColor"
    },
]

rl.question('What is the name of your logo? ', (name) => {
  console.log(`Generating ${name} logo...`);
});

