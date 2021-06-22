// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const hight = Number(prompt("Digite a aultura:"))
  const width = Number(prompt("Digite a a largura:"))
  const result = hight * width

  console.log(result)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const year = Number(prompt("Digite o ano atual:"))
  const age = Number(prompt("Digite seu ano de nascimento:"))

  const result = year - age

  console.log(result)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imc = peso / (altura * altura)

  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const name = prompt("Digite seu nome:")
  const age = prompt("Digite sua idade:")
  const email = prompt("Digite sua idade:")

  console.log(`Meu nome é ${name}, tenho ${age} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Digite uma cor favorita:")
  const cor2 = prompt("Digite uma segunda cor favorita:")
  const cor3 = prompt("Digite uma terceira cor favorita:")

  const cores = [cor1, cor2, cor3]
  console.log(cores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array.pop()
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const first = array[0]
  array[0] = array.pop()
  array.push(first)

  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const firstString = string1.toLowerCase()
  const secondString = string2.toLowerCase()

  return firstString === secondString
}


// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const year = Number(prompt("Digite o ano atual:"))
  const age = Number(prompt("Digite seu ano de nascimento:"))
  const rgAge = Number(prompt("Digite o ano que sua carteira de indentidade foi emitida:"))

  const renovation = year - rgAge

  const atualAge = year - age
  const child = atualAge <= 20 && renovation >= 5
  const adult = atualAge > 20 && atualAge <= 50 && renovation >= 10 && renovation < 15
  const old = atualAge > 50 && renovation >= 15

  const result = child || adult || old

  console.log(result)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const bissextosFirst = ano % 400 === 0
  const bissextosSecond = (ano % 4 === 0) && (ano % 100 !== 0)
  const bissextosThird = bissextosFirst && bissextosSecond

  const result = bissextosFirst || bissextosSecond || bissextosThird
  return result
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const age = prompt("Você tem mais de 18 anos?")
  const school = prompt("Você possui ensino médio completo?")
  const hour = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

  const result = (age === "sim") && (school === "sim") && (hour === "sim")

  console.log(result)
}