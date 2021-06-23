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

//DESAFIOS

//1

// const movie = prompt("Qual gênero de filme que vamos assistir?")
// const ticket = Number(prompt("Qual o valor do ingresso?"))
// const food = prompt("Qual lanchinho você vai comprar?")
//
// const watchMovie = (movie, ticket, food) => {
//     if (movie.toLowerCase() === "fantasia" && ticket < 15) {
//         console.log("Bom filme!")
//         console.log(`Aproveite o/a ${food}`)
//     } else {
//         console.log("Escolha outro filme :(")
//     }
// }
//
// watchMovie(movie, ticket, food)

const name = prompt("Digite seu nome completo:")
const typeGame = prompt("Qual o tipo de jogo? Digite NA para nacional ou IN para internacional.")
const lapGame = prompt("Qual a etapa do jogo? Digite SF para semi-final, DT para decisão de terceiro lugar ou FI para final.")
const categorie = Number(prompt("Digite a categoria de 1 a 4:"))
const tickets = Number(prompt("Digite a quantidade de ingressos:"))

const game = (name, typeGame, lapGame, categories, tickets) => {
    if (typeGame === "NA") {
        console.log("--- DADOS DA COMPRA ---")
        console.log("Nome do cliente:", name)
        console.log("Tipo do jogo: Nacional")

        if (lapGame === "SF") {
            console.log("Etapa do jogo: Semifinais")
        } else if (lapGame === "DT") {
            console.log("Etapa do jogo: Decisão do 3º Lugar")
        } else {
            console.log("Etapa do jogo: Final")
        }

        console.log("Categoria:", categories)
        console.log("Quantidade de Ingressos:", tickets)

        console.log("--- VALORES ---")

        let ticketValue

        if (categories === 1) {
            switch (lapGame) {
                case "SF":
                    ticketValue = 1320
                    console.log("Valor do ingresso: R$", ticketValue)
                    console.log("Valor Total: R$", ticketValue * tickets)
                    break
                case "DT":
                    ticketValue = 660
                    console.log("Valor do ingresso: R$", ticketValue)
                    console.log("Valor Total: R$", ticketValue * tickets)
                    break
                case "FI":
                    ticketValue = 1980
                    console.log("Valor do ingresso: R$", ticketValue)
                    console.log("Valor Total: R$", ticketValue * tickets)
                    break
                default:
                    console.log("Oops! Ocorreu um erro, tente novamente.")
                    break
            }
        } else if (categories === 2) {
            switch (lapGame) {
                case "SF":
                    ticketValue = 880
                    console.log("Valor do ingresso: R$", ticketValue)
                    console.log("Valor Total: R$", ticketValue * tickets)
                    break
                case "DT":
                    ticketValue = 440
                    console.log("Valor do ingresso: R$", ticketValue)
                    console.log("Valor Total: R$", ticketValue * tickets)
                    break
                case "FI":
                    ticketValue = 1320
                    console.log("Valor do ingresso: R$", ticketValue)
                    console.log("Valor Total: R$", ticketValue * tickets)
                    break
                default:
                    console.log("Oops! Ocorreu um erro, tente novamente.")
                    break
            }
        } else if (categories === 3) {
            switch (lapGame) {
                case "SF":
                    ticketValue = 550
                    console.log("Valor do ingresso: R$", ticketValue)
                    console.log("Valor Total: R$", ticketValue * tickets)
                    break
                case "DT":
                    ticketValue = 330
                    console.log("Valor do ingresso: R$", ticketValue)
                    console.log("Valor Total: R$", ticketValue * tickets)
                    break
                case "FI":
                    ticketValue = 880
                    console.log("Valor do ingresso: R$", ticketValue)
                    console.log("Valor Total: R$", ticketValue * tickets)
                    break
                default:
                    console.log("Oops! Ocorreu um erro, tente novamente.")
                    break
            }
        } else if (categories === 4){
            switch (lapGame) {
                case "SF":
                    ticketValue = 220
                    console.log("Valor do ingresso: R$", ticketValue)
                    console.log("Valor Total: R$", ticketValue * tickets)
                    break
                case "DT":
                    ticketValue = 170
                    console.log("Valor do ingresso: R$", ticketValue)
                    console.log("Valor Total: R$", ticketValue * tickets)
                    break
                case "FI":
                    ticketValue = 330
                    console.log("Valor do ingresso: R$", ticketValue)
                    console.log("Valor Total: R$", ticketValue * tickets)
                    break
                default:
                    console.log("Oops! Ocorreu um erro, tente novamente.")
                    break
            }
        } else {
            console.log("Oops! Ocorreu um erro, tente novamente.")
        }
    } else if (typeGame === "IN") {
        console.log("--- DADOS DA COMPRA ---")
        console.log("Nome do cliente:", name)
        console.log("Tipo do jogo: Internacional")

        if (lapGame === "SF") {
            console.log("Etapa do jogo: Semifinais")
        } else if (lapGame === "DT") {
            console.log("Etapa do jogo: Decisão do 3º Lugar")
        } else {
            console.log("Etapa do jogo: Final")
        }

        console.log("Categoria:", categories)
        console.log("Quantidade de Ingressos:", tickets)

        console.log("--- VALORES ---")

        let ticketValue

        if (categories === 1) {
            switch (lapGame) {
                case "SF":
                    ticketValue = 1320 * 4.1
                    console.log("Valor do ingresso: U$", ticketValue)
                    console.log("Valor Total: U$", ticketValue * tickets)
                    break
                case "DT":
                    ticketValue = 660 * 4.1
                    console.log("Valor do ingresso: U$", ticketValue)
                    console.log("Valor Total: U$", ticketValue * tickets)
                    break
                case "FI":
                    ticketValue = 1980 * 4.1
                    console.log("Valor do ingresso: U$", ticketValue)
                    console.log("Valor Total: U$", ticketValue * tickets)
                    break
                default:
                    console.log("Oops! Ocorreu um erro, tente novamente.")
                    break
            }
        } else if (categories === 2) {
            switch (lapGame) {
                case "SF":
                    ticketValue = 880 * 4.1
                    console.log("Valor do ingresso: U$", ticketValue)
                    console.log("Valor Total: U$", ticketValue * tickets)
                    break
                case "DT":
                    ticketValue = 440 * 4.1
                    console.log("Valor do ingresso: U$", ticketValue)
                    console.log("Valor Total: U$", ticketValue * tickets)
                    break
                case "FI":
                    ticketValue = 1320 * 4.1
                    console.log("Valor do ingresso: U$", ticketValue)
                    console.log("Valor Total: U$", ticketValue * tickets)
                    break
                default:
                    console.log("Oops! Ocorreu um erro, tente novamente.")
                    break
            }
        } else if (categories === 3) {
            switch (lapGame) {
                case "SF":
                    ticketValue = 550 * 4.1
                    console.log("Valor do ingresso: U$", ticketValue)
                    console.log("Valor Total: U$", ticketValue * tickets)
                    break
                case "DT":
                    ticketValue = 330 * 4.1
                    console.log("Valor do ingresso: U$", ticketValue)
                    console.log("Valor Total: U$", ticketValue * tickets)
                    break
                case "FI":
                    ticketValue = 880 * 4.1
                    console.log("Valor do ingresso: U$", ticketValue)
                    console.log("Valor Total: U$", ticketValue * tickets)
                    break
                default:
                    console.log("Oops! Ocorreu um erro, tente novamente.")
                    break
            }
        } else if (categories === 4){
            switch (lapGame) {
                case "SF":
                    ticketValue = 220 * 4.1
                    console.log("Valor do ingresso: U$", ticketValue)
                    console.log("Valor Total: U$", ticketValue * tickets)
                    break
                case "DT":
                    ticketValue = 170 * 4.1
                    console.log("Valor do ingresso: U$", ticketValue)
                    console.log("Valor Total: U$", ticketValue * tickets)
                    break
                case "FI":
                    ticketValue = 330 * 4.1
                    console.log("Valor do ingresso: U$", ticketValue)
                    console.log("Valor Total: U$", ticketValue * tickets)
                    break
                default:
                    console.log("Oops! Ocorreu um erro, tente novamente.")
                    break
            }
        } else {
            console.log("Oops! Ocorreu um erro, tente novamente.")
        }
    } else {
        console.log("Oops! Ocorreu um erro, tente novamente.")
    }
}

game(name, typeGame, lapGame, categorie, tickets)

