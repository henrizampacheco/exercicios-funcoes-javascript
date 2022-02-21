/* 19) O cardápio de uma lanchonete é o seguinte:
| Código | Descrição do Produto |  Preço  |
|   100  |   Cachorro Quente    | R$ 3,00 |
|   200  |  Hambúrguer Simples  | R$ 4,00 |
|   300  |    Cheeseburguer     | R$ 5,50 |
|   400  |         Bauru        | R$ 7,50 |
|   500  |     Refrigerante     | R$ 3,50 |
|   600  |         Suco         | R$ 2,80 |
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o comando switch. Crie um caso default para produto não existente. */

const calcularValorPedido = (codigo, quantidade) => {
    let valorLanche
    switch (codigo) {
        case 100:
            return `Total a pagar: R$ ${(valorLanche = quantidade * 3).toFixed(2).toString().replace('.', ',')}`
            break
        case 200:
            return `Total a pagar: R$ ${(valorLanche = quantidade * 4).toFixed(2).toString().replace('.', ',')}`
            break
        case 300:
            return `Total a pagar: R$ ${(valorLanche = quantidade * 5.5).toFixed(2).toString().replace('.', ',')}`
            break
        case 400:
            return `Total a pagar: R$ ${(valorLanche = quantidade * 7.5).toFixed(2).toString().replace('.', ',')}`
            break
        case 500:
            return `Total a pagar: R$ ${(valorLanche = quantidade * 3.5).toFixed(2).toString().replace('.', ',')}`
            break
        case 600:
            return `Total a pagar: R$ ${(valorLanche = quantidade * 2.8).toFixed(2).toString().replace('.', ',')}`
            break
        default:
            return `Produto não existente! Insira o código novamente!`
    }
}

console.log(calcularValorPedido(200, 10))
console.log(calcularValorPedido(400, 2))
console.log(calcularValorPedido(600, 4))
console.log(calcularValorPedido(8000, 1))
