export const calculateSumTo = (n: number): number => {
    var sum = 0;
    for (var i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
};

console.log(calculateSumTo(3));
console.log(calculateSumTo(10));
console.log(calculateSumTo(100));