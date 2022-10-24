import inquirer from "inquirer";

const generateRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

let score = 0;
let lives = 3;
let randomInt = generateRandomNumber(1, 5);

function validateVal(lastNum: number) {
    return (val: string): string | true => {
        if (val === 'quit') {
            return true;
        }
        else if (isNaN(parseInt(val))) {
            return "Please enter a number";
        } else if (parseInt(val) < 1 || parseInt(val) > lastNum) {
            return `Please enter a number from 1 to ${lastNum}`;
        }
        else {
            return true
        };
    }
}

function validateAnswer(round: number, lastNum: number, answer: string) {
    if (answer === 'quit') {
        console.log(`Your final score is ${score}`);
        return;
    } else if (parseInt(answer) === randomInt) {
        console.log("Correct!");
        lives = 3 * (round + 1);
        score = score + round;
        console.log(`Lives increased to ${lives}!`);
        console.log(`Score: ${score}`);
        promptQuestion(round + 1, lastNum + 5);
        randomInt = generateRandomNumber(1, lastNum + 5);
    } else {
        lives--;
        if (lives === 0) {
            console.log("Game Over!");
        }
        else {
            console.log(`Wrong! You have ${lives} lives left.`);
            promptQuestion(round, lastNum);
        }
    }
}

function promptQuestion(round: number = 1, lastNum: number = 5) {
    inquirer.prompt([{
        type: "input",
        name: "answer",
        message: `Round ${round}, Enter a number from 1 to ${lastNum}:`,
        validate: validateVal(Number(lastNum)),
    }]).then(({ answer }) => {
        validateAnswer(round, lastNum, answer);
    });
}

promptQuestion();