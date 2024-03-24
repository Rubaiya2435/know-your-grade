#! /usr/bin/env Node

import inquirer from "inquirer"; 
const answers = await inquirer.prompt([
    //{message: "Enter your total number of your academic result so ypu know about your Grade.", type:"number", name:"total number"},
    {
    name: "userGrade",
    type: "number",
   message: "Please! Enter your total result number between 1-100 to konw your Grade.",
}
]);
if (answers.userGrade >= "80"){
    console.log("Congratulations! You are get A+ grade.");
}
else if (answers.userGrade >= "70"){
    console.log("Congratulations! You are get A grade.");
}
else if (answers.userGrade >= "60"){
    console.log("Congratulations! You are get B grade.");
}
else if (answers.userGrade >= "50"){
    console.log("Congratulations! You are get C grade.");
}
else if (answers.userGrade >= "40"){
    console.log("Congratulations! You are get D grade.");
}
else{
    console.log("Sorry! You are trying next time. Your result is below 40%.");
};

