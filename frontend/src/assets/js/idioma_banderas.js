const select_idioma = document.querySelector(".menu__item--banderas");
const bandera_espanol = document.querySelector(".bandera_espanol")
const bandera_ingles_segunda = document.querySelector("#bandera_ingles--segunda")
const bandera_ingles = document.querySelector(".bandera_ingles")

if(localStorage.getItem("idioma") == null){
    localStorage.setItem("idioma", "ingles")
}

if(localStorage.getItem("idioma") == "ingles"){

    bandera_ingles.style.display = "block"
    bandera_ingles_segunda.style.display = "none"
    
}else{
    bandera_ingles.style.display = "none"
}

var abierto = false;


bandera_espanol.addEventListener("click", function(){

    if(abierto == false){

        select_idioma.style.overflow = "visible"
        abierto = true;
    }

    else{
        localStorage.setItem("idioma", "espanol")

        select_idioma.style.overflow = "hidden"
        abierto = false

        bandera_ingles.style.display = "none";
        bandera_ingles_segunda.style.display = "block"

        location.reload();

        

    }

    

})

bandera_ingles.addEventListener("click", function(){

    if(abierto == false){

        select_idioma.style.overflow = "visible"
        abierto = true;
    }

    else{
        localStorage.setItem("idioma", "ingles")
        select_idioma.style.overflow = "hidden"
        abierto = false

        location.reload();
    }


    

    
})


bandera_ingles_segunda.addEventListener("click", function(){

    if(abierto == false){

        select_idioma.style.overflow = "visible"
        abierto = true;
    }

    else{
        localStorage.setItem("idioma", "ingles")
        select_idioma.style.overflow = "hidden"
        abierto = false


        bandera_ingles.style.display = "block"
        bandera_ingles_segunda.style.display = "none"
        location.reload();


    }

    


})

