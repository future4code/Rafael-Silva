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
let pcCard = []
let userCard = []

const firstCards = () => {
    let firstPcCard = comprarCarta()
    let secondPcCard = comprarCarta()
    let firstUserCard = comprarCarta()
    let secondUserCard = comprarCarta()

    if (firstPcCard.valor === 11 && secondPcCard.valor === 11) {
        firstPcCard = comprarCarta()
        secondPcCard = comprarCarta()
    } else if (firstUserCard.valor === 11 && secondUserCard.valor === 11) {
        firstUserCard = comprarCarta()
        secondUserCard = comprarCarta()
    } else {
        pcCard.push(firstPcCard)
        pcCard.push(secondPcCard)

        userCard.push(firstUserCard)
        userCard.push(secondUserCard)
    }
}

if (confirm("Boas vindas ao jogo de Blackjack!" + "\n" + "Quer iniciar uma nova rodada?")) {
    firstCards()

    let pointsPc = pcCard[0].valor + pcCard[1].valor
    let pointsUser = userCard[0].valor + userCard[1].valor

    if (confirm(
        `Suas cartas são ${userCard[0].texto}️ ${userCard[1].texto}️. A carta revelada do computador é ${pcCard[0].texto}️.` +
        "\n" +  // \n faz pular a linha
        "Deseja comprar mais uma carta?"
    )) {
        let buyedCardUser = comprarCarta()
        userCard.push(buyedCardUser)
        pointsUser += buyedCardUser.valor

        if (pointsUser > 21) {
            alert(
                `Suas cartas são ${userCard[0].texto}️ ${userCard[1].texto}️ ${userCard[2].texto}️ . Sua pontuação é ${pointsUser}.\n` +
                `As cartas do computador são ${pcCard[0].texto}️ ${pcCard[1].texto}️ . A pontuação do computador é ${pointsPc}.\n` +
                "O computador ganhou!"
            )
        } else if (confirm(
            `Suas cartas são ${userCard[0].texto}️ ${userCard[1].texto}️${userCard[2].texto}️ . A carta revelada do computador é ${pcCard[0].texto}️.` +
            "\n" +  // \n faz pular a linha
            "Deseja comprar mais uma carta?"
        )) {
            let buyedCardUser = comprarCarta()
            userCard.push(buyedCardUser)
            pointsUser += buyedCardUser.valor

            if (pointsUser > 21) {
                alert(
                    `Suas cartas são ${userCard[0].texto}️ ${userCard[1].texto}️ ${userCard[2].texto}️ ${userCard[3].texto}️ . Sua pontuação é ${pointsUser}.\n` +
                    `As cartas do computador são ${pcCard[0].texto}️ ${pcCard[1].texto}️ . A pontuação do computador é ${pointsPc}.\n` +
                    "O computador ganhou!"
                )
            } else if (confirm(
                `Suas cartas são ${userCard[0].texto}️ ${userCard[1].texto}️${userCard[2].texto}️ ${userCard[3].texto}️ . A carta revelada do computador é ${pcCard[0].texto}️.` +
                "\n" +  // \n faz pular a linha
                "Deseja comprar mais uma carta?"
            )) {
                if (pointsUser > 21) {
                    alert(
                        `Suas cartas são ${userCard[0].texto}️ ${userCard[1].texto}️ ${userCard[2].texto}️ ${userCard[3].texto}️ . Sua pontuação é ${pointsUser}.\n` +
                        `As cartas do computador são ${pcCard[0].texto}️ ${pcCard[1].texto}️ . A pontuação do computador é ${pointsPc}.\n` +
                        "O computador ganhou!"
                    )
                }
            } else{
                let buyedCardPc

                if (pointsUser <= 21) {
                    while (pointsPc <= pointsUser) {
                        buyedCardPc = comprarCarta();
                        pcCard.push(buyedCardPc)
                        pointsPc += buyedCardPc.valor
                    }

                    if (pointsUser > 21) {
                        alert(
                            `Suas cartas são ${userCard[0].texto}️ ${userCard[1].texto}️ ${userCard[2].texto}️ . Sua pontuação é ${pointsUser}.\n` +
                            `As cartas do computador são ${pcCard[0].texto}️ ${pcCard[1].texto}️ ${pcCard[2].texto}️ ${pcCard[3].texto}. A pontuação do computador é ${pointsPc}.\n` +
                            "O computador ganhou!"
                        )
                    } else if (pointsPc > 21 || pointsUser <= 21) {
                        alert(
                            `Suas cartas são ${userCard[0].texto}️ ${userCard[1].texto}️ ${userCard[2].texto}️ . Sua pontuação é ${pointsUser}.\n` +
                            `As cartas do computador são ${pcCard[0].texto}️ ${pcCard[1].texto} ️ ${pcCard[2].texto}️ . A pontuação do computador é ${pointsPc}.\n` +
                            "O usuário ganhou!"
                        )
                    }

                    if (pointsPc === pointsUser) {
                        alert(
                            `Suas cartas são ${userCard[0].texto}️ ${userCard[1].texto}️ ${userCard[2].texto}️ . Sua pontuação é ${pointsUser}.\n` +
                            `As cartas do computador são ${pcCard[0].texto}️ ${pcCard[1].texto}️ ${pcCard[2].texto}️ ️ ${pcCard[3].texto}. A pontuação do computador é ${pointsPc}.\n` +
                            "Empate!"
                        )
                    }
                }
            }
        } else {
            let buyedCardPc

            if (pointsUser <= 21) {
                while (pointsPc <= pointsUser) {
                    buyedCardPc = comprarCarta();
                    pcCard.push(buyedCardPc)
                    pointsPc += buyedCardPc.valor
                }

                if (pointsUser > 21) {
                    alert(
                        `Suas cartas são ${userCard[0].texto}️ ${userCard[1].texto}️ ${userCard[2].texto}️ . Sua pontuação é ${pointsUser}.\n` +
                        `As cartas do computador são ${pcCard[0].texto}️ ${pcCard[1].texto}️ ${pcCard[2].texto}️ ${pcCard[3].texto}. A pontuação do computador é ${pointsPc}.\n` +
                        "O computador ganhou!"
                    )
                } else if (pointsPc > 21 || pointsUser <= 21) {
                    alert(
                        `Suas cartas são ${userCard[0].texto}️ ${userCard[1].texto}️ ${userCard[2].texto}️ . Sua pontuação é ${pointsUser}.\n` +
                        `As cartas do computador são ${pcCard[0].texto}️ ${pcCard[1].texto} ️ ${pcCard[2].texto}️ . A pontuação do computador é ${pointsPc}.\n` +
                        "O usuário ganhou!"
                    )
                }

                if (pointsPc === pointsUser) {
                    alert(
                        `Suas cartas são ${userCard[0].texto}️ ${userCard[1].texto}️ ${userCard[2].texto}️ . Sua pontuação é ${pointsUser}.\n` +
                        `As cartas do computador são ${pcCard[0].texto}️ ${pcCard[1].texto}️ ${pcCard[2].texto}️ ️ ${pcCard[3].texto}. A pontuação do computador é ${pointsPc}.\n` +
                        "Empate!"
                    )
                }
            }
        }
    } else {
        let buyedCardPc

        if (pointsUser <= 21) {
            while (pointsPc <= pointsUser) {
                buyedCardPc = comprarCarta();
                pcCard.push(buyedCardPc)
                pointsPc += buyedCardPc.valor
            }

            if (pointsUser > 21) {
                alert(
                    `Suas cartas são ${userCard[0].texto}️ ${userCard[1].texto}️ . Sua pontuação é ${pointsUser}.\n` +
                    `As cartas do computador são ${pcCard[0].texto}️ ${pcCard[1].texto}️ ${pcCard[2].texto}️ ${pcCard[3].texto}. A pontuação do computador é ${pointsPc}.\n` +
                    "O computador ganhou!"
                )
            } else if (pointsPc > 21 || pointsUser <= 21) {
                alert(
                    `Suas cartas são ${userCard[0].texto}️ ${userCard[1].texto}️ . Sua pontuação é ${pointsUser}.\n` +
                    `As cartas do computador são ${pcCard[0].texto}️ ${pcCard[1].texto} ️ ${pcCard[2].texto}️ . A pontuação do computador é ${pointsPc}.\n` +
                    "O usuário ganhou!"
                )
            }

            if (pointsPc === pointsUser) {
                alert(
                    `Suas cartas são ${userCard[0].texto}️ ${userCard[1].texto}️ . Sua pontuação é ${pointsUser}.\n` +
                    `As cartas do computador são ${pcCard[0].texto}️ ${pcCard[1].texto}️ ${pcCard[2].texto}️ ️ ${pcCard[3].texto}. A pontuação do computador é ${pointsPc}.\n` +
                    "Empate!"
                )
            }
        }
    }
} else {
    // console.log("**************")
    console.log("O jogo acabou!")
    // console.log("**************")
    console.log("Recarregue a página para joga novamente.")
}



