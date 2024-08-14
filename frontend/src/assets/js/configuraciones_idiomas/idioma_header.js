var idiomaIngles = [
    "Home", "Booking", "Join Up", "About Us", "Log In", "Sign Up"
]

var idiomaEspanol = [
    "Inicio", "Booking", "Únete", "SobreNosotros", "Iniciar Sesión", "Registrarse"
]

var campos = document.querySelectorAll(".menu__link");

recorrerIdioma(idiomaEspanol, idiomaIngles, campos)

/*----- /////////////////// FUNCION /////////////////////// -*/

function recorrerIdioma(arrayIdiomaEspanol, arrayIdiomaIngles, campos){

   
    if(localStorage.getItem("idioma") == "espanol"){

        for(var i =0; i<campos.length; i++){
            campos[i].innerHTML = arrayIdiomaEspanol[i]    
        }

    }else{
        for(var i =0; i<campos.length; i++){
            campos[i].innerHTML = arrayIdiomaIngles[i]

        }
    }


    
}