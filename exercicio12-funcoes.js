/* 12) Faça um algoritmo que calcule o fatorial de um número. */

const calcularFatorial = numero => {
    let fatorial = 1
    let i = 2

    while (i <= numero) {
        fatorial = fatorial * i
        i++
    }
    return `Fatorial de ${numero} = ${fatorial}`
}

console.log(calcularFatorial(0))
console.log(calcularFatorial(1))
console.log(calcularFatorial(2))
console.log(calcularFatorial(3))
console.log(calcularFatorial(4))
console.log(calcularFatorial(5))
console.log(calcularFatorial(6))
console.log(calcularFatorial(14))
