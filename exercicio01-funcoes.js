/* 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores. */

const calcularOperacoesBasicas = (x, y) => {
    return `
    Resultados das operações:
    Soma: ${x + y}
    Subtracão: ${x - y}
    Multiplicacao: ${x * y}
    Divisão: ${(x / y).toFixed(2)}`
}

console.log(calcularOperacoesBasicas(2, 3))
