// 1. Crie uma função somarAte que recebe um número inteiro positivo. Use um laço de repetição
// para calcular a soma de todos os números de 1 até o número fornecido. (Ex: somarAte(4)
// deve retornar 10, pois 1+2+3+4 = 10).

export function exercicio_01(): void{
    function somarAte(comando:number): void{
        for (let i:number = 0; i < comando; i++){
            
            lista_Numeros[i] = i+1
            soma += i+1
        }
    }
    let comando:number = 0, soma:number = 0, numero:number = 0, lista_Numeros:any = []
    comando = Number(prompt(`Informe a quantidade de números que deseja somar: `))
    somarAte(comando)
    alert(`A soma dos números ${lista_Numeros} 
foi ${soma}`)
}