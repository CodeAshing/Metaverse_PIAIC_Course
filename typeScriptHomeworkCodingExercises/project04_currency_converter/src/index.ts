const inquirer = require('inquirer');
const CC = require('currency-converter-lt')
inquirer
    .prompt([
        {
            type: "input",
            name: "firstCurrency",
            message: "Enter the First currency you want to convert?"
        },
        {
            type: "input",
            name: "second ",
            message: "Enter the Second currency in which you want to be converted?"
        },
        {
            type: "number",
            name: "amount",
            message: "Enter the amount you want to convert?"
        },
    ])
    .then((answers: any) => {
        let first: string = answers.firstCurrency;
        let second: string = answers.second;
        let amount: number = answers.amount;
        let currencyConverter = new CC({ from: first, to: second, amount });
        currencyConverter.convert().then((response: number) => {
            console.log(response)
        })
    });
