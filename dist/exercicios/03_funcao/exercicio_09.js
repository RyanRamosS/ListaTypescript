// 9. Simulador de Aprovação de Crédito
// Uma loja quer automatizar a análise de crédito de clientes.
// Função solicitar_renda_mensal(): Pede a renda do usuário. Se o valor for negativo ou zero,
// pede novamente até ser válido.
// Função analisar_credito(renda, valor_parcela): * A parcela não pode ultrapassar 30% da
// renda.
// i. Se a renda for acima de R$ 5.000,00, o cliente ganha um bônus de R$ 500,00 no
// limite final.
// ii. Retorna true para aprovado ou false para negado.
// Função exibir_status(resultado): Imprime ;Crédito Aprovado; ou ;Crédito Negado;.
// Peça a renda e o valor da parcela que o cliente deseja pagar, processe e mostre o resultado.
export function exercicio_09() {
    function solicitar_renda_mensal() {
        while (renda <= 0) {
            return renda = Number(prompt(`Informe sua renda`));
        }
    }
    function analisar_credito(renda, valor_parcela) {
        if (valor_parcela < renda * 0.3) {
            return resultado = true;
        }
        else {
            console.log(renda * 0.3);
            return resultado = false;
        }
    }
    function exibir_status(resultado) {
        if (resultado) {
            alert(`Credito Aprovado`);
        }
        else {
            alert(`Credito Negado`);
        }
    }
    let valor_parcela = 0, limite = 0, resultado = false;
    let renda = 0;
    solicitar_renda_mensal();
    console.log(renda);
    // if (renda > 5000) {
    //     limite += 500
    // }
    valor_parcela = Number(prompt(`Informe o valor da parcela que deseja pagar: `));
    console.log(renda * 0.3);
    analisar_credito(renda, valor_parcela);
    exibir_status(resultado);
}
