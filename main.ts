#! /usr/bin/env node    

import inquirer from "inquirer";

let totalBalance = 10000;
const pin=1357;

let pinEntered = await inquirer.prompt([{
    name:"pin",
    type:"number",
    message:"Enter your pin number"
}]);
if(pinEntered.pin == pin){
let atm_questions = await inquirer.prompt([{
    name:"AccountType",
    message:"Select your account type",
    type:"list",
    choices:["Current Account","Saving Account","Asan Account"],
},
{
    name:"TransactionMethod",
    message:"Select your transaction method",
    type:"list",
    choices:["Cash Withdrawal","Fast Cash"],
}

]);
if(atm_questions.TransactionMethod == "Cash Withdrawal"){
    let cashWithdrawalAmount = await inquirer.prompt([{
        name:"withdrawal",
        message:"Enter the amount you want to withdraw:",
        type:"number"
    }]);
    if(totalBalance >= cashWithdrawalAmount.withdrawal){
        totalBalance -= cashWithdrawalAmount.withdrawal
        console.log('Your total balance is:', totalBalance);
    } else {
        console.log("Insufficient Balance");
    }
}   else{
        let fastCashAmount = await inquirer.prompt([{
            name:"fastCash",
            message:"Enter the amount you want to withdraw",
            type:"list",
            choices:["500","1000","2000","5000","10000"],
        }]);
        if(totalBalance >= fastCashAmount.fastCash){
            totalBalance -= fastCashAmount.fastCash
            console.log('Your total balance is:', totalBalance);
        } else {
            console.log("Insufficient Balance");
        }
}
}