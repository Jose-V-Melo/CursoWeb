function vendaFrutas(fruta) {
    switch (fruta) {
        case 'maçã':
            return "Não vendemos esta fruta aqui"
        case 'kiwi':
            return "Estamos com escassez de kiwis"
        case 'melancia':
            return "Aqui está, são 3 reais o quilo"
        default:
            return "Escolha uma dessas 3 opções: maçã; kiwi; melancia;"
    }
}

console.log(vendaFrutas("banana"))