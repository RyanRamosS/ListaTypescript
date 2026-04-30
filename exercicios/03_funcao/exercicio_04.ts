// 4. Crie uma função que recebe um valor de saque (inteiro). A função deve dizer quantas notas
// de 50, 20 e 10 são necessárias para o saque (priorizando as maiores). Use um laço while
// para ir subtraindo do valor total.

export function exercicio_04(): void {
    function saque(numero: number): any {
        while (numero > 0) {
            if (!isNaN(numero)){
                numero = Number(prompt(`Informe um número inteiro: `))
            }else{
                if (!Number.isInteger(numero)){
                    numero = Number(prompt(`Informe um número inteiro: `))
                }
                else{
                if (numero >= 50) {
                    cinquenta++
                    numero -= 50
                    total++
                } else if (numero >= 20) {
                    vinte++
                    numero -= 20
                    total++
                } else if (numero >= 10) {
                    dez++
                    numero -= 10
                    total++
                }else if (numero < 10){
                    numero = -1
                }
            }
        }

        }
        alert(`A quantidade total de notas sacadas foram ${total} e 
A quantidade de notas de 50 foram ${cinquenta}
A quantidade de notas de 20 foram ${vinte}
A quantidade de notas de 10 foram ${dez}`)
    }
    let total: number = 0, cinquenta: number = 0, vinte: number = 0, dez: number = 0, numero: number = 0
    numero = Number(prompt(`Informe o valor do saque: `))
    saque(numero)
}