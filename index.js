// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = ('')


// TODO: Create an array of questions for user input
const questions = [
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
        name: "linkedIn",
        message: "What is your linkedIn URL?",
    },
    {
        type: 'input',
        name: "Title",
        message: "What is the Title of your project?",
    },
    {
        type: 'input',
        name: "Description",
        message: "Provide a description of your project",
    },
    {
        type: 'input',
        name: "Dependencies",
        message: "Does your project require an installation of dependencies?",
    },
    {
        type: 'input',
        name: "Motivation",
        message: "What was your motivation for this project?",
    },
    {
        type: 'input',
        name: "Problems",
        message: "What problems did you encounter?",
    },
    {
        type: 'input',
        name: "Solutions",
        message: "How did you solve these problems?",
    },


    {
        type: 'input',
        name: "Images",
        message: "Will your project have images?",
    },
    {
        type: 'input',
        name: "userStory",
        message: "What is the User Story?",
    },


    {
        type: 'input',
        name: "Licenes",
        message: "Will you be using any licenses?",
    },
    {
        type: 'input',
        name: "Contributors",
        message: "Did you use any open source in your project or outside contributors?",
    },
    {
        type: 'input',
        name: "Acknowledgements",
        message: "Please list the resources you would like to give credit to:",
    },
];

inquirer.prompt(questions).then((data) => {
    console.log(data)
})
fs.writeFile('./index.txt', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});

    // take responses and write to a txt file 
    // fs.writeFile('index.txt', process.argv[2], (err) => {
        // if (err) {
        //     console.log(err);
        // } else {
        //     console.log("File written successfully!/n");
        //     console.log(data.toString());
        //     console.log("The written has the following contents:Answers");
        //     console.log(fs.readFileSync('index.txt', 'utf8'))
        // }
