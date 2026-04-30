// Desenvolva a tabuada de um número usando for.
export function exercicio_02():void{
    let maximo:number = 0, numero:number = 0, total:number = 0
    numero = Number(prompt(`Informe um número para ver a tabuada de 0 ao número desejado: `))
    maximo = Number(prompt(`Informe a quantidade de expressões deseja ver do número ${numero}`))
    for (let i:number = 0; i <= maximo; i++ ){
        total = i * numero
        console.log(`${numero} x ${i} = ${total}`)
    }
}