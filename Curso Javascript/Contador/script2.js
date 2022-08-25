
function limpar(){
    let contador = window.document.querySelector('div#cont')
    contador.innerHTML = ''
}

function contar() {
    let inicio = window.document.querySelector('input#ini') 
    let fim = window.document.querySelector('input#fim')
    let passo = window.document.querySelector('input#pas')
    let contador = window.document.querySelector('div#cont')
    let inicio1 = parseInt(inicio.value)
    let fim1 = parseInt(fim.value)
    let passo1 = parseInt(passo.value)
    if (passo1 <= 0){
        window.alert('Passo inválido!')
        passo1 = 1
    }
    if (fim1 > inicio1)
        for(let c = inicio1; c <= fim1; c += passo1){
            contador.innerHTML += `${c} - `
        } else{
            for(let c = inicio1; c >= fim1; c-= passo1){
                contador.innerHTML += `${c} - `
            }
        }
    contador.innerHTML += ' FIM'
}

