// 7. Sistema de Eficiência de Combustível
// Crie um programa que ajude um motorista a saber a autonomia do seu carro.
//  Função 1: Recebe a distância percorrida e a quantidade de combustível gasta, retornando
// o consumo médio (km/l).
//  Função 2: Recebe o consumo médio e a capacidade total do tanque, retornando quantos
// quilômetros o carro percorre com o tanque cheio.

export function exercicio_07(): void{
    function consumo_Medio(distancia:number, combustivel:number ):any{
        return consumo = distancia/combustivel
    }
    function percorre(consumo:number, tanque:number){
        return roda = tanque * consumo
    }
    let roda:number = 0, consumo:number = 0, tanque:number = 0, distancia:number = 0, combustivel:number = 0
    distancia = Number(prompt(`Qual foi a distância percorrida? `))
    combustivel = Number(prompt(`Na distância ${distancia} quantos litros tinha no tanque?`))
    consumo_Medio(distancia, combustivel)
    tanque = Number(prompt(`Qual a capacidade maximo do tanque do carro?`))
    percorre(consumo, tanque)
    alert(`A média de consumo do seu carro foi: ${consumo} Km/L
Com o tanque cheio ele poderia percorrer ${roda} Km`)

}