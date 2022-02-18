function anoBissexto(ano) {
    if (ano % 400 === 0) {
        return true
    } else if (ano % 100 === 0) {
        return false
    } else if(ano % 4 === 0) {
        return true
    } else {
        return false
    }
}

function imprimeTela(ano) {
    if(anoBissexto(ano)) {
        console.log(`O ano ${ano} é bissexto`)
    } else {
        console.log(`O ano ${ano} não é bissexto`)
    }
}

imprimeTela(2100)