let num = window.document.querySelector('input#num')
let lista = window.document.querySelector('select#lista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }   
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1){
       return true 
    } else{
        return false
    }
}  

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''

    } else{
        window.alert('Valor inválido ou ja encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    res.innerHTML = ''
    if(valores.length == 0){
        window.alert('Erro, nenhum valor encontrado')
    } else{
        let tot = valores.length
        const maior = Math.max(...valores)
        const menor = Math.min(...valores)
        let soma = 0
        for (let c = 0; c < valores.length; c++) {
            soma += valores[c]
        }
        let media = soma / tot
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados <p/>`
        res.innerHTML += `<p>O maior número cadastrado: ${maior}<p/>`
        res.innerHTML += `<p>O menor número cadastrado: ${menor}<p/>`
        res.innerHTML += `<p>A soma de todos os numeros: ${soma}<p/>`
        res.innerHTML += `<p>A média: ${media}<p/>`
    }
}