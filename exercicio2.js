function classificaTriangulo(lado1, lado2, lado3) {
    if(lado1 === lado2 && lado2 === lado3) {
        return "O triângulo é Equilátero"
    } else if (lado1 === lado2 || lado2 === lado3 || lado3 === lado1) {
        return "O triângulo é Isósceles"
    } else {
        return "O triângulo é Escaleno"
    }
}

console.log(classificaTriangulo(8, 9, 10))