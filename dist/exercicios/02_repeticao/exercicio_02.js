// Desenvolva a tabuada de um número usando for.
export function exercicio_02() {
    let maximo = 0, numero = 0, total = 0;
    numero = Number(prompt(`Informe um número para ver a tabuada de 0 ao número desejado: `));
    maximo = Number(prompt(`Informe a quantidade de expressões deseja ver do número ${numero}`));
    for (let i = 0; i <= maximo; i++) {
        total = i * numero;
        console.log(`${numero} x ${i} = ${total}`);
    }
}
