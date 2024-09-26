//a
// const printNumbers = (n: number) => {
//     if (n >= 0) {
//         printNumbers(n - 1);
//         console.log(n);
//     }
// };

//b
const printNumbers = (n: number) => {
    if (n >= 0) {
        console.log(n);
        printNumbers(n - 1);
    }
};