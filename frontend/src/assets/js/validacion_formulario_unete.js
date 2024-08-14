const inputs_totales = document.querySelectorAll(".formulario__input");
const submit__button = document.querySelector(".unete__submit");
const textarea = document.querySelector(".formulario__textarea");
const formulario = document.querySelector(".formulario__unete")

const select_Dias = document.querySelector(".formulario__select")
const input_Dias = document.querySelector(".input_diasDisponibilidad")


var validacion = true;

/*--------------- VALIDACION BLUR INPUT ----------------*/

for(var i =0; i < inputs_totales.length; i++){

    var id_input = inputs_totales[i].id

    inputs_totales[i].setAttribute("onblur", "validarBlurInput('"+id_input+"')")

}

function validarBlurInput(id){

    validacion = true;

    var input = document.getElementById(id);

    if(input.value == ""){
        input.style.outline = "2px solid brown"
        validacion = false
    }else{
        input.style.outline = "none"

    }
    
}

/*--//////////////////// AL HACER CLICK /////////////////////-*/



submit__button.addEventListener("click", function(e){

    e.preventDefault();

    /*---------------- VALIDACION FUNCION INPUT ---------------*/

    var inputs = document.querySelectorAll(".formulario__input")
    validacion = true

    for(var i=0; i<inputs.length; i++){

        var input_elem = inputs[i]; 

        if(input_elem.value == ""){
            input_elem.style.outline = "2px solid brown"
            validacion = false;
        }else{
            input_elem.style.outline = "none"
        }

    }

    
    
    /*--------------  VALIDACION RADIO BUTTONS -----------------*/


    var radioButton_ExperienciaPrevia = document.querySelectorAll('.formulario__radiobutton[name="experiencia_previa"]')
    var radioButton_TransportePropio = document.querySelectorAll('.formulario__radiobutton[name="transporte_propio"]')
    var radioButton_DisposicionDiaFestivo= document.querySelectorAll('.formulario__radiobutton[name="disposicion_diaFestivo"]')

    var activado = [0,0,0]

    function chequearRadioButton(radiobutton, puntodeReferencia){

        for(var i = 0; i<radiobutton.length; i++){

            if(radiobutton[i].checked){
                puntodeReferencia = 1;
                break;
            }
        }
    
        if(puntodeReferencia == 0){
            validacion = false;

        }
    }

    chequearRadioButton(radioButton_ExperienciaPrevia, activado[0])
    chequearRadioButton(radioButton_TransportePropio, activado[1])
    chequearRadioButton(radioButton_DisposicionDiaFestivo, activado[2])


    /*--------------  VALIDACION CHECK BUTTON -----------------*/

    const check_button = document.querySelector(".formulario__input--checkbox")


    if(!check_button.checked){
        validacion = false;
    }

    /*--------------  VALIDACION SELECT -----------------*/

    if(input_Dias.value == ""){
        select_Dias.style.outline = "2px solid brown"
        validacion = false;
    }else{
        select_Dias.style.outline = "none"
    }

    /*--------------  VALIDACION TRUE -----------------*/

    if(validacion){

        formulario.submit();
    }




})


/*///////////////////// FUNCIONALIDAD SELECT ///////////////////*/

var activado = [0,0,0,0,0,0,0]
var arrayDiasDisponibilidad = [];
const img_select = document.querySelector(".select_img img")
const cabecera = document.querySelector(".cabecera_select")
var select_abierto = false;

cabecera.addEventListener("click", function(){

    if(select_abierto == false){
        select_Dias.style.maxHeight = "none"
        select_Dias.style.overflow = "visible"
        select_abierto = true;
        img_select.style.transform = "rotate(180deg)"


    }else{
        select_Dias.style.maxHeight = "50px"
        select_Dias.style.overflow = "hidden"
        img_select.style.transform = "rotate(0deg)"

        if(input_Dias.value == ""){
            select_Dias.style.outline = "2px solid brown"
        }else{
            select_Dias.style.outline = "none"
        }

        select_abierto = false;
    }
})

function optionClick(label, id){

    var label = document.querySelector("#"+label)

    if(activado[id] == 0){
        label.style.backgroundColor = "#002d18"
        activado[id] = 1
        arrayDiasDisponibilidad.push(label.id)


    }else{
        label.style.backgroundColor = "#000"
        activado[id] = 0

        let ubicacionDia = arrayDiasDisponibilidad.indexOf(label.id);
        arrayDiasDisponibilidad.splice(ubicacionDia, 1)

    }

    console.log(arrayDiasDisponibilidad)
    input_Dias.value = "";

    for(var i = 0;i<arrayDiasDisponibilidad.length; i++){

        if(i == arrayDiasDisponibilidad.length-1){
            input_Dias.value += arrayDiasDisponibilidad[i]

        }else{
            input_Dias.value += arrayDiasDisponibilidad[i] + "_"

        }


    }

    console.log(input_Dias.value);
    
}





