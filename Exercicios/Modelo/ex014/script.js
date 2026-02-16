function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 20
    msg.innerHTML=`Agora são ${hora} horas.`
     if(hora >= 0 && hora < 12) {
        //Bom dia
        img = src `imagem/Manha.jpg`
     }else if (hora >= 12 && hora <= 18) {
        //Boa Tarde
        img = src `imgem/Dia.jpg`
     }else {
        //Boa noite
        img = src `imagem/Noite.jpg`
     }
}