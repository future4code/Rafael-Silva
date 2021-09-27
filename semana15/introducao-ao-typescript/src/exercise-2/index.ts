//Exercise 25

//a) e b)

function obterEstatisticas(numeros: number[]): Object {
    const numerosOrdenados: number[] = numeros.sort((a, b) => a - b);

    let soma: number = 0;

    for (let num of numeros) {
        soma += num;
    }

    type stats = {
        maior: number;
        menor: number;
        media: number;
    }


    const estatisticas: stats = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    };

    return estatisticas;
}


//-----------------------------------------------------------------

//c)

type stats = {
    numeros: number[];
    obterEstatisticas: (numeros: number[]) => object;
};


const amostraDeIdades: stats = {

		numeros: [21, 18, 65, 44, 15, 18],

		obterEstatisticas: (numeros: number[]) => obterEstatisticas
}

console.log(amostraDeIdades)

