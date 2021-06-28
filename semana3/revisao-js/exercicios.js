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
    if (length < 10) {
        for (let i = 0; i <= length; i++) {
            if (i % 2 === 0) {
                array.push(i)
            }
        }
    } else {
        length = n[0] + 12
        for (let i = 0; i <= length; i++) {
            if (i % 2 === 0) {
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

    if (a === b && a === c && c === b) {
        return "Equilátero"
    } else if (a === b || a === c || c === b) {
        return "Isósceles"
    } else {
        return "Escaleno"
    }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
    // Formato do objeto a ser retornado:
    // {
    //   maiorNumero: X,
    //   maiorDivisivelPorMenor: Y,
    //   diferenca: Z
    // }

    let larger = 0
    let less = 0
    let divide = true
    let diff = Math.abs(num1 - num2)

    if (num1 > num2) {
        larger = num1
        less = num2
    } else {
        larger = num2
        less = num1
    }

    if (larger % less === 0) {
        divide = true;
    } else {
        divide = false
    }

    const obj = {
        maiorNumero: larger,
        maiorDivisivelPorMenor: divide,
        diferenca: diff
    }

    return obj
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
    if (array.length > 2) {
        let firstMinValue = Math.min(...array)
        let firstMaxValue = Math.max(...array)

        let positionMaxValue = array.indexOf(firstMaxValue)
        let positionMinValue = array.indexOf(firstMinValue)
        array.splice(positionMaxValue, 1)
        array.splice(positionMinValue, 1)

        let secondMinValue = Math.min(...array)
        let secondMaxValue = Math.max(...array)
        const newArray = []

        newArray.push(secondMaxValue)
        newArray.push(secondMinValue)

        return newArray
    }

    return array
}

// EXERCÍCIO 11
function ordenaArray(array) {
    let aux = 0

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                aux = array[j]
                array[j] = array[j + 1]
                array[j + 1] = aux
            }
        }
    }

    return array
}

// EXERCÍCIO 12
function filmeFavorito() {
    const filme = {
        nome: "O Diabo Veste Prada",
        ano: 2006,
        diretor: "David Frankel",
        atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
    }

    return filme
}

// EXERCÍCIO 13
function imprimeChamada() {
    // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
    const filme = {
        nome: "O Diabo Veste Prada",
        ano: 2006,
        diretor: "David Frankel",
        atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
    }

    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`

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
