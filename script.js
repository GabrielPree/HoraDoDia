function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
//var hora = data.getHours()
var hora = 6
//msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 5 && hora < 12) {
    //BOM DIA
    msg.innerHTML = `<strong>Bom dia são ${hora} horas.</strong>`
    img.src = 'manha.png'
    document.body.style.background = '#c3a18e'
} else if (hora >= 12 && hora <= 18){
    //BOA TARDE
    msg.innerHTML = `<strong>Boa Tarde são ${hora} horas.</strong>`
    img.src = 'tarde.png'
    document.body.style.background = '#bc7434'
} else {
    //BOA NOITE
    msg.innerHTML = `<strong>Boa Noite são ${hora} horas.</strong>`
    img.src = 'noite.png'
    document.body.style.background = '#180b00'
}
}
