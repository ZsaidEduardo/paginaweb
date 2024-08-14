const main_booking = document.querySelector(".main__booking");
const header_booking = document.querySelector(".header__booking")
const contenedor__booking = document.querySelector(".main__booking__contenedor__sections")

const barra_progreso = document.querySelector(".booking__line__progress");
const circulos_progreso = document.querySelectorAll(".booking__state__circle");

const titulo_header = document.querySelector(".header__booking__top h2")

var id_progreso = 0;

AlturaAdaptativa(0)

/*--/////////////////////////////////////// BOOKING - FASE 1 ///////////////////////////////////////*/

const boton_siguiente1 = document.querySelector(".booking__form__siguiente_button--1");

boton_siguiente1.addEventListener("click", function(e){

    e.preventDefault();

    var inputs = document.querySelectorAll(".booking__section--booking .booking__form__input")
    var validacion = true;
    
    for(var i=0; i<inputs.length; i++){

        var input_elem = inputs[i]; 
    
        if(input_elem.value == ""){
            input_elem.style.outline = "2px solid brown"
            validacion = false;
        }else{
            input_elem.style.outline = "none"
        }

    }

    if(validacion){

        moverse(1, "25%", "Extras", "Extras")

    }

})


/*--/////////////////////////////////////// EXTRAS - FASE 2 ///////////////////////////////////////*/

const boton_siguiente2 = document.querySelector(".booking__form__siguiente_button--2");

boton_siguiente2.addEventListener("click", function(e){

    e.preventDefault();

    moverse(2, "50%", "Fecha y Hora", "Date and Time")

})

/*--/////////////////////////////////////// FECHA Y HORA - FASE 3 ///////////////////////////////////////*/

const boton_siguiente3 = document.querySelector(".booking__form__siguiente_button--3");
const input_date = document.querySelector(".date__seleccionada");
const mensaje_error = document.querySelector(".error_fechaYHora")

boton_siguiente3.addEventListener("click", function(e){

    e.preventDefault();

    let validacion;

    if(input_date.value == "" || input_date.value.includes("undefined")){

        validacion = false;

        if(localStorage.getItem("idioma") == "espanol"){
            mensaje_error.innerHTML = "Seleccione la Fecha"
        }else{
            mensaje_error.innerHTML = "Select Date"
        }

        
    }else if(input_date.value.length < 11){
        validacion = false; 

        if(localStorage.getItem("idioma") == "espanol"){
            mensaje_error.innerHTML = "Seleccione la Hora"
        }else{
            mensaje_error.innerHTML = "Select Time"
        }


    }else{
        mensaje_error.innerHTML = ""
        validacion = true;
    }
    
    if(validacion){
        moverse(3, "75%", "Detalles", "Details")
    }

})


/*--/////////////////////////////////////// DETALLES - FASE 4 ///////////////////////////////////////*/

const boton_siguiente4 = document.querySelector(".booking__form__siguiente_button--4");

boton_siguiente4.addEventListener("click", function(e){

    e.preventDefault();
    var inputs = document.querySelectorAll(".booking__section--detalles .booking__detalles__input")
    var checkboxs = document.querySelectorAll(".booking__input__checkbox")
    var labels_checkbox = document.querySelectorAll(".booking__contenedor__checkbox label")
    var validacion = true;

    for(var i=0; i<inputs.length; i++){
        var input_elem = inputs[i]; 
        if(input_elem.value == ""){

            input_elem.style.outline = "2px solid brown"
            validacion = false;
        }else{
            input_elem.style.outline = "none"
        }
    }

    for(var i=0; i<checkboxs.length; i++){

        var input_checkbox = checkboxs[i];
        var label_checkbox = labels_checkbox[i]

        if(input_checkbox.checked == false){

            label_checkbox.style.color = "brown"
            validacion = false
        }else{
            label_checkbox.style.color = "#fff"

        }

    }

    if(validacion){

        //Algunos datos insertados en el resumen con una funcion
        insertarValorEnResumen("nombre", "cliente");
        insertarValorEnResumen("fechaYHora", "fechaYHora");
        insertarValorEnResumen("marca", "marca");
        insertarValorEnResumen("modelo", "modelo");
        insertarValorEnResumen("anio", "anio");
        insertarValorEnResumen("color", "color");

        //Insertados manualmente (Direccion)

        var ubicacion = document.querySelector("#ubicacion_servicio").value 
        var ciudad = document.querySelector("#ciudad").value 
        var estado = document.querySelector("#estado").value 

        var direccion = ubicacion + ", " + ciudad + ", " + estado
        var direccion__span = document.querySelector("#direccion__dato");
        direccion__span.innerHTML = direccion;

        moverse(4, "100%", "Resumen", "Summary")
    }

})



/*-------------- INTERACCION BOLITAS -----------------------------*/


function cambiarPage(id){
    

    if(id >= id_progreso){
        console.log("Aqui no puede avanzar, o mantenerse")

    }else if(id == 0){
        moverse(0, "0%", "Booking", "Booking");

        for(var i=1; i <= 4; i++){
            circulos_progreso[i].classList.remove("booking__state__circle--active")
        }

    }else if(id == 1){
        moverse(1, "25%", "Extras", "Extras")

        for(var i=2; i <= 4; i++){
            circulos_progreso[i].classList.remove("booking__state__circle--active")
        }

    }else if(id == 2){
        moverse(2, "50%", "Fecha y Hora", "Date and Time")
        for(var i=3; i <= 4; i++){
            circulos_progreso[i].classList.remove("booking__state__circle--active")
        }

    }else if(id == 3){
        moverse(3, "75%", "Detalles", "Details")
        circulos_progreso[id+1].classList.remove("booking__state__circle--active")
    }
    

}


/*//////////////////////////// FUNCIONALIDA VOLVER ATRÁS ///////////////////////////////////////////////////////////////////*/

var boton_volver = document.querySelector(".volver_inicio_contenedor");

boton_volver.addEventListener("click", function(e){

    e.preventDefault();

    if(id_progreso == 4){
        moverse(3, "75%", "Detalles", "Details")
        circulos_progreso[4].classList.remove("booking__state__circle--active")

    }else if(id_progreso == 3){
        moverse(2, "50%", "Fecha y Hora", "Date and Time")
        circulos_progreso[3].classList.remove("booking__state__circle--active")

    }else if(id_progreso == 2){
        moverse(1, "25%", "Extras", "Extras")
        circulos_progreso[2].classList.remove("booking__state__circle--active")

    }else if(id_progreso == 1){
        moverse(0, "0%", "Booking", "Booking");
        circulos_progreso[1].classList.remove("booking__state__circle--active")

    }else{
        location.href ="index.html"
    }

})



/*------------------ FUNCIONES ---------------*/

function AlturaAdaptativa(id){

    let booking_section = document.querySelectorAll(".booking__section");
    let altura_booking_section = booking_section[id].clientHeight;

    main_booking.style.maxHeight = (altura_booking_section+100)+"px"
}


function moverse(id_AdondeTeDiriges, progreso, nombre_Espanol, nombre_Ingles){

    contenedor__booking.style.marginLeft = id_AdondeTeDiriges*(-100)+"%";

    circulos_progreso[id_AdondeTeDiriges].classList.add("booking__state__circle--active")
    barra_progreso.style.width = progreso  

    scrollToTop();
    AlturaAdaptativa(id_AdondeTeDiriges)

    if(localStorage.getItem("idioma") == "espanol"){
        cambiarHeader(nombre_Espanol)
    }else{
        cambiarHeader(nombre_Ingles)
    }
    
    id_progreso = id_AdondeTeDiriges;

   

}


function scrollToTop(){
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
}

function cambiarHeader(titulo){
    titulo_header.innerHTML = titulo;
}

function insertarValorEnResumen(valor, lugarDondeVaElValor){

    var input_valor = document.getElementById(valor).value

    document.getElementById(lugarDondeVaElValor+"__dato").innerHTML = input_valor


}

/*---*/

const inputs_totales = document.querySelectorAll(".booking__form__input");
for(var i =0; i < inputs_totales.length; i++){

    var nombre = inputs_totales[i].id

    inputs_totales[i].setAttribute("onblur", "validarBlurInput('"+nombre+"')")

}

function validarBlurInput(id){

    var input = document.getElementById(id);

    if(input.value == ""){
        input.style.outline = "2px solid brown"
    }else{
        input.style.outline = "none"

    }
    
}
