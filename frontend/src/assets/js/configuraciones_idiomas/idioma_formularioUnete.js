/*-////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////- FORMULARIO ÚNETE ///////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////*/

if(localStorage.getItem("idioma") == "espanol"){
    document.title = "Formulario Únete | SpraYL"
}else{
    document.title = "Join Form | SpraYL"
}

/*------------------*/

var titulo_header = document.querySelectorAll(".header__unete__titulo");
var idiomaEspanol_tituloHeader = "Únete"
var idiomaIngles_tituloHeader = "Join Up"

recorrerIdioma(idiomaEspanol_tituloHeader, idiomaIngles_tituloHeader, titulo_header)

/*------------------*/

var titulo_formulario = document.querySelectorAll(".formulario__titulo");
var idiomaEspanol_tituloFormulario = "Formulario"
var idiomaIngles_tituloFormulario = "Form"

recorrerIdioma(idiomaEspanol_tituloFormulario, idiomaIngles_tituloFormulario, titulo_formulario)


/*------------------*/

var labels_formulario = document.querySelectorAll(".formulario__label")

var idiomaEspanol_labelsFormulario = [
    "Nombre completo", "Fecha de Nacimiento", "Direccón", "Número de Telefono", "Correo Electrónico",
    "Tienes experiencia previa en detallado de automóviles", "Si te respuesta fue si , describa su experiencia",
    "Tiene trasporte propio", "¿Está dispuesto a trabajar fines de semana y días festivos?", "Disponibilidad",
    "Dias de la semana disponibles para trabajar"
]

var idiomaIngles_labelsFormulario = [
    "Full name", "Birthdate", "Address", "Phone number", "Email",
    "You have previous experience in car detailing", "If the answer was yes, describe your experience.",
    "Has own transportation", "¿Are you willing to work weekends and holidays?", "Availability",
    "Days of the week available to work"
]

recorrerIdioma(idiomaEspanol_labelsFormulario, idiomaIngles_labelsFormulario, labels_formulario)


/*------------------*/

var radioButtons = document.querySelectorAll(".formulario__input--radio span")

for(var i = 0; i < radioButtons.length; i++){

    if(localStorage.getItem("idioma") == "espanol"){

        if(i%2 == 0){
            radioButtons[i].innerHTML = "Si"
        }else{
            radioButtons[i].innerHTML = "No"
        }

    }else{
        if(i%2 == 0){
            radioButtons[i].innerHTML = "Yes"
        }else{
            radioButtons[i].innerHTML = "No"
        }
    }

}


/*------------------*/

var cabecera_select = document.querySelectorAll(".cabecera_select");
var idiomaEspano_cabeceraSelect = "Días de la Semana"
var idiomaIngles_cabeceraSelect = "Weekdays"

recorrerIdioma(idiomaEspano_cabeceraSelect, idiomaIngles_cabeceraSelect, cabecera_select)


var optionsSelect = document.querySelectorAll(".opcion_dia")

var idiomaEspanol_option = [
    "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"
]
var idiomaIngles_option = [
    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
]


recorrerIdioma(idiomaEspanol_option, idiomaIngles_option, optionsSelect)


/*----------------------*/

var terminos_formulario = document.querySelectorAll(".formulario__terminos")
var idiomaEspanol_terminosFormulario = "Conformidad y Aceptación <br> Certifico que la información proporcionada es veraz y completa. Entiendo que cualquier falsedad o omisión puede resultar en la descalificación de mi candidatura o, si soy contratado, en la terminación del empleo."
var idiomaIngles_terminosFormulario = "Compliance and Acceptance <br> I certify that the information provided is true and complete. I understand that any misrepresentation or omission may result in disqualification of my application or, if hired, termination of employment."

recorrerIdioma(idiomaEspanol_terminosFormulario, idiomaIngles_terminosFormulario, terminos_formulario)

/*----------------------*/

var boton_submit = document.querySelector(".unete__submit")

if(localStorage.getItem("idioma") == "espanol"){

    boton_submit.value = "Confirmar"

}else{
    boton_submit.value = "Confirm"
}

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
