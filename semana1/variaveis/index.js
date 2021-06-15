//Exercícios de interpretação de código

/*
 1 - O primeiro console.log irar imprimir 10
 e depois irar imprimir na tela 10 e 5;

 2 - O console.log irar imprimir 10, 10, 10;

 3 -  "p" eu mudaria para "hours" e "t" mudaria para "receiveDay"

*/


//Exercícios de escrita de código

//1

//a)
// let nome

//b)
// let idade

//c)
// console.log(typeof nome, typeof idade)

//d)
/* 
O tipo undefined foi impresso pois não foi atribuido 
nenhum valor a variavel
*/

//e)
let nome = prompt("Qual é o seu nome?")
let idade = prompt("Qual é a sua idade?")

//f)
console.log(typeof nome, typeof idade)
/*
O tipo retornou como string para as duas variaveis
*/

//g)
console.log("Olá", nome, "você tem ", idade, "anos")


//2

const roupa = prompt("Você está usando uma roupa azul hoje?")
const almoco = prompt("Você almoço hoje?")
const janta = prompt("Você irar jantar hoje?")

//a)
let sim1 = roupa
let sim2 = almoco
let sim3 = janta

//b)
console.log("Você está usando uma roupa azul hoje? -", sim1)
console.log("Você almoço hoje? -", sim2)
console.log("Você irar jantar hoje? -", sim3)

//3

let a = 10
let b = 25

// Aqui faremos uma lógica para trocar os valores

let c = null
c = a
a = b
b = c

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10


//DESAFIO:

let number1 = Number(prompt("Digite um número: "))
let number2 = Number(prompt("Digite outro número: "))

console.log("O primeiro número somado ao segundo número resulta em:", (number1 + number2))
console.log("O primeiro número multiplicado pelo segundo número resulta em:", (number1 * number2))

