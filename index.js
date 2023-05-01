const fs = require("fs");
const inquirer = require("inquirer");
const logoMaker = require("./lib/logoMaker");


const questions = [
    {
    type: "list",
    message: "Please select one of the following?",
    name: "shape",
    choices: ["Circle", "Square", "Triangle"],
    },
    {
    type: "input",
    name: "text",
    message: "Please type three Characters:",
    validate: function(letters) {
        if (letters.length > 3) {
            return " Please enter no more than three characters ";
        }
        return true;
    }
    },
    {
    type: "input",
    message: "Please enter a text color ",
    name: "textColor",
    },
    {
    type: "input",
    message: "Please enter a color for the background of your shape",
    name: "shapeColor",
    }
];


function writeToFile(fileName, data) {
    console.log('saving...do not turn off power!'); 
    fs.writeFile(fileName, data, function (err) {
    if (err) {
        return console.log(err);
    }
    console.log('Your Logo has been created'); 
});
}

 
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log(response)
        const logo = logoMaker(response);
        console.log(logo)
        const fileName="./examples/newLogo.svg"
        writeToFile(fileName,logo)


    });
}

init();