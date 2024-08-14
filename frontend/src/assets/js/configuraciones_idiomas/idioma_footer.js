/*-////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////- FOOTER ///////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////*/

var titulo_footer = document.querySelectorAll(".footer__section_header__titulo")

var idiomaEspanoltituloFooter = "<span>Info</span>rma<span>ción</span> de <span>Spra</span>YL"
var idiomaIngles_tituloFooter = "<span>Spra</span>YL <span>Info</span>rmation"

recorrerIdioma(idiomaEspanoltituloFooter, idiomaIngles_tituloFooter, titulo_footer )


/*----------------*/

var titulos_sectins_footer = document.querySelectorAll(".footer_section_main__item_titulo span")

var idiomaEspanol_tituloSectionFooter = [
    "Horas de Atención", "Correo Electrónico", "Número de Teléfono", "Áreas de Servicio"
]

var idiomaIngles_tituloSectionFooter = [
    "Hours of Operation", "Email", "Phone Number", "Service Areas"
]

recorrerIdioma(idiomaEspanol_tituloSectionFooter, idiomaIngles_tituloSectionFooter, titulos_sectins_footer)

/*----------------*/


var epoca_horasDeOperacion = document.querySelectorAll(".footer__lista__item--epoca")
var idiomaEspanol_horaDeOperacion = [
    "Invierno: 7:00 AM - 5:00 PM",
    "Verano: 7:00 AM - 7:00 PM"
]

var idiomaIngles_horaDeOperacion = [
    "Winter: 7:00 AM - 5:00 PM",
    "Summer: 7:00 AM - 7:00 PM"
]

recorrerIdioma(idiomaEspanol_horaDeOperacion, idiomaIngles_horaDeOperacion, epoca_horasDeOperacion)

/*-----------------*/

var boton_reservar = document.querySelectorAll(".footer__section_bottom_book span")

var idiomaEspanol_botonReservar = "Reserva Ya!"
var idiomaIngles_botonReservar = "Book Now!"

recorrerIdioma(idiomaEspanol_botonReservar, idiomaIngles_botonReservar, boton_reservar)

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
