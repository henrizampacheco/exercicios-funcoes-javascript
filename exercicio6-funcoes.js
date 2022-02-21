/* 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */

const calcularJurosSimples = (capital, taxa, tempo) => {
    if(taxa >= 1) {
        taxa = taxa / 100
    }
    let montanteJurosSimples = capital + (capital * taxa * tempo)
    return `Montante sob juros simples = R$ ${montanteJurosSimples.toFixed(2).toString().replace('.', ',')}`
}

const calcularJurosCompostos = (capital, taxa, tempo) => {
    if(taxa >= 1) {
        taxa = taxa / 100
    }
    let montanteJurosCompostos = capital * Math.pow(1 + taxa, tempo)
    return `Montante sob juros compostos = R$ ${montanteJurosCompostos.toFixed(2).toString().replace('.', ',')}`
}

console.log(calcularJurosSimples(600, 3, 15))
console.log(calcularJurosCompostos(2000, 0.03, 4))
