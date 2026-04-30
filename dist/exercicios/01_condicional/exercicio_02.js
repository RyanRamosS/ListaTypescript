// 2. Crie um programa chamado Estações. Este programa deve ler uma data e armazenar na
// variável mês, um número entre 1 e 12, correspondendo a um dos meses do ano. No final,
// você deve imprimir uma mensagem conforme o exemplo: &quot;A estação do ano correspondente
// ao mês 3 é Verão&quot; Considere a estação prevalente para cada mês:
// a) Janeiro (1): Verão
// b) Fevereiro (2): Verão
// c) Março (3): Verão
// d) Abril (4): Outono
// e) Maio (5): Outono
// f) Junho (6): Outono
// g) Julho (7): Inverno
// h) Agosto (8): Inverno
// i) Setembro (9): Inverno
// j) Outubro (10): Primavera
// k) Novembro (11): Primavera
// l) Dezembro (12): Primavera
export function exercicio_02() {
    function estacao(mes) {
        return console.log(mes > 0 && mes <= 3 ? "Verão" : mes > 3 && mes <= 6 ? "Outono" : mes > 6 && mes <= 9 ? "Inverno" : mes > 9 && mes <= 12 ? "Primavera" : "Por favor use outro número entre 1 e 12");
    }
    let mes;
    mes = Number(prompt(`Informe o mês para saber a estação do ano: `));
    estacao(mes);
}
