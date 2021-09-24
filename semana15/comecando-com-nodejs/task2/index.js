const { red, green } = require('./utils/colors')

// Exercicio 2:

const operator = process.argv[2];

const firstNumber = Number(process.argv[3]);
const secondNumber = Number(process.argv[4]);

let result;

switch (operator) {
    case "soma":
        result = firstNumber + secondNumber;

        if (isNaN(result)) {
            console.log(
                red(
                    "Ooops! Ocorreu um erro. Coloque soma, sub, mult ou div para realizar uma operação. Ex: div 100 2\n"
                )
            );
        } else {
            console.log(green(`O resultado da soma é: ${result}\n`));
        }

        break;
    case "sub":
        result = firstNumber - secondNumber;

        if (isNaN(result)) {
            console.log(
                red(
                    "Ooops! Ocorreu um erro. Coloque soma, sub, mult ou div para realizar uma operação. Ex: div 100 2\n"
                )
            );
        } else {
            console.log(green(`O resultado da subtração é: ${result}\n`));
        }

        break;
    case "mult":
        result = firstNumber * secondNumber;

        if (isNaN(result)) {
            console.log(
                red(
                    "Ooops! Ocorreu um erro. Coloque soma, sub, mult ou div para realizar uma operação. Ex: div 100 2\n"
                )
            );
        } else {
            console.log(green(`O resultado da multiplicação é ${result}\n`));
        }

        break;
    case "div":
        result = firstNumber / secondNumber;

        if (isNaN(result)) {
            console.log(
                red(
                    "Ooops! Ocorreu um erro. Coloque soma, sub, mult ou div para realizar uma operação. Ex: div 100 2\n"
                )
            );
        } else {
            console.log(green(`O resultado da div é: ${result}\n`));
        }

        break;
    default:
        console.log(
            red("Ooops! Ocorreu um erro. Coloque soma, sub, mult ou div para realizar uma operação. Ex: div 100 2\n")
        );
        break;
}
