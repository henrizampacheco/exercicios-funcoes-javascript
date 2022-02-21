/* 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores. */

const devolverDivisao = (x, y) => {
    return `
    Resultado da divisão de ${x} por ${y} = ${x / y}
    Resto da divisão de ${x} por ${y} = ${x % y}`
}

console.log(devolverDivisao(15, 3))
console.log(devolverDivisao(5, 2))
