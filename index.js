const inquirer = require("inquirer");
const fs = require('fs');
const generatorMarkdown = require('./utils/generateMarkdown');



//---- Array of questions for the user ----//

const questions = [{

        type: "input",
        message: "What is the title of your project?",
        name: "title"
    }, {
        type: "input",
        message: "Please, enter a description of your project.",
        name: "description"
    },{
        type: "input",
        message: "What do you need to do you install the application?",
        name: "installation"
    }, {
        type: "input",
        message: "Provide instructions on how to use the application:",
        name: "usage"
    }, {
        type: "list",
        message: "Please select a software license you would like to use.",
        name: "license",
        choices : [
            "APACHE 2.O",
            "BSD 3-clause license",
            "Mozilla Public License 2.0",
            "Microsoft Public License",
            "MIT",
            "Open Software License 3.0",
            "None"
        ],
    }, {
        type: "input",
        message: "Please, enter any contributing guidelines (if applicable):",
        name: "guidelines"

    }, {
        type: "input",
        message: "Please, enter test instructions (if applicable):",
        name: "test"
    },{
        type: 'input',
        message: 'What is your Github username?',
        name: 'username'
    }, {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    },

]


//---- function to add answers to a README file ----//

function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("Your README file is ready to go!")
        }
    })

}



// ---- Function to prompt the user with the questions ----//

function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile("mock-README.md", generatorMarkdown(data));
            console.log(data)

        })

}



//---- Initialize the program ----//

init();