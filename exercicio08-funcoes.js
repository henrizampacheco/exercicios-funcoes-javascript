/* 08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo). */

const listaPontuacoes = [ 10, 20, 20, 8, 25, 3, 0, 30, 1 ]

const compararPontuacoes = listaDePontos => {
    let recordesBatidos = 0
    let qualFoiPiorJogo = listaDePontos.length + 1
    let maiorPontuacao = listaDePontos[0]
    let menorPontuacao = listaDePontos[0]

    for (let i = 1; i < listaDePontos.length; i++) {
        if (maiorPontuacao > listaDePontos[i]) {
            maiorPontuacao = listaDePontos[i]
            recordesBatidos++
        } else if (menorPontuacao < listaDePontos[i]) {
            menorPontuacao = listaDePontos[i]
            qualFoiPiorJogo = i
        }
    }
    return [ recordesBatidos, qualFoiPiorJogo ]
}

console.log(compararPontuacoes(listaPontuacoes))
