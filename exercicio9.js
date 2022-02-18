function sistemaNotas(nota) {
    let novaNota = arredondaNota(nota)
    if(novaNota < 40) {
        return `Reprovado com nota ${novaNota}` 
    } else {
        return `Aprovado com nota ${novaNota}`
    }
}

function arredondaNota(nota) {
    if(nota % 5 > 2) {
        return nota + (5 - (nota%5))
    } else{
        return nota
    }
}

console.log(sistemaNotas(83))