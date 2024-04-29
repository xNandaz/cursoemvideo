
function carregar (){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
        if (hora >=0 && hora < 12 ) {
            //BOM DIA
            img.src = 'manha.png'
            
        } else if (hora >= 12 && hora < 18){
            // BOA TARDE
            img.src = 'tarde.png'
    
        } else {
            // BOA NOITE
            img.src = 'noite.png'
    
        }
    
    }