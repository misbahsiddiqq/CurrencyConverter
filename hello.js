import inquirer from 'inquirer';
const currency = {
    USD: 1, //base USD
    EUR: 0.92,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};
let user_answer = await inquirer.prompt([{
        type: 'list',
        name: 'from',
        message: 'Enter from currency',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        type: 'list',
        name: 'from',
        message: 'Enter from currency',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        type: 'list',
        name: 'to',
        message: 'Enter to currency',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        type: 'number',
        name: 'amount',
        message: 'Enter your amount',
    }
]);
//dynamic approach / if else
let fromAmount = currency[user_answer.from]; //exchange rate
let toAmount = currency[user_answer.to]; // exchange rate
let amount = user_answer.amount;
let baseAmount = amount / fromAmount; // formula + based USD amount
let convertedAmount = baseAmount * toAmount;
//consoling all together
// console.log(fromAmount);
// console.log(toAmount);
// console.log(amount);
console.log(convertedAmount);
