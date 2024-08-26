function sum(a,b){
    sum =  a + b;
    console.log("The sum of the two number is : ", sum);
}

function multiply(a,b){
    multiply = a * b;
    console.log("The Multiplication of the two number is : ", multiply);
}

sum = sum(5,6);
multiply = multiply(5,6);
console.log(sum);
console.log(multiply);

import chalk from 'chalk'; // more modern import syntax. 
console.log(chalk.blue("Hello World."));
console.log(chalk.red.bold("This is Red Color Syntax and in Bold.."));
console.log(chalk.green.underline("I am learning the Node Js Today"));



