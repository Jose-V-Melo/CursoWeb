function reajusteSalario(plano, salario) {
    switch (plano) {
        case "A":
            console.log("R$", (salario+(salario*10/100)).toFixed(2))
            break;
        case "B":
            console.log("R$", (salario+(salario*15/100)).toFixed(2))
            break;
        case "C":
            console.log("R$", (salario+(salario*20/100)).toFixed(2))
            break;
        default:
            console.log("O plano de trabalho é inválido")
            break;
    }
}

reajusteSalario("D", 100)