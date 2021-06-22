//Exercícios de interpretação de código

//1
/*
a)
O código testa se o número inserido pelo usuário é divisivel por 2 ou não e imprime no console uma mensagem.

b)
Números pares ele imprime no console "Passou no teste."

c)
Número impares ele imprime no console "Não passou no teste."
 */

//2
/*
a)
O código serve para dar o preço correto para cada fruta que o usuario escolheu no prompt

b)
A mensagem no console seria: O preço da fruta Maçã é R$ 2.25

c)
A mensagem no console seria: O preço da fruta Pêra é R$ 5
 */

//3
/*
a)
Pede ao usuário que ele digite um número e armazena em uma váriavel

b)
1º console imprimiria na tela: Esse número passou no teste
e depois um erro.
2º console imprimiria na tela um erro.

c)
console imprimiria na tela um erro pois não entrai no if e a váriavel mensagem só foi
declarada dentro do escopo do if
 */

//Exercícios de escrita de código

//1

// const age = Number(prompt("Digite sua idade:"))
//
// if (age >= 18){
//     console.log("Você pode dirigir.")
// } else {
//     console.log("Você não pode dirigir.")
// }

//2

// const period = prompt("Qual turno do dia você estuda? M para matutino, V para vespertino ou N para noturno.")
//
// const turn = (period) => {
//     if (period === "M") {
//         console.log("Bom Dia!")
//     } else if (period === "V") {
//         console.log("Boa Tarde!")
//     } else if (period === "N") {
//         console.log("Boa Noite!")
//     } else {
//         console.log("Digite exatamente M para matutino, V para vespertino ou N para noturno.")
//     }
// }
//
// turn(period)

//3

// const period = prompt("Qual turno do dia você estuda? M para matutino, V para vespertino ou N para noturno.")
//
// const turn = (period) => {
//     switch (period) {
//         case "M":
//             console.log("Bom Dia!")
//             break
//         case "V":
//             console.log("Boa Tarde!")
//             break
//         case "N":
//             console.log("Boa Noite!")
//             break
//         default:
//             console.log("Digite exatamente M para matutino, V para vespertino ou N para noturno.")
//             break
//     }
// }
//
// turn(period)



//4

// const movie = prompt("Qual gênero de filme que vamos assistir?")
//
// const ticket = Number(prompt("Qual o valor do ingresso?"))
//
// const watchMovie = (movie, ticket) => {
//     if (movie.toLowerCase() === "fantasia" && ticket < 15){
//         return "Bom filme!"
//     } else {
//         return "Escolha outro filme :("
//     }
// }
//
// console.log(watchMovie(movie, ticket))


