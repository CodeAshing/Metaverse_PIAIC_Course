
const inquirer = require("inquirer");

inquirer.prompt([
    {
        type: 'input',
        name: 'firstNum',
        message: 'Enter a first number:',
        validate: validateVal()
    },
    {
        type: 'list',
        name: 'operation',
        message: 'Choose an operation:',
        choices: [
            "Add",
            "Subtract",
            "Multiply",
            "Divide"
        ],
        filter: (val: string) => val.toLowerCase(),
        validate: validateVal()
    },
    {
        type: 'input',
        name: 'secondNum',
        message: 'Enter a second number:',
        validate: validateVal(),
    },
]
)
    .then(function ({ firstNum, operation, secondNum }: any) {
        firstNum = Number(firstNum)
        secondNum = Number(secondNum)
        let result = 0;
        switch (operation) {
            case 'add':
                result = firstNum + secondNum;
                break;
            case 'subtract':
                result = firstNum - secondNum;
                break;
            case 'multiply':
                result = firstNum * secondNum;
                break;
            case 'divide':
                result = firstNum / secondNum;
                break;
            default:
                result;
        }
        console.log(`Answer: ${result}`);
    });

function validateVal() {
    return (val: string) => {
        const isValid = Boolean(val);
        return isValid || 'Please enter a number';
    };
}