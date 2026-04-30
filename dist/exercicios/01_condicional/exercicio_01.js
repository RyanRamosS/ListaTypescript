// 1. Crie um programa que leia um número e informe se ele é:
// a) Par ou Ímpar
// b) Positivo ou Negativo
export function exercicio_01() {
    let numero;
    numero = Number(prompt(`Informe um número para confirmar se o número é par ou impar, negativo: `));
    console.log(numero % 2 == 0 ? "Par" : "Impar");
    console.log(numero == 0 ? "Zero" : numero > 0 ? "Positivo" : "Negativo");
}
