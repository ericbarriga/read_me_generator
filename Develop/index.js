// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is the title of the project?',
    name: 'title',
},
{
    type: 'input',
    message: 'what is this project about',
    name: 'description',
},
{
    type: 'input',
    message: 'how to install the project/requirements to install',
    name: 'install',
},
{
    type: 'input',
    message: 'contribution guidelines',
    name: 'contribution',
},
{
    type: 'input',
    message: 'how to test',
    name: 'test',
},

{
    type: 'input',
    message: 'GitHub Username',
    name: 'gitHub',
},
{
    type: 'input',
    message: 'Please enter email',
    name: 'email',
},
{
    type: 'list',
    message: 'choose a license',
    choices: ["MIT", 'APACHE', "IBM", 'GNU'],
    name: 'license',
},

];


/*
prompt the usser questions ,
use the users answers to make markdown string  ,
use the string to generate read me 
  */


// TODO: Create a function to write README file
function makeReadme(fileName, markDownData) {
    console.log(fileName);
    fs.writeFile(fileName, markDownData, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(function (answers) {
            // console.log('answers ----------->', answers);
            // console.log(answers.title);
            const markdown = generateMarkdown(answers)
            // console.log(markdown);
            makeReadme('README.md', markdown);
        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });

    // console.log('after prompt ----------------->');
}

// Function call to initialize app
init();
