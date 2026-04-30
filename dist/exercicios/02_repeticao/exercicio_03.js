// Faça um programa que leia nome, horas trabalhadas, salário-hora e sexo de um grupo de
// operários. Ao final de cada solicitação pergunte se o usuário quer continuar ou não o
// programa.
// Calcule e imprima:
// ● Salário total dos funcionários, o maior salário, juntamente com o nome de quem o
// recebeu;
// ● O número de funcionários do sexo masculino e feminino cadastrado;
// ● O percentual de funcionários homens e mulheres cadastrados.
export function exercicio_03() {
    let nome = "", horas_Trabalhada = 0, salario_Hora = 0, sexo = 0, sexo_Feminino = 0, sexo_Masculino = 0, porcentagem_sexo_M = 0, porcentagem_sexo_F = 0, salario_total = 0, maior_salario = 0, nome_maior_salario = "", qtd_funcionario = 0, salario = 0, saida = 1;
    while (saida != 0) {
        nome = String(prompt(`Informe o nome do colaborador: `));
        sexo = Number(prompt(`Informe o sexo do colaborador:
[1] - Masculino
[2] - Feminino`));
        qtd_funcionario++;
        while (true) {
            if (sexo == 1) {
                sexo_Masculino++;
                break;
            }
            else if (sexo == 2) {
                sexo_Feminino++;
                break;
            }
            else {
                sexo = Number(prompt(`Informação invalida selecione um número entre 1 e 2!!!`));
            }
        }
        horas_Trabalhada = Number(prompt(`Informe a quantidade de horas trabalhadas: `));
        salario_Hora = Number(prompt(`Informe seu salario hora: `));
        salario = horas_Trabalhada * salario_Hora;
        salario_total += salario;
        if (salario > maior_salario) {
            maior_salario = salario;
            nome_maior_salario = nome;
        }
        saida = Number(prompt(`Informe 0 para sair ou qualquer outro número para continuar: `));
    }
    porcentagem_sexo_M = sexo_Masculino / qtd_funcionario * 100;
    porcentagem_sexo_F = sexo_Feminino / qtd_funcionario * 100;
    console.log(`O colaborador com o maior salario foi ${nome_maior_salario} recebendo o absurdo de ${maior_salario} 
o total de salarios dos colaboradores foi ${salario_total}
a quantidade de funcionarios do sexo masculino foi ${sexo_Masculino} a porcentagem é ${porcentagem_sexo_M}
a quantidade de funcinarios do sexo feminino foi ${sexo_Feminino} a porcentagem é ${porcentagem_sexo_F}`);
}
