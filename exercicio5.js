function formatarValorReal(valor) {
    return `R$ ${valor.toFixed(2).toString().replace(".", ",")}`
}

console.log(formatarValorReal(0.1 + 0.2))