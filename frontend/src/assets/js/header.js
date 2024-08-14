const header = document.querySelector(".header");
const contenedor__menu = document.querySelector(".header__contenedor")
const boton = document.querySelector(".menu__responsive__button");
const body = document.querySelector("body")

var menu__abierto = false;

boton.addEventListener("click", function(){

    if(menu__abierto == false){

        contenedor__menu.style.marginLeft = "0"
        body.style.overflowY = "hidden"
        menu__abierto = true;

    }else{
        contenedor__menu.style.marginLeft = "-100%"
        body.style.overflowY = "scroll"
        menu__abierto = false;

    }

})


/* /////////////////////////  ////////////////////////////*/

AOS.init();

/* /////////////////////////  ////////////////////////////*/

var iconos_redesSociales = document.querySelectorAll(".header__icono img")
var video_portada = document.querySelector(".video_portada")

if(screen.width < 700){

    
    iconos_redesSociales[0].setAttribute("src", "assets/img/menu__icono_instagram.png")
    iconos_redesSociales[1].setAttribute("src", "assets/img/menu__icono_facebook.png")

    if(video_portada != null ){
        video_portada.setAttribute("src", "assets/vid/video_portada_responsive.mp4")
    }
    
}