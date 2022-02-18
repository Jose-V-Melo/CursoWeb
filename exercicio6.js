function jurosSimples(capitalInicial, taxaJuros, tempo) {
    let montante = capitalInicial * (1 + taxaJuros * tempo)
    
    return montante.toFixed(2)  
}

function jurosCompostos(capitalInicial, taxaJuros, tempo) {
    let montante = capitalInicial * (1 + taxaJuros) ** tempo
    
    return montante.toFixed(2)  
}

console.log(`Investindo R$ 100,00 a juros simples de 30% a.a., em dois anos você terá um montante de R$ ${jurosSimples(100, 30/100, 2)}`)
console.log(`Investindo R$ 100,00 a juros compostos de 30% a.a., em dois anos você terá um montante de R$ ${jurosCompostos(100, 30/100, 2)}`)