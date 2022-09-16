// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: "title",
        message: "What is the Title of your project?",
    },
    {
        type: 'input',
        name: "description",
        message: "Provide a description of your project",
    },
    {
        type: 'input',
        name: "motivation",
        message: "What was your motivation for this project?"
    },
    {
        type: 'input',
        name: "problems",
        message: "What problems did you encounter?",
    },
    {
        type: 'input',
        name: "solutions",
        message: "How did you solve these problems?",
    },
    {
        type: 'input',
        name: "gitHub",
        message: "What is your gitHub username?",
    },
    {
        type: 'input',
        name: "email",
        message: "What is your email address?",
    },


    {
        type: 'input',
        name: "install",
        message: "How does one install dependencies in your project?",
    },
    {
        type: 'list',
        name: "Licenes",
        message: "Will you be using any licenses?",
        choices: ['Mozilla', 'Apache', 'MIT', 'GNU']
    },
    {
        type: 'input',
        name: "contributors",
        message: "Did you use any open source in your project or outside contributors?",
    },
    {
        type: 'input',
        name: "acknowledgements",
        message: "Please list the resources you would like to give credit to:",
    },
    {
        type: 'input',
        name: "tests",
        message: "What command line test will you be running? "
    },
];






// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions).then((data) => {
        writeToFile('README.md', generateMarkdown(data))

    }).catch((error) => {

        console.log(error);

    });
}

// Function call to initialize app
init();
