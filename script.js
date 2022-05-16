function carregar() {
    var msg = document.getElementById('msg')
    var foto = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()
    var intervald = window.setInterval(() => {carregar()},1000);
    msg.innerHTML = `Horário: ${hora}:${minuto}:${segundo}`
    if (hora >= 0 && hora < 12){
        foto.src = 'img/manhã.png'
        document.body.style.background = '#9fb489'
        
    }else if (hora >= 12 && hora <= 18) {
        foto.src = 'img/tarde.png'
        document.body.style.background = '#c96412'
     
    } else{
       foto.src = 'img/noite.png'
        document.body.style.background = '#141823'
    }
    if (minuto < 10){
        msg.innerHTML = `Horário: ${hora}:0${minuto}:${segundo}`
    }
    if(minuto < 10 && segundo < 10){
        msg.innerHTML = `Horário: ${hora}:0${minuto}:0${segundo}`
    }
    if(minuto > 10 && segundo < 10){
        msg.innerHTML = `Horário: ${hora}:${minuto}:0${segundo}`
    }
}

