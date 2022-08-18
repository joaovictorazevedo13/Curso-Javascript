function carregar() {
    var msg = window.document.querySelector('div#msg')
    var foto = window.document.querySelector('img#imagem')
    var oi = window.document.querySelector('div#oi')
    var data = new Date()
    var hora = data.getHours()
    var hdia = document.querySelector('h1#hdia')
    msg.innerHTML = `Agora são ${hora}H`
    if (hora > 0 && hora < 12) {
        oi.innerHTML = 'BOM DIA!'
        foto.src = 'bomdia1.png'
        document.body.style.background = '#FB922C'
    } else if (hora >= 12 && hora < 18) {
        oi.innerHTML = '<strong>BOA TARDE!<strong>'
        foto.src = 'boatarde1.png'
        document.body.style.background = '#E5995A'
    } else {
        oi.innerHTML = '<strong>BOA NOITE<strong>'
        foto.src = 'boanoite1.png'
        document.body.style.background = '#0C273C'
        }

}