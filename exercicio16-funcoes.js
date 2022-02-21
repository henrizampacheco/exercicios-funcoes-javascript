/* 16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e 3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas. */

const calcularDoisValores = (x, operacao, y) => {
    switch (operacao) {
        case '+':
            return x + y
            break
        case '-':
            return x - y
            break
        case '*':
            return x * y
            break
        case '/':
            return x / y
            break
        default:
            return 'Operação inválida! Insira os valores corretamente!'
    }
}

console.log(calcularDoisValores(3, '+', 4))
console.log(calcularDoisValores(7, '-', 2))
console.log(calcularDoisValores(4, '*', 8))
console.log(calcularDoisValores(6, '/', 2))
