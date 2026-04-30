// 5. Crie uma função que recebe dois números: início e fim. Depois use um laço para percorrer
// esse intervalo e imprimir apenas os números que são múltiplos de 3.

export function exercicio_05(): void {
    function multiplos3(number1: number, number2: number): any {
        if (number1 < number2) {
            for (number1; number1 < number2+1; number1++) {
                if (number1 % 3 == 0) {
                    alert(number1)
                }
            }
        } else {
            for (number1; number1 > number2+1; number1--) {
                if (number1 % 3 == 0) {
                    alert(number1)
                } else {

                }
            }
        }
    }
    let number1: number = 0, number2: number = 0
    number1 = Number(prompt(`Informe o número inicial do laço: `))
    number2 = Number(prompt(`Informe o número final do laço: `))
    multiplos3(number1, number2)

}