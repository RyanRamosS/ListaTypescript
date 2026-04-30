// 5. Analisador de Desempenho de Vendas (Relatório de Equipe)
// Imagine que você está gerindo uma equipe de 5 vendedores.
// Função classificarVenda(valor):
// o Se valor 1000: Retorna Bronze
// o Se valor entre 1000 e 5000: Retorna Prata
// o Se valor 5000: Retorna Ouro
// O Programa:
// 1. Use um laço for para pedir o valor da venda de cada um dos 5 vendedores.
// 2. Dentro do laço, chame a função de classificação.
// 3. Ao final, o programa deve exibir:
// O total de vendas da equipe (soma).
// Quem foi o vendedor com a maior venda (maior valor digitado).
// Quantos vendedores atingiram a categoria Ouro.
export function exercicio_05() {
    function classificarVenda(valor) {
        if (valor == 1000) {
            return classe = `Bronze`;
        }
        else if (valor > 1000 && valor < 5000) {
            return classe = `Prata`;
        }
        else if (valor > 5000) {
            ouro++;
            return classe = `Ouro`;
        }
        else {
            return classe = `Indefinido`;
        }
    }
    let valor = 0, classe = '', nome = '', somavendas = 0, i = 0, maior_Venda = 0, maior_vendedor = '', ouro = 0;
    for (i = 0; i < 5; i++) {
        nome = String(prompt(`Informe o nome do vendedor: `));
        valor = Number(prompt(`Informe o valor de venda do vendedor "${nome}:" `));
        if (valor > maior_Venda) {
            maior_Venda = valor;
            maior_vendedor = nome;
        }
        classificarVenda(valor);
        somavendas += valor;
    }
    alert(`A quantidade totais de vendas foram ${somavendas}
A maior venda no valor de ${maior_Venda} foi do vendedor ${maior_vendedor}
A quantidade de venda classificadas como Ouro foi ${ouro}`);
}
