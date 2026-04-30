// 7. Sistema de Eficiência de Combustível
// Crie um programa que ajude um motorista a saber a autonomia do seu carro.
//  Função 1: Recebe a distância percorrida e a quantidade de combustível gasta, retornando
// o consumo médio (km/l).
//  Função 2: Recebe o consumo médio e a capacidade total do tanque, retornando quantos
// quilômetros o carro percorre com o tanque cheio.
export function exercicio_07() {
    function consumo_Medio(distancia, combustivel) {
        return consumo = distancia / combustivel;
    }
    function percorre(consumo, tanque) {
        return roda = tanque * consumo;
    }
    let roda = 0, consumo = 0, tanque = 0, distancia = 0, combustivel = 0;
    distancia = Number(prompt(`Qual foi a distância percorrida? `));
    combustivel = Number(prompt(`Na distância ${distancia} quantos litros tinha no tanque?`));
    consumo_Medio(distancia, combustivel);
    tanque = Number(prompt(`Qual a capacidade maximo do tanque do carro?`));
    percorre(consumo, tanque);
    alert(`A média de consumo do seu carro foi: ${consumo} Km/L
Com o tanque cheio ele poderia percorrer ${roda} Km`);
}
