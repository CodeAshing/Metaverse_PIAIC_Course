const inquirer = require('inquirer');
inquirer
    .prompt([
        {
            type: "input",
            name: "sentence",
            message: "Enter Tour Text?"
        },
    ])
    .then((answers:any) => {
        let list = answers.sentence.split(" ");
        console.log("The total words in the paragraph excluding white spaces are:")
        console.log(list.length)
    });