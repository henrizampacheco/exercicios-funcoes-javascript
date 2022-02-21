/* 11) As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a mensagem e retornando true ou false. */

const calcularAnoBissexto = ano => {
    let anoBissexto = false

    if (ano % 4 == 0 && ano != 0) {
        if (ano % 100 == 0) {
            if (ano % 400 == 0) {
                anoBissexto = true
            } else {
                anoBissexto = false
            }
        } else {
            anoBissexto = true
        }
    } else {
        anoBissexto = false
    }

    if (anoBissexto == true) {
        return `O ano ${ano} é bissexto!`
    } else {
        return `O ano ${ano} não é bissexto!`
    }
}

console.log(calcularAnoBissexto(0))
console.log(calcularAnoBissexto(2))
console.log(calcularAnoBissexto(4))
console.log(calcularAnoBissexto(8))
console.log(calcularAnoBissexto(100))
console.log(calcularAnoBissexto(300))
console.log(calcularAnoBissexto(400))
console.log(calcularAnoBissexto(800))
console.log(calcularAnoBissexto(990))
console.log(calcularAnoBissexto(991))
console.log(calcularAnoBissexto(992))
console.log(calcularAnoBissexto(993))
