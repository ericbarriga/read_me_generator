// TODO: Include packages needed for this application
const inquire = require('inquire')
const fs = require('fs')
const util = require('util')


// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is the title of the project?',
    name: 'Title:',
},
{
    type: 'input',
    message: 'what id this project about,',
    name: 'Description:',
},
{
    type: 'input',
    message: 'how to install the project/requirements to install,',
    name: 'install',
},
{
    type: 'input',
    message: ' contribution guidelines ,',
    name: 'Description',
},
{
    type: 'input',
    message: 'how to test ,',
    name: 'instructions',
},
{
    type: 'list',
    message: ',',
    name: 'Description',
},
{
    type: 'input',
    message: 'GitHub Username,',
    name: 'Username:',
},
{
    type: 'input',
    message: 'Please enter email,',
    name: 'Email:',
},

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
