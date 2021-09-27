//Exercise 1:

//a)
// let myString: string = "Rafael"

// myString = 5

// console.log(myString)
// Reclama que a variavel é do tipo string

//------------------------------------------------

//b)
// let myNumber: number | string = 5;

// myNumber = "Rafael"

// console.log(myNumber)

//------------------------------------------------

//c)
// type person = {
//     name: string,
//     age: number,
//     favoriteColor: string;
// };

// const person1: person = {
//     name: "Rafael",
//     age: 22,
//     favoriteColor: "black"
// };

// const person2: person = {
//     name: "Gabriel",
//     age: 25,
//     favoriteColor: "brown"
// };

// const person3: person = {
//     name: "Berenice",
//     age: 59,
//     favoriteColor: "pink"
// };

// console.log(person1, person2, person3);


//------------------------------------------------

//d)

enum Colors {
    RED = "red",
    ORANGE = "orange",
    YELLOW = "yellow",
    GREEN = "green",
    BLUE = "blue"
}

type person = {
    name: string;
    age: number;
    favoriteColor: Colors;
};

const person1: person = {
    name: "Rafael",
    age: 22,
    favoriteColor: Colors.GREEN
};

const person2: person = {
    name: "Gabriel",
    age: 25,
    favoriteColor: Colors.BLUE
};

const person3: person = {
    name: "Berenice",
    age: 59,
    favoriteColor: Colors.YELLOW
};

console.log(person1, person2, person3);