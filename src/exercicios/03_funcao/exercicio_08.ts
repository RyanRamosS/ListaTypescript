// 8. Controle de Estoque de Loja (Loop e Relatório)
// Faça um programa que gerencie a entrada de produtos em um estoque. O programa deve solicitar o
// preço unitário do produto e a quantidade comprada.
// Crie uma função que recebe preço e quantidade. Se a quantidade for maior que 10 unidades,
// aplica 5% de desconto sobre o valor total daquele item. Retorna o valor final.
// O programa deve repetir a solicitação até que o preço informado seja zero.
// Ao encerrar, exiba o total geral investido no estoque e a média de preço dos produtos
// cadastrados.

export function exercicio_08():void{
    function desconto(preco_uni:number, quantidade:number): any{
        if (quantidade>10){
            valor_desconto = 5
            preco_uni = preco_uni - preco_uni*valor_desconto/100
            precos += preco_uni
            precos_Quant++
            return total_item = preco_uni*quantidade
        }else{
            return total_item = preco_uni*quantidade
        }

    }
    let preco_uni:number, quantidade:number, valor_desconto:number = 0, total_item:number = 0, produto:string, lista_Produto:any = [],
    i:number = 0, total:number = 0, saida:number = 0, precos:number = 0, media_preco:number = 0, precos_Quant:number = 0


    while(saida != 2){
    produto = String(prompt(`Informe o nome do produto`))
    lista_Produto[i] = produto
    i++
    preco_uni = Number(prompt(`Informe o preço unitario de ${produto}: `))
    quantidade = Number(prompt(`Informe a quantidade do ${produto}: `))
    desconto(preco_uni, quantidade)
    total += total_item
    media_preco = precos/precos_Quant

    saida = Number(prompt(`Deseja continuar o cadastro ?
1 - Sim
2 - Não`))
    }
    alert(`O total geral foi :  R$ ${total.toFixed(2)}
A media de preço é ${media_preco}`)
}
// fazer a listagem dos produtos