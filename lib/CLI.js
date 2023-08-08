const inquirer = require('inquirer');
const fs = require('fs');
const { createSVGFile } = require('./createLogo')

//This tests to see if the input is a proper hexadecimal value or a keyword value
function colorTest(answer){
    if(answer.charAt(0) == '#'){
        let regex = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);
        if(regex.test(answer) === true) {
            return true;
        } else {
            return "You must use a proper Hexadecimal value";
        }
    } else {
        return true;
    }
}
//This is the question bank for inquirer
const questions = [
    {
        type: 'input',
        message: 'Enter up to three characters to be used in your logo.',
        name: 'text',
        validate: function(answer){
            if(answer.length <= 3) {
                return true
            } else {
                return 'You must use three characters or less.'
            }
        }
    },
    {
        type: 'input',
        message: 'Enter the keyword or the hexadecimal value for the color of the text',
        name: 'textColor',
        validate: colorTest,
    },
    {
        type: 'list',
        message: 'Select the shape you would like to use for your logo',
        choices: ['Square', 'Circle', 'Triangle'],
        name: 'shape'
    },
    {
        type: 'input',
        message: 'Enter the keyword or hexadecimal value for the color of the shape',
        name: 'shapeColor',
        validate: colorTest,
    }
];
//This will render logo data
function inputLogoInfo(data){
    return createSVGFile(data)
}
//This will write the file for the logo data
function createFile(svgFile) {
    fs.writeFileSync('./output/logo.svg', svgFile)
}

//This is the error function
function errorMessage(error){
    console.log(`This is in error: ${error}`);
}
//This is the function for running the CLI
class CLI {
    init() {
        inquirer.prompt(questions)
        .then(inputLogoInfo)
        .then(createFile)
        .then(() => {console.log('Generated logo.svg in output folder')})
        .catch(errorMessage)
    }
}

module.exports = CLI