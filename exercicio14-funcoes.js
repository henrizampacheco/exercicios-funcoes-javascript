/* 14) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie também um default, que retornará uma mensagem de erro no console. */

const comprarFruta = fruta => {
    switch (fruta) {
        case 'maçã':
            return 'Não vendemos esta fruta aqui.'
            break
        case 'kiwi':
            return 'Estamos com escassez de kiwis.'
            break
        case 'melancia':
            return 'Aqui está, são 3 reais o quilo.'
            break
        default:
            return 'Erro! Insira uma das opções: "maçã", "kiwi" ou "melancia".'
    }
}

console.log(comprarFruta('maçã'))
console.log(comprarFruta('kiwi'))
console.log(comprarFruta('melancia'))
console.log(comprarFruta('banana'))
console.log(comprarFruta('uva'))
