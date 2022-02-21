/* 13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch. */

const verificarDiaUtil = dia => {
    switch (dia) {
        case 1:
            return 'Fim de semana'
            break
        case 2:
            return 'Dia útil'
            break
        case 3:
            return 'Dia útil'
            break
        case 4:
            return 'Dia útil'
            break
        case 5:
            return 'Dia útil'
            break
        case 6:
            return 'Dia útil'
            break
        case 7:
            return 'Fim de semana'
            break
        default:
            return 'Dia inválido'
    }
}

console.log(verificarDiaUtil(3))
console.log(verificarDiaUtil(6))
console.log(verificarDiaUtil(7))
console.log(verificarDiaUtil(1))
console.log(verificarDiaUtil(0))
console.log(verificarDiaUtil(10))
