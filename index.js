const fs = require("fs"); //this constant will be used to save the information collected and write it to a file.
const inquirer = require("inquirer"); //this function will allow the storing of the user inputs.
const logoMaker = require("./lib/logoMaker");// this constant will allow the response to be imported from the selected file path 


const questions = [ //in this section we include all the qhestions that are going to be prompted to the user. inquirer will then store the inputs to be used later in the code.
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

// in the following code we use the fs application to save the information and write it to a file.
function writeToFile(fileName, data) {
    console.log('saving...do not turn off power!'); 
    fs.writeFile(fileName, data, function (err) {
    if (err) {
        return console.log(err);
    }
    console.log('Your Logo has been created'); 
});
}

 //the following function will initiate the application, it will use the question data gathered by inquirer.
 //lastly it will use information from the "writeToFile" function and store the completed file in the designated folder path. 
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log(response)
        const newlogo = logoMaker(response);
        console.log(newlogo)
        const fileName="./examples/newLogo.svg"
        writeToFile(fileName,newlogo)


    });
}

init();