
function tabuada(){
    let num = window.document.querySelector('input#num')
    let tab = window.document.querySelector('select#tab')
    tab.innerHTML = ''
    if (num == null){
        window.alert('Por favor, digite um número!')
    } else{
        let n1 = parseInt(num.value)
        let c = 1
        while(c <= 25){
            let item = document.createElement('option')
            let res = c * n1
            item.text = `${n1} x ${c} = ${res}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}