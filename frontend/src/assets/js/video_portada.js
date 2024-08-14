var mascara = document.querySelector(".mascara")
var video = document.querySelector(".video_portada");
var muteado = true;

video.play();
video.muted = true;

mascara.addEventListener("click", function(){

    if(muteado){
        video.muted = false
        muteado = false;
    }else{
        video.muted = true
        muteado = true;
    }

    
})

