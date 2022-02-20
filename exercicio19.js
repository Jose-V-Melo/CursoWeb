/* Resolução de outro aluno */

const padraoReal = new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'})

const catalogo = {
    100: ["Cachorro Quente", 3.00],
    200: ["Hambúrguer Simples", 4.00],
    300: ["Cheeseburguer", 5.50],
    400: ["Bauru", 7.50],
    500: ["Refrigerante", 3.50],
    600: ["Suco", 2.80]
}

let pedidoCliente = [
    [00, 2],
    [900, 5],
    [500, 5],
    [600, 2]
]

const getNome = (catalogo, codigo) => {
    if(catalogo[codigo]) {
        return catalogo[codigo][0]
    } else {
        return "Produto não cadastrado"
    }
}

const getPreco = (catalogo, codigo) => {
    if(catalogo[codigo]) {
        return catalogo[codigo][1]
    } else {
        return 0
    }
}

const valorItem = (catalogo, [cod, num]) => {
    let valor = getPreco(catalogo, cod)
    return valor * num
}

const somarComanda = (catalogo, pedidoCliente) =>{
    return pedidoCliente.map(item => valorItem(catalogo, item))
                        .reduce((total, item) => total + item)
}

const conferirPedidos = (catalogo, pedidoCliente) =>{
    return pedidoCliente.map(item => `${item[1]} x ${getNome(catalogo, item[0])} = ${padraoReal.format(valorItem(catalogo, item))}`)
                        .reduce((total, item) => total + '\n' + item)
}

let valorComanda = padraoReal.format(somarComanda(catalogo, pedidoCliente))

console.log(conferirPedidos(catalogo, pedidoCliente))
console.log('Total = ' + valorComanda)

/* Minha resolução */

function lanchonete(codigo, quantidade) {
    switch (codigo) {
        case 100:
            return `Total: R$ ${(3.00*quantidade).toFixed(2)}`
        case 200:
            return `Total: R$ ${(4.00*quantidade).toFixed(2)}`    
        case 300:
            return `Total: R$ ${(5.50*quantidade).toFixed(2)}`
        case 400:
            return `Total: R$ ${(7.50*quantidade).toFixed(2)}`
        case 500:
            return `Total: R$ ${(3.50*quantidade).toFixed(2)}`
        case 600:
            return `Total: R$ ${(2.80*quantidade).toFixed(2)}`
        default:
            return "Produto não existe no cardápio"
    }
}

console.log(lanchonete(100, 3))