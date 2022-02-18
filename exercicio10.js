function divisivelPor3(numero) {
    if(numero % 3 === 0) {
        return true
    } else {
        return false
    }
}

console.log(`O número 4 é divisível por 3: ${divisivelPor3(4)}`)