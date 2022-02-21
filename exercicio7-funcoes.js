/* 07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”. */

const resolverBhaskara = (a, b, c) => {
    let resultados = []

    let delta = (Math.pow(b, 2) - 4 * a * c)

    let x1 = (-b + Math.sqrt(delta)) / (2 * a)
    let x2 = (-b - Math.sqrt(delta)) / (2 * a)
    resultados.push(x1, x2)

    if (delta < 0) {
        return "Delta é negativo"
    } else {
        return resultados
    }
}

console.log(resolverBhaskara(3, -5, 12))
console.log(resolverBhaskara(1, -1, -12)) // Teste para o else
