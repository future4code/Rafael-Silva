//Exercícios de interpretação de código

//1
/*
a)
1º console.log: Matheus Nachtergaele
2º console.log: "Virginia Cavendish"
3º console.log: {canal: "Globo", horario: "14h"}
 */

//2
/*
a)
1º console.log: {nome: "Juca", idade: 3, raca: "SRD"}
2º console.log: {nome: "Juba", idade: 3, raca: "SRD"}
3º console.log: {nome: "Jubo", idade: 3, raca: "SRD"}

b)
Ele copia um outro objeto já criado

 */

//3
/*
a)
1º console.log: false
2º console.log: undefined

b)
undefined pois a propriedade foi criada mas não possui nenhum valor
 */

//Exercícios de escrita de código

//1

// //a)
// const people = {
//     name: "Rafael",
//     nickname: ["Rafa", "Rafinha", "Fael"]
// }
//
// const nicknames = function (object){
//     console.log(`Eu sou ${object.name}, mas pode me chamar de: ${object.nickname[0]}, ${object.nickname[1]} ou ${object.nickname[2]}`)
// }
//
// nicknames(people)
//
// //b)
//
// const otherPeople = {
//     ...people,
//     nickname: ["Jogador", "Zé", "Mano"]
// }
//
// nicknames(otherPeople)

//2

// //a)
// const pessoaFirst = {
//     nome: "Rafael",
//     idade: 22,
//     profissao: "Estudante"
// }
//
// const pessoaSecond = {
//     nome: "Gabriel",
//     idade: 25,
//     profissao: "Biologo"
// }
//
// //b)
// const arrayObj = function (pessoa) {
//     console.log([pessoa.nome, pessoa.nome.length, pessoa.idade, pessoa.profissao, pessoa.profissao.length])
// }
//
// arrayObj(pessoaFirst)
// arrayObj(pessoaSecond)

//3

// //a)
// const carrinho = []
//
// //b)
// const banana = {
//     nome: "Banana Prata",
//     disponibilidade: true
// }
//
// const mamao = {
//     nome: "Mamão Papaia",
//     disponibilidade: true
// }
//
// const manga = {
//     nome: "Manga",
//     disponibilidade: true
// }
//
// //c)
// const barraca = function (frutas){
//     carrinho.push(frutas)
// }
//
// barraca(banana)
// barraca(mamao)
// barraca(manga)
//
// //d)
// console.log(carrinho)

//DESAFIOS

//1

// const user = function (){
//     const nome = prompt("Digite seu nome:")
//     const idade = prompt("Digite sua idade:")
//     const profissao = prompt("Digite a sua profissão:")
//
//     const people = {
//         nome: nome,
//         idade: idade,
//         profissao: profissao
//     }
//
//     console.log(people)
//     console.log(typeof people)
// }
//
// user()

//2

// const movie = function (yearMovieFirst, yearMovieSecond){
//     console.log("O primeiro filme foi lançado antes do segundo?", yearMovieFirst < yearMovieSecond)
//     console.log("O primeiro filme foi lançado no mesmo ano do segundo?", yearMovieFirst === yearMovieSecond)
// }
//
// const guardianOfGalaxy = {
//     name: "Guardiões da Galaxia",
//     year: 2014
// }
//
// const districtNine = {
//     name: "Distrito 9",
//     year: 2009
// }
//
// movie(guardianOfGalaxy.year, districtNine.year)

//3

// const stock = function (fruit){
//     return !fruit.disponibilidade
// }
//
// console.log(stock(mamao))




