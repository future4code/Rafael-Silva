export const calculateSumTo = (n: number, acc: number = 0): number => {
    if (n === 0) {
        return acc;
    }
    return calculateSumTo(n - 1, acc + n);
};


console.log(calculateSumTo(3));
console.log(calculateSumTo(10));
console.log(calculateSumTo(100));