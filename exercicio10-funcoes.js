/* 10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true ou false. */

const verificarDivisivelPor3 = numero => {
    if (numero == 0) {
        return undefined
    } else {
        if (numero % 3 == 0) {
            return true
        } else {
            return false
        }
    }
}

console.log(verificarDivisivelPor3(3))
console.log(verificarDivisivelPor3(9))
console.log(verificarDivisivelPor3(21))
console.log(verificarDivisivelPor3(45))
console.log(verificarDivisivelPor3(1))
console.log(verificarDivisivelPor3(10))
console.log(verificarDivisivelPor3(53))
console.log(verificarDivisivelPor3(0))
