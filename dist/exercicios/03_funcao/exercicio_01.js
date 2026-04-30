// 1. Crie uma função somarAte que recebe um número inteiro positivo. Use um laço de repetição
// para calcular a soma de todos os números de 1 até o número fornecido. (Ex: somarAte(4)
// deve retornar 10, pois 1+2+3+4 = 10).
export function exercicio_01() {
    function somarAte(comando) {
        for (let i = 0; i < comando; i++) {
            lista_Numeros[i] = i + 1;
            soma += i + 1;
        }
    }
    let comando = 0, soma = 0, numero = 0, lista_Numeros = [];
    comando = Number(prompt(`Informe a quantidade de números que deseja somar: `));
    somarAte(comando);
    alert(`A soma dos números ${lista_Numeros} 
foi ${soma}`);
}
