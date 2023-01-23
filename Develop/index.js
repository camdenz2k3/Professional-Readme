// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const markdown = require("markdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Type a short description of your project."
    },
    {
        type: "input",
        name: "installation",
        message: "What steps are required to install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "Describe how to use your project."
    },
    {
        type: "list",
        name: "license",
        message: "Select a license for your project.",
        default: 'None',
        choices: ['Apache License 2.0','Artistic license 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'Mozilla Public License 2.0', 'The Unlicense', 'zLib License', 'None']
    },
    {
        type: "input",
        name: "contribution",
        message: "Explain how others can contribute to your project."
    },
    {
        type: "input",
        name: "tests",
        message: "Describe any test instructions."
    },
    {
        type: "input",
        name: "github",
        message: "What's your github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What's your email?"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data)=>{
    const readme = markdown(data)
    writeToFile(readme)
})}

// Function call to initialize app
init();
