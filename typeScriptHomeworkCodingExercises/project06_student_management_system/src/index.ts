const inquirer = require('inquirer');
const ShortUniqueId = require('short-unique-id');
const uid: any = new ShortUniqueId();
const UUID: any = uid(5)
inquirer
    .prompt([
        {
            type: 'input',
            name: 'userName',
            message: 'What is your name?'
        },
        {
            type: 'rawlist',
            name: 'course',
            message: 'In which course do you want to enroll?',
            choices: ['Artificial Intelligence', 'Cloud Native Computing', 'Block Chain', 'Internet Of Things']
        },
        {
            type: 'input',
            name: 'tuitionFees',
            message: 'Did you paid your fee?'
        },
        {
            type: 'checkbox',
            name: 'operation',
            message: 'Select the operation you want to perform?',
            choices: ['Enroll', 'Show status']
        },
    ])
    .then(({ name, course, tuitionFees, operation }: any) => {
        if (operation == 'Show status') {
            console.log("status is cleared")
            let userData =
            {
                name,
                course, tuitionFees,
                student_id: UUID,
            }
            console.log(userData)
        } else if (operation == "Enroll") {
            console.log('Please complete the registration process first, run the program again...')
        }
    });


