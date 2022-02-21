/* 17) Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de acordo com a tabela abaixo:
| Plano | Aumento |
|   A   |   10%   |
|   B   |   15%   |
|   C   |   20%   |
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido. */

const calcularNovoSalario = (plano, salario) => {
    switch (plano) {
        case 'A':
        case 'a':
            return salario += salario * 0.10
            break
        case 'B':
        case 'b':
            return salario += salario * 0.15
            break
        case 'C':
        case 'c':
            return salario += salario * 0.20
            break
        default:
            return 'Plano inválido! Escolha uma das opções: A, B ou C.'
    }
}

console.log(calcularNovoSalario('A', 1000))
console.log(calcularNovoSalario('b', 10000))
console.log(calcularNovoSalario('C', 2000))
console.log(calcularNovoSalario('D', 1450))
