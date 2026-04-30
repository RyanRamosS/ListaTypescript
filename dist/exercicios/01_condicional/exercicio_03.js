// 3. Crie um programa que solicite dois números e simule um menu de uma calculadora:
// 1 - Soma
// 2 - Subtração
// 3 - Multiplicação
// 4 - Divisão
// Use switch...Case
export function exercicio_03() {
    let numero_1, numero_2, operacao = -1, soma = 0, subtracao = 0, multiplicacao = 0, divisao = 0;
    while (operacao != 0) {
        operacao = Number(prompt(`Informe qual operação deseja executar:
[1] - Soma
[2] - Subtração
[3] - Multiplicação
[4] - Divisão
[0] - Encerrar programa`));
        if (operacao == 0) {
            alert(`Encerrando programa`);
        }
        else if (operacao > 4 || operacao < 0 || isNaN(operacao) == true) {
            operacao = Number(prompt(`Opção invalida!! por favor seleciona uma opção entre 0 e 4:
[1] - Soma
[2] - Subtração
[3] - Multiplicação
[4] - Divisão
[0] - Encerrar programa`));
        }
        else {
            numero_1 = Number(prompt("Informe o primeiro número: "));
            numero_2 = Number(prompt(`Informe o segundo número: `));
            switch (operacao) {
                case 1:
                    soma = numero_1 + numero_2;
                    alert(soma);
                    break;
                case 2:
                    subtracao = numero_1 - numero_2;
                    alert(subtracao);
                    break;
                case 3:
                    multiplicacao = numero_1 * numero_2;
                    alert(`multiplicacao`);
                    break;
                case 4:
                    if (numero_2 == 0) {
                        numero_2 = Number(prompt(`Impossivel dividir por 0, informe outro número: `));
                    }
                    divisao = numero_1 / numero_2;
                    alert(divisao);
                    break;
            }
        }
    }
}
