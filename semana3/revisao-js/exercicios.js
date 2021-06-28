// EXERCÍCIO 01
function inverteArray(array) {
    const newArray = []
    const length = array.length
    for (let i = 0; i < length; i++) {
        newArray.push(array.pop())
    }
    return newArray
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
    const newArray = []
    for (let index of array) {
        if (index % 2 === 0) {
            newArray.push((index * index))
        }
    }

    return newArray
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
    const newArray = []
    for (let index of array) {
        if (index % 2 === 0) {
            newArray.push(index)
        }
    }

    return newArray
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
    let minValue = array[0]
    let maxValue = array.pop()

    for (let index of array) {
        if (maxValue <= index) {
            maxValue = index
        }

        if (minValue >= index) {
            minValue = index
        }
    }

    return maxValue
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
    return array.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
    const booleano1 = true
    const booleano2 = false
    const booleano3 = !booleano2
    const booleano4 = !booleano3

    const array = []

    array.push((booleano1 && booleano2 && !booleano4))
    array.push(((booleano1 && booleano2) || !booleano3))
    array.push(((booleano2 || booleano3) && (booleano4 || booleano1)))
    array.push((!(booleano2 && booleano3) || !(booleano1 && booleano3)))
    array.push((!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)))

    return array
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
    const array = []
    let length = n[0] + 1
    if (length < 10){
        for (let i = 0; i <= length; i++) {
            if (i % 2 === 0){
                array.push(i)
            }
        }
    }else {
        length = n[0] + 12
        for (let i = 0; i <= length; i++) {
            if (i % 2 === 0){
                array.push(i)
            }
        }
    }


    return array
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
    // return 'Escaleno'
    // return 'Equilátero'
    // return 'Isósceles'
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
    // Formato do objeto a ser retornado:
    // {
    //   maiorNumero: X,
    //   maiorDivisivelPorMenor: Y,
    //   diferenca: Z
    // }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

}

// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {

}

// EXERCÍCIO 13
function imprimeChamada() {
    // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
