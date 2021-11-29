function houseRobber1(houses) {
    let max_gold = [];

    for (let i = 0; i < houses.length; i++) {
        let current = houses[i];
        let prevMax = max_gold[i - 1] || 0;
        let twoBackMax = max_gold[i - 2] || 0;
        max_gold.push(Math.max(current + twoBackMax, prevMax));
    }

    return max_gold[houses.length - 1];
}

/**
 * TO EXECUTE EXERCISE:
 * 
 * node exercicio1.js 1,2,3,1 
 * 
 * OUTPUT:
 * 
 * 4
 * 
 * node exercicio1.js 2,7,9,3,1
 * 
 * OUTPUT:
 * 
 * 12
 * 
 */

const houses = process.argv[2].split(',').map(Number);
console.log(houseRobber1(houses));


