// 4. Faça um programa que leia um conjunto de números (X) e imprima a quantidade de
// números pares (QPares) e a quantidade de números ímpares (QImpares) lidos. Admita que o
// valor -1 é utilizado como sentinela para fim de leitura.
export function exercicio_04() {
    let numero = 0, qPar = 0, qImpar = 0, lista_Numeros = [], quantidade = 0;
    while (numero != -1) {
        numero = Number(prompt(`Informe qualquer número ou [-1] para encerrar o programa: `));
        if (numero % 2 == 0) {
            qPar++;
        }
        else {
            if (numero != -1) {
                qImpar++;
            }
        }
        if (numero != -1) {
            lista_Numeros[quantidade] = (` ${numero}`);
            quantidade++;
        }
    }
    alert(`Os números digitados foram 
${lista_Numeros}
A quantidade de números pares foi ${qPar}

A quantidade de números impares foi ${qImpar}`);
}
