// Exercícios de interpretação de código

//1
/*
a) Será impresso no console:

{ nome: "Amanda Rangel", apelido: "Mandi" } 0
[
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" }
]

{ nome: "Laís Petra", apelido: "Laura" } 1
[
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" }
]

{ nome: "Letícia Chijo", apelido: "Chijo" } 2
[
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" }
]
 */

//2
/*
a) Será impresso no console: ["Amanda Rangel", "Laís Petra", "Letícia Chijo"]
 */

//3
/*
a) Será impresso no console:
[
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
]
 */

//Exercícios de escrita de código

//1

const pets = [
    {nome: "Lupin", raca: "Salsicha"},
    {nome: "Polly", raca: "Lhasa Apso"},
    {nome: "Madame", raca: "Poodle"},
    {nome: "Quentinho", raca: "Salsicha"},
    {nome: "Fluffy", raca: "Poodle"},
    {nome: "Caramelo", raca: "Vira-lata"},
]

//a)
// const petNames = pets.map((petName) => {
//     return petName.nome
// })
//
// console.log(petNames)

//b)
// const salsichas = pets.filter((salsicha)=>{
//     return salsicha.raca === "Salsicha"
// })
//
// console.log(salsichas)

//c
// const cupom = pets.filter((racas) => {
//     return racas.raca === "Poodle"
// }).map((name) => {
//     return (`Você ganhou um cupom de desconto de 10% para tosar o/a ${name.nome}!`)
// })
//
// console.log(cupom)


//2

const produtos = [
    {nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5},
    {nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8},
    {nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6},
    {nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7},
    {nome: "Leite", categoria: "Bebidas", preco: 2.99},
    {nome: "Cândida", categoria: "Limpeza", preco: 3.30},
    {nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2},
    {nome: "Vinho Tinto", categoria: "Bebidas", preco: 55},
    {nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99},
    {nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80}
]

//a)
// const itemName = produtos.map((product) => {
//     return product.nome
// })
//
// console.log(itemName)

//b)
// const discount = produtos.map((product) => {
//     const productDiscount = product.preco * 0.95
//     const price = {
//         nome: product.nome,
//         preco: Number(productDiscount.toFixed(2))
//     }
//
//     return price
// })
//
// console.log(discount)

//c)
// const drinks = produtos.filter((product) => {
//     return product.categoria === "Bebidas"
// })
//
// console.log(drinks)

//d)
// const ype = produtos.filter((product) => {
//     return product.nome.includes("Ypê")
// })
//
// console.log(ype)

//e)
// const productString = produtos.filter((product) => {
//     return product.nome.includes("Ypê")
// }).map((product) => {
//     return (`Compre ${product.nome} por R$${product.preco}`)
// })
//
// console.log(productString)

