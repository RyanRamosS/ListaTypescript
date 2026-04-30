// 6. Faça um programa para o cálculo de uma folha de pagamento fictício, sabendo que os
// descontos são do Imposto de Renda, que depende do salário bruto (conforme tabela abaixo),
// 3% para o Sindicato, 6% de vale transporte, 8% de vale alimentação, 10% do INSS e o FGTS
// que corresponde a 11% do Salário Bruto, mas não é descontado (é a empresa que deposita).
// O Salário Líquido corresponde ao Salário Bruto menos os descontos. O programa deverá
// pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no mês.
// Desconto do IR:
// 1. Salário Bruto até R$ 2428,80 (inclusive) - isento
// 2. Salário Bruto de R$ 2.428,81 a R$ 2.826,65 (inclusive) - desconto de 7,5%
// 3. Salário Bruto de R$ 2.826,66 a R$ 3.751,05 (inclusive) - desconto de 15%
// 4. Salário Bruto de R$ 3.751,06 a R$ 4.664,68 (inclusive) - desconto de 22,5%
// 5. Salário Bruto acima de R$4664,68 - desconto de 27,5%.
// Imprima na tela as informações, dispostas conforme o exemplo abaixo. No exemplo o valor da hora
// é R$15,00 e a quantidade de horas é 220.
export function exercicio_06() {
    function imposto_Renda(salario_Bru) {
        if (salario_Bru > 2428.80 && salario_Bru <= 2826.65) {
            return ir = 7.5;
        }
        else if (salario_Bru > 2826.65 && salario_Bru <= 3751.05) {
            return ir = 15.0;
        }
        else if (salario_Bru > 3751.05 && salario_Bru <= 4664.68) {
            return ir = 22.5;
        }
        else if (salario_Bru > 4664.68) {
            return ir = 27.5;
        }
        else {
            return ir = 0;
        }
    }
    function total_Desconto(vale_A, vale_T, sind, inss, ir) {
        return descontos = vale_A / 100 * salario_Bru + vale_T / 100 * salario_Bru + sind / 100 * salario_Bru + inss / 100 * salario_Bru + ir / 100 * salario_Bru;
    }
    function sal_Liquido(descontos, salario_Bru) {
        return salario_liq = salario_Bru - descontos;
    }
    let salario_Bru, descontos = 0, sind = 3.0, valor_ir = 0, vale_T = 6.0, vale_A = 8.0, inss = 1.0, valor_fgts, fgts = 11.0, salario_liq = 0, horas_trab, valor_hora = 0, ir = 0, valor_sind, valor_vale_A, valor_inss, valor_vale_T;
    valor_hora = Number(prompt(`Qual o valor das horas trabalhadas: `));
    if (isNaN(valor_hora)) {
        valor_hora = Number(prompt(`Por favor informe um número: `));
    }
    horas_trab = Number(prompt(`Informe a quantidade de horas trabalhadas: `));
    if (isNaN(horas_trab)) {
        horas_trab = Number(prompt(`Por favor informe um número: `));
    }
    salario_Bru = horas_trab * valor_hora;
    valor_ir = ir / 100 * salario_Bru;
    valor_sind = sind / 100 * salario_Bru;
    valor_vale_T = vale_T / 100 * salario_Bru;
    valor_vale_A = vale_A / 100 * salario_Bru;
    valor_inss = inss / 100 * salario_Bru;
    valor_fgts = salario_Bru * fgts / 100;
    imposto_Renda(salario_Bru);
    total_Desconto(vale_A, vale_T, sind, inss, ir);
    sal_Liquido(descontos, salario_Bru);
    alert(`SalárioBruto:            R$ ${salario_Bru.toFixed(2)}
(-)IR(${ir}%):                      R$ ${valor_ir.toFixed(2)}
(-)INSS(${inss}%):                  R$ ${valor_inss.toFixed(2)}
(-)SINDICATO(${sind}%):             R$ ${valor_sind.toFixed(2)}
(-)V. ALIMENTAÇÃO(${vale_A}%):      R$ ${valor_vale_A.toFixed(2)}
(-)V. TRANSPORTE(${vale_T}%):       R$ ${valor_vale_T.toFixed(2)}
FGTS(${fgts}%):                     R$ ${valor_fgts.toFixed(2)} 
Totaldedescontos :                  R$ ${descontos.toFixed(2)}
SalárioLíquido :                    R$ ${salario_liq.toFixed(2)}`);
}
