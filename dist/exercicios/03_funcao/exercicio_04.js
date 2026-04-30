// 4. Crie uma função que recebe um valor de saque (inteiro). A função deve dizer quantas notas
// de 50, 20 e 10 são necessárias para o saque (priorizando as maiores). Use um laço while
// para ir subtraindo do valor total.
export function exercicio_04() {
    function saque(numero) {
        while (numero > 0) {
            if (!isNaN(numero)) {
                numero = Number(prompt(`Informe um número inteiro: `));
            }
            else {
                if (!Number.isInteger(numero)) {
                    numero = Number(prompt(`Informe um número inteiro: `));
                }
                else {
                    if (numero >= 50) {
                        cinquenta++;
                        numero -= 50;
                        total++;
                    }
                    else if (numero >= 20) {
                        vinte++;
                        numero -= 20;
                        total++;
                    }
                    else if (numero >= 10) {
                        dez++;
                        numero -= 10;
                        total++;
                    }
                    else if (numero < 10) {
                        numero = -1;
                    }
                }
            }
        }
        alert(`A quantidade total de notas sacadas foram ${total} e 
A quantidade de notas de 50 foram ${cinquenta}
A quantidade de notas de 20 foram ${vinte}
A quantidade de notas de 10 foram ${dez}`);
    }
    let total = 0, cinquenta = 0, vinte = 0, dez = 0, numero = 0;
    numero = Number(prompt(`Informe o valor do saque: `));
    saque(numero);
}
