const inquirer = require("inquirer");
const fs = require("fs");

const width = 500;
const height = 500;
const svg = SVG(document.documentElement).size(width, height);

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

const logomaker = [
    {
        type:"input",
        message:"",
        
    },
]

rl.question('What is the name of your logo? ', (name) => {
  console.log(`Generating ${name} logo...`);
});

rl.question('What is the name of your logo? ', (name) => {
    console.log(`Generating ${name} logo...`);
  
    const rectangle = svg.rect(400, 200).fill('#F44336').move(50, 150);
    const text = svg.text(name).font({ size: 60 }).fill('#FFFFFF').move(110, 220);
  
    const svgString = svg.svg();
    fs.writeFileSync(`${name}.svg`, svgString);