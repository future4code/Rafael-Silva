/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 *
 *
 const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros

 console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
 console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 *
 *
 *
 */

console.log("*********************************")
console.log("Boas vindas ao jogo de Blackjack!")
console.log("*********************************")

console.log("---")


if (confirm("Quer iniciar uma nova rodada?")) {
    const firstPcCard = comprarCarta()
    const secondPcCard = comprarCarta()
    const firstUserCard = comprarCarta()
    const secondUserCard = comprarCarta()

    let pointsPc = firstPcCard.valor + secondPcCard.valor
    let pointsUser = firstUserCard.valor + secondUserCard.valor

    console.log(`Usuário - cartas: ${firstUserCard.texto}️ ${secondUserCard.texto}️  - pontuação ${pointsUser}`)
    console.log(`Computador - cartas: ${firstPcCard.texto}️ ${secondPcCard.texto}️  - pontuação ${pointsPc}`)

    console.log("---")

    if (pointsPc > pointsUser) {
        console.log("********************")
        console.log("O computador ganhou!")
        console.log("********************")
    } else if (pointsPc < pointsUser) {
        console.log("*****************")
        console.log("O usuário ganhou!")
        console.log("*****************")
    } else {
        console.log("*******")
        console.log("Empate!")
        console.log("*******")
    }
    console.log("Recarregue a página para joga novamente.")
} else {
    // console.log("**************")
    console.log("O jogo acabou!")
    // console.log("**************")
    console.log("Recarregue a página para joga novamente.")
}


