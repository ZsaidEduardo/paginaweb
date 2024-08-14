if(localStorage.getItem("idioma") == "espanol"){
    document.title = "Registrarse | SpraYL"
}else{
    document.title = "Sign Up | SpraYL"
}


/*-////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////- SIGN UP ///////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////*/


var leftSide_subtitulo = document.querySelectorAll(".login__leftSide__subtitulo")

var idiomaEspanol_leftSideSubtitulo = '"Bienvenido a SpraYL, donde reflejamos la perfección en cada detalle."'
var idiomaIngles_leftSideSubtitulo = '"Welcome to SpraYL, where we reflect perfection in every detail."'


recorrerIdioma(idiomaEspanol_leftSideSubtitulo, idiomaIngles_leftSideSubtitulo, leftSide_subtitulo)

/*------------------------------*/

var titulo_form = document.querySelectorAll(".login__titulo");
var idiomaEspanol_tituloForm = "Crear una cuenta"
var idiomaEIngles_tituloForm = "Create an Account"

recorrerIdioma(idiomaEspanol_tituloForm, idiomaEIngles_tituloForm, titulo_form)


/*------------------------------*/

var input_tags = document.querySelectorAll(".login__fieldset legend")

var idiomaEspanol_inputsTag = [
    "Tu Nombre", "Correo", "Contraseña", "Contraseña"
]
var idiomaIngles_inputsTag = [
    "Your Name", "Email", "Password", "Password"
]

recorrerIdioma(idiomaEspanol_inputsTag, idiomaIngles_inputsTag, input_tags)

/*--------------------------------*/

var button_form = document.querySelector(".login__input--signup")

if(localStorage.getItem("idioma") == "espanol"){
    button_form.value = "Empezar"
}else{
    button_form.value = "Get Started"
}

/*--------------------------------*/

var otra_opcion_tag = document.querySelectorAll(".login__separador span");
var idiomaEspanol_otroTag = "O"
var idiomarIngles_otroTag = "Or"

recorrerIdioma(idiomaEspanol_otroTag, idiomarIngles_otroTag, otra_opcion_tag)


/*---------------------------------*/

var otras_alternativas = document.querySelectorAll(".login__alternativo span")
var idiomaEspanol_loginALternativo = [
    "Registrarse con Google",
    "Registrarse con Facebook",
    "Registrarse con Apple"
]
var idiomaIngles_loginALternativo = [
    "Sign Up Google",
    "Sign Up Facebook",
    "Sign Up Apple"
]

recorrerIdioma(idiomaEspanol_loginALternativo, idiomaIngles_loginALternativo, otras_alternativas)

/*---------------------------------*/

var redireccion = document.querySelectorAll(".login__redireccionar")
var idiomaEspanol_redireccionar = "¿Ya tienes una cuenta? <a href='signup.html'>Inicia Sesión Aquí</a>"
var idiomaIngles_redireccionar = "Already have an account? <a href='login.html'>Log In Here</a>"

recorrerIdioma(idiomaEspanol_redireccionar, idiomaIngles_redireccionar, redireccion)

/*----- /////////////////// FUNCION /////////////////////// -*/

function recorrerIdioma(arrayIdiomaEspanol, arrayIdiomaIngles, campos){

    if(localStorage.getItem("idioma") == "espanol"){

        if(campos.length > 1){

            for(var i =0; i<campos.length; i++){

                campos[i].innerHTML = arrayIdiomaEspanol[i]  
                  
            }

        }else{
            campos[0].innerHTML= arrayIdiomaEspanol;
          
        }

        

    }else{

        if(campos.length > 1){

            for(var i =0; i<campos.length; i++){
                campos[i].innerHTML = arrayIdiomaIngles[i]
    
            }

        }else{
            campos[0].innerHTML= arrayIdiomaIngles;
          
        }


        
    }


}