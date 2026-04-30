// Ler dois valores e imprimir uma das três mensagens a seguir:
// ● ‘Números iguais’, caso os números sejam iguais;
// ● ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
// ● ‘Segundo maior’, caso o segundo seja maior que o primeiro.
export function exercicio_04() {
    let numero_1 = 0, numero_2 = 0;
    numero_1 = Number(prompt(`Informe o primeiro número: `));
    numero_2 = Number(prompt(`Informe o segundo número: `));
    console.log(numero_1 == numero_2 ? `Primeiro número é igual ao segundo número digitado` : numero_1 > numero_2 ? `Primeiro número é maior que segundo número digitado` : `Segundo número é maior que o primeiro número digitado`);
}
