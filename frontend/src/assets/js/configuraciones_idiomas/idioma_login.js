if(localStorage.getItem("idioma") == "espanol"){
    document.title = "Iniciar Sesión | SpraYL"
}else{
    document.title = "Login In | SpraYL"
}


/*-////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////- LOGIN ///////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////*/


var leftSide_subtitulo = document.querySelectorAll(".login__leftSide__subtitulo")

var idiomaEspanol_leftSideSubtitulo = '"Bienvenido a SpraYL, donde reflejamos la perfección en cada detalle."'
var idiomaIngles_leftSideSubtitulo = '"Welcome to SpraYL, where we reflect perfection in every detail."'


recorrerIdioma(idiomaEspanol_leftSideSubtitulo, idiomaIngles_leftSideSubtitulo, leftSide_subtitulo)

/*------------------------------*/

var titulo_form = document.querySelectorAll(".login__titulo");
var idiomaEspanol_tituloForm = "Bienvenido de nuevo"
var idiomaEIngles_tituloForm = "Welcome Again"

recorrerIdioma(idiomaEspanol_tituloForm, idiomaEIngles_tituloForm, titulo_form)


/*------------------------------*/

var input_tags = document.querySelectorAll(".login__fieldset legend")

var idiomaEspanol_inputsTag = [
    "Tu Nombre", "Correo", "Contraseña" 
]
var idiomaIngles_inputsTag = [
    "Your Name", "Email", "Password" 
]

recorrerIdioma(idiomaEspanol_inputsTag, idiomaIngles_inputsTag, input_tags)

/*--------------------------------*/

var button_form = document.querySelector(".login_submit")

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
    "Iniciar Sesión con Google",
    "Iniciar Sesión con Facebook",
    "Iniciar Sesión con Apple"
]
var idiomaIngles_loginALternativo = [
    "Log In Google",
    "Log In Facebook",
    "Log In Apple"
]

recorrerIdioma(idiomaEspanol_loginALternativo, idiomaIngles_loginALternativo, otras_alternativas)

/*---------------------------------*/

var redireccion = document.querySelectorAll(".login__redireccionar")
var idiomaEspanol_redireccionar = "¿No tienes una cuenta? <a href='signup.html'>Registrate Aquí</a>"
var idiomaIngles_redireccionar = "Dont't have an account? <a href='signup.html'>Sign Up Here</a>"

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