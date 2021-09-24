const chalk = require("chalk");

const green = chalk.green;

// Exercicio 1:

// a) Para acessar os parâmetros passados na linha de comando, utilizamos o process.args[2]

// b)
// const userName = process.argv[2]
// const userAge = process.argv[3]

// console.log(`Olá, ${userName}! Você tem ${userAge} anos.`);

// c)
const userName = process.argv[2];
const userAge = process.argv[3];

const futureAge = Number(userAge) + 7;

console.log(green(`Olá, ${userName}! Você tem ${userAge} anos. Em sete anos você terá ${futureAge}\n`));
