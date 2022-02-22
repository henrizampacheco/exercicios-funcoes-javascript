/* 20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1 nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1. */

const calcularMinimoCedulas = valorSaque => {
    let cont100 = 0
    let cont50 = 0
    let cont10 = 0
    let cont5 = 0
    let cont1 = 0
    let sobraSaque = valorSaque
    let quantiaCedulas = []
    let resultado = ''
    while (sobraSaque != 0) {
        if ((sobraSaque >= 100) && (sobraSaque - 100 >= 0)) {
            cont100++
            sobraSaque = sobraSaque - 100
        } else if ((sobraSaque >= 50) && (sobraSaque - 50 >= 0)) {
            cont50++
            sobraSaque = sobraSaque - 50
        } else if ((sobraSaque >= 10) && (sobraSaque - 10 >= 0)) {
            cont10++
            sobraSaque = sobraSaque - 10
        } else if ((sobraSaque >= 5) && (sobraSaque - 5 >= 0)) {
            cont5++
            sobraSaque = sobraSaque - 5
        } else {
            while (sobraSaque > 0) {
                cont1++
                sobraSaque = sobraSaque - 1
            }
        }
    }
    quantiaCedulas = [cont100, cont50, cont10, cont5, cont1]
    for (let i = 0; i < quantiaCedulas.length; i++) {
        if (quantiaCedulas[i] > 0) {
            let valorCedula
            switch (i) {
                case 0:
                    valorCedula = 100
                    break
                case 1:
                    valorCedula = 50
                    break
                case 2:
                    valorCedula = 10
                    break
                case 3:
                    valorCedula = 5
                    break
                case 4:
                    valorCedula = 1
            }
            resultado += `${quantiaCedulas[i]} nota(s) de R$ ${valorCedula}.\n`
        }
    }
    return resultado
}

console.log(calcularMinimoCedulas(999))
