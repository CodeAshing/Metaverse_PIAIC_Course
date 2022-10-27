const inquirer = require('inquirer');
let score: any = [], question: any = [
    {
        type: "list",
        name: "f_1",
        message: "The highest waterfall in the world is:",
        choices: ['Nigerian waterfall', 'Louiz wale waterfall', 'Angel waterfall', 'Tibetian waterfall']
    },
    {
        type: "list",
        name: "f_2",
        message: "Death valley of California is famous for:",
        choices: ['Delicious Foods', 'Hottest Area', 'Buildings', 'Forests']
    },
    {
        type: "list",
        name: "f_3",
        message: "The deepest part of the ocean is:",
        choices: ['Mariana Trench', 'Venizuala loops', 'Bermuda triangle', 'Black valley']
    },
    {
        type: "list",
        name: "f_4",
        message: "Lowest point of Europe is:",
        choices: ['Virgo bay', 'Caspian Sea', 'Mt.Elbrus', 'GreyMark forests']
    },
    {
        type: "list",
        name: "f_5",
        message: "Antarctica contains area of the earth is:",
        choices: ['1.3%', '11.7%', '3.4%', '8.2%']
    }
];

inquirer
    .prompt(question)
    .then((answers: any) => {
        let f_1: string = answers.f_1
        let f_2: string = answers.f_2
        let f_3: string = answers.f_3
        let f_4: string = answers.f_4
        let f_5: string = answers.f_5
        if (f_1 == 'Angel waterfall') {
            score.push(10);
        };
        if (f_2 == 'Hottest Area') {
            score.push(10);
        };
        if (f_3 == 'Mariana Trench') {
            score.push(10);
        };
        if (f_4 == 'Caspian Sea') {
            score.push(10);
        };
        if (f_5 == '8.2%') {
            score.push(10);
        };
        let sum = 0;
        for (let i in score) {
            sum += score[i]
        }
        console.log(`Your obtained scores are:${sum} out of 50`)
    });


