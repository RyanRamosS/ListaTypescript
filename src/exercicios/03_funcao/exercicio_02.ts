// 2. O IF tem uma estufa e o professor de biologia quer um sistema simples para monitorar a
// temperatura.
// ● Crie uma função ler_temperatura():
// o Simula a leitura de um sensor, pedindo ao usuário para digitar uma temperatura
// (valor inteiro ou float).
// o Retorna a temperatura lida.
// ● Crie uma função verificar_alerta_temperatura(temperatura):
// o Recebe a temperatura.
// o Se a temperatura for menor que 10 ou maior que 30, retorna True (alerta).
// o Caso contrário, retorna False.
// ● Crie uma função emitir_mensagem_alerta(status_alerta):
// o Recebe o status_alerta (True ou False).
// o Se status_alerta for True, imprime ALERTA: Temperatura fora da faixa ideal!.
// o Se status_alerta for False, imprime Temperatura dentro da faixa normal.

export function exercicio_02(): void{
    function ler_temperatura(): any{
        temperatura = Number(prompt(`Informe a temperatura: `))
        return temperatura
    }
    function verificar_alerta_temperatura(temperatura:number): any{
        if (temperatura < 10 || temperatura > 30){
            return status_Alerta = true
        }else{
            return status_Alerta = false
        }
    }
    function emitir_mensagem_alerta(status_Alerta: boolean): any{
        if (status_Alerta == true){
            alert(`ALERTA: Temperatura fora da faixa ideal!.`)
        }else{
            alert(`Temperatura dentro da faixa normal.`)
        }
    }
    let status_Alerta:boolean = true, temperatura:number = 0
    ler_temperatura()
    verificar_alerta_temperatura(temperatura)
    emitir_mensagem_alerta(status_Alerta)
}