function verificarNumero() {
    let inNumero = document.getElementById('inNumero')
    let outSaida = document.getElementById('outSaida')

    let numero = Number(inNumero.value)

    if (numero % 2 === 0) {
        outSaida.innerHTML = `Resposta: ${numero} é Par.`
    } else {
        outSaida.innerHTML = `Resposta: ${numero} é Ímpar.`
    }
}
let btVerificar = document.getElementById('btVerificar')
btVerificar.addEventListener('click', verificarNumero)