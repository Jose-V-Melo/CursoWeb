let pontuacoes = "10 20 20 8 25 3 0 30 1"

function avalia_desempenho(pontuacoes) {
    let pontos = pontuacoes.split(" ")
    let qbrRecorde = 0
    let piorJogo = 1
    let menorPonto = parseInt(pontos[0])
    let maiorPonto = parseInt(pontos[0])

    for (let contador = 1; contador < pontos.length; contador++) {
        const pontoAtual = parseInt(pontos[contador]);
        if(pontoAtual > maiorPonto) {
            maiorPonto = pontoAtual
            qbrRecorde++
        } else if (pontoAtual < menorPonto) {
            menorPonto = pontoAtual
            piorJogo = contador + 1
        }
    }
    return [qbrRecorde, piorJogo]
}

console.log(avalia_desempenho(pontuacoes))