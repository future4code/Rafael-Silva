//Exercícios de interpretação de código

//1
/*
O código está incrementando a variável i e a cada incremento ele adicional o valor que está na variável i dentro
da variável valor e quando ela chegar a 5 esse valor é imprimido no console
 */

//2
/*
a)
será impresso os valores 19, 21, 23, 25, 27, 30

b)
O for...of... não seria suficiente, nesse caso seria mais interessante usar o for

 */

//3
/*
Será impresso no console: *, **, *** e ****
 */

//Exercícios de escrita de código

//1

// const pets = Number(prompt("Digite quantos bichinhos de estimação você tem:"))
//
// if (pets === 0){
//     console.log("Que pena! Você pode adotar um pet!")
// } else if (pets > 0){
//     let arrayPets = []
//     for (i = 0; i < pets; i++){
//         let namePet = prompt("Digite o nome do pet e aperte enter:")
//         arrayPets.push(namePet)
//     }
//
//     console.log("O nome dos seus bichinhos são:", arrayPets)
// } else {
//     console.log("Oops! Ocorreu um erro, tente novamente.")
// }

//2

//a)
// const arrayOriginal = [22, 44, 55, 15, 56, 75, 45, 24, 85, 92]

// const arrayValue = (array) => {
//    for (let index of array){
//        console.log(index)
//    }
// }
//
// arrayValue(arrayOriginal)

//b)
// const arrayDivideTen = (array) => {
//     for (let index of array){
//         console.log(index / 10)
//     }
// }
//
// arrayDivideTen(arrayOriginal)

//c)
// const arrayPar = (array) =>{
//     const newArray = []
//     for (let index of array){
//         if (index % 2 === 0){
//             newArray.push(index)
//         }
//     }
//     console.log(newArray)
// }
//
// arrayPar(arrayOriginal)

//d)
// const arrayString = (array) =>{
//     let i = 0
//     while (i < array.length){
//         for (let number of array){
//             console.log(`O elemento do índex ${i} é: ${number}`)
//             i++
//         }
//     }
//
//     // for (i = 0; i < array.length;){
//     //     for (let number of array){
//     //         console.log(`O elemento do índex ${i} é: ${number}`)
//     //         i++
//     //     }
//     // }
// }
//
// arrayString(arrayOriginal)


//e
// const arrayMaxAndMin = (array) => {
//     let minValue = array[0]
//     let maxValue = array.pop()
//
//     for (let index of array) {
//         if (maxValue <= index) {
//             maxValue = index
//         }
//
//         if (minValue >= index) {
//             minValue = index
//         }
//     }
//
//     console.log(`O maior número é ${maxValue} e o menor é ${minValue}`)
// }
//
// arrayMaxAndMin(arrayOriginal)

