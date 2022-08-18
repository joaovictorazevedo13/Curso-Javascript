function verificar() {
    var nasc = window.document.querySelector('input#nasc')
    var res = window.document.querySelector('div#res')
    var data = new Date()
    var ano = data.getFullYear()
    var nasc2 = parseInt(nasc.value)
    var idade = (ano - nasc2)
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (nasc2 > ano){
        window.alert('ERRO. Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var genero = ''
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade <= 10) {
                img.setAttribute('src', 'homemcrianca.png')
                //crianca
            } else if (idade > 10 && idade <= 30) {
                img.setAttribute('src', 'homemjovem.png')
                //jovem
            } else{
                img.setAttribute('src', 'homemvelho.png')
                //velho
        }
    }   else if (fsex[1].checked){
        genero = 'Mulher'
        if (idade <= 10) {
            img.setAttribute('src', 'mulhercrianca.png')
            //crianca
        } else if (idade > 10 && idade <= 30) {
            img.setAttribute('src', 'mulherjovem.png')
            //jovem
        } else {
            img.setAttribute('src', 'mulhervelha.png')
            //velho
    }
    }   
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
}}