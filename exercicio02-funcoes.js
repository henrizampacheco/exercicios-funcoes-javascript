/* 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo). */

const classificarTriangulos = (lado1, lado2, lado3) => {
    if (lado1 == lado2 && lado1 == lado3) {
        return `Os três lados: ${lado1}, ${lado2} e ${lado3} são iguais. R.: Triângulo equilátero.`
    } else if ((lado1 != lado2 || lado1 != lado3) && (lado2 == lado3 || lado2 == lado1)) {
        return `Um dos lados: ${lado1}, ${lado2} e ${lado3} é diferente dos demais. R.: Triângulo isósceles.`
    } else {
        return `Os lados: ${lado1}, ${lado2} e ${lado3} são todos diferentes. R.: Triângulo escaleno.`
    }
}

console.log(classificarTriangulos(3, 3, 3))
console.log(classificarTriangulos(5, 5, 3))
console.log(classificarTriangulos(7, 4, 5))
