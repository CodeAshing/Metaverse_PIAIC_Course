import inquirer from 'inquirer';

enum transactionType {
    CASH_WITHDRAWAL = "Cash Withdrawal",
    CASH_DEPOSIT = "Cash Deposit",
    TRANSFER_MONEY = "Transfer Money",
    BALANCE_INQUIRY = "Balance Inquiry",
}

interface User {
    userId: string,
    userPin: string,
    amount: number
}

let user: User = {
    userId: 'asharib90',
    userPin: '1234',
    amount: 10000
}

const userIdValidator = (userId: string) => userId.length < 3 ? "User ID should be at least 3 Characters" : true
const userPinValidator = (userPin: string) => userPin.length !== 4 ? "User Pin should be 4 digits long" : true
const numValidator = (num: number) => isNaN(num) ? "Please Enter a number" : true

const credentialQuestions = [
    {
        type: 'input',
        name: 'userId',
        message: 'Enter User ID : ',
        validate: userIdValidator
    },
    {
        type: 'input',
        name: 'userPin',
        message: 'Enter four digits pin : ',
        validate: userPinValidator
    }
]

const transactionTypeQuestions = [
    {
        type: 'list',
        name: 'transactionType',
        message: 'which transaction you want to perform?  ',
        choices: [
            transactionType.CASH_WITHDRAWAL,
            transactionType.CASH_DEPOSIT,
            transactionType.BALANCE_INQUIRY,
            transactionType.TRANSFER_MONEY
        ]
    }
]

function atmTransaction() {
    askCredentials();
}

function askCredentials() {
    inquirer
        .prompt(credentialQuestions)
        .then((answers: User) => {
            if (answers.userId !== 'asharib90' && answers.userPin !== '1234') {
                console.log('Invalid credentials, Enter your credentails again...')
                askCredentials();
            } else {
                askTransactionType();
            }
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log(error)
            } else {
                console.log('Something went wrong')
            }
        });
}

function askTransactionType() {
    inquirer
        .prompt(transactionTypeQuestions)
        .then((answers) => {
            if (answers.transactionType === transactionType.CASH_WITHDRAWAL) {
                transaction(transactionType.CASH_WITHDRAWAL)
            } else if (answers.transactionType === transactionType.CASH_DEPOSIT) {
                transaction(transactionType.CASH_DEPOSIT)
            } else if (answers.transactionType === transactionType.BALANCE_INQUIRY) {
                balanceInquiry();
            } else if (answers.transactionType === transactionType.TRANSFER_MONEY) {
                transferMoney();
            }
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log(error)
            } else {
                console.log('Something went wrong')
            }
        });
}

function transaction(type: transactionType.CASH_WITHDRAWAL | transactionType.CASH_DEPOSIT) {
    inquirer
        .prompt([
            {
                type: 'number',
                name: 'amount',
                message: 'Please Enter Amount : ',
                validator: numValidator
            }
        ])
        .then((answers) => {
            console.log(`Your transaction is in progress, please wait`)
            if (type === transactionType.CASH_WITHDRAWAL) {
                user.amount -= answers.amount
            } else if (type === transactionType.CASH_DEPOSIT) {
                user.amount += answers.amount
            }
            setTimeout(() => {
                console.log('Transaction has been completed successfully!!!')
                balanceInquiry();
            }, 2000);
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log(error)
            } else {
                console.log('Something went wrong')
            }
        });
}

function balanceInquiry() {
    console.log(`Your current bank balance is Rs ${user.amount}`)
}
function transferMoney() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'bank_name',
                message: 'Please Select Bank : ',
                choices: ['Habib Bank Limited', 'Allied Bank Limited', 'Bank Al Habib', 'MCB']
            },
            {
                type: 'number',
                name: 'amount',
                message: 'Please Enter Amount : ',
                validator: numValidator
            }
        ])
        .then((answers) => {
            console.log(`Your transaction is in progress, please wait`)
            user.amount -= answers.amount
            setTimeout(() => {
                console.log('Transaction has been completed successfully!!!')
                balanceInquiry();
            }, 2000);
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log(error)
            } else {
                console.log('Something went wrong')
            }
        });
}

atmTransaction();