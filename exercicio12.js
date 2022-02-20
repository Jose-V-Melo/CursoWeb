function fatorial(valor) {
    let fatorial = 1
    for (let i = valor; i > 0; i--) {
        fatorial *= i
    }
    return fatorial
}

console.log(fatorial(0))