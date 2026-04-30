// 1. Crie um programa que peça números até o usuário digitar 0 e mostre:
// a) Quantidade de números digitados
// b) Soma total

export function exercicio_01(): void{
    let saida:number = -1, numero:number = 0, soma:number = 0
    while (saida != 0){
        saida = Number(prompt(`Digite um número ou [0] para encerrar o programa: `))
        if (saida == 0){
            alert(`Encerrando o programa!
A quantidade de números digitados foram: ${numero}
A soma dos números digitados é: ${soma}`)
        }else{
            numero++
            soma += saida
            alert(`A quantidade de números digitados foram: ${numero}
A soma dos números digitados é: ${soma}`)
        }
    }
}