var arrayExtras = [];
const etiqueta__agregado = document.querySelectorAll(".extra__etiqueta_agregado")
const lista__extras = document.querySelector(".booking__lista__extras")
const input_extras = document.querySelector(".extras_input");
var valor_input = "";

/*------------------ EN CASO DE QUE NO HAYA EXTRA ---------------*/

var li_noExtras = document.createElement("li");   
li_noExtras.classList.add("no_extras")

if(localStorage.getItem("idioma") == "espanol"){
    li_noExtras.innerHTML = "No has agregado extras";
}else{
    li_noExtras.innerHTML = "You have not added any extras"
}



lista__extras.appendChild(li_noExtras)

/*------------------ AGREGAR EXTRA ---------------*/

function agregarExtra(extra, id){

    if(arrayExtras.length == 0){
        lista__extras.removeChild(li_noExtras)
    }

    if(arrayExtras.indexOf(extra) == -1){
        
        if(arrayExtras.length == 0){
            valor_input += extra;
            input_extras.value = valor_input; 


        }else{
            valor_input+= "__"+extra
            input_extras.value = valor_input; 


        }
        
        arrayExtras.push(extra);
    }

    /*--------------------------------------------*/

    etiqueta__agregado[id].style.opacity = "1";

    /*--------------------------------------------*/

    var li_extra = document.createElement("li");
    li_extra.classList.add("extra_li_"+id);
    li_extra.innerHTML = extra

    lista__extras.appendChild(li_extra)

    /*--------------------------------------------*/


}   



/*------------------ QUITAR EXTRA ---------------*/

function quitarExtra(extra, id){

    if(arrayExtras.indexOf(extra) != -1){

        var li_ABorrar = document.querySelector(".extra_li_"+id)
        lista__extras.removeChild(li_ABorrar)

        /*-----------------------------*/

        let ubicacionExtra = arrayExtras.indexOf(extra);
        arrayExtras.splice(ubicacionExtra, 1)

        /*------------------------------*/

        valor_input = ""

        for(var i = 0; i < arrayExtras.length; i++){

            if(i == 0){
                valor_input += arrayExtras[i];
            }else{
                valor_input += "__"+arrayExtras[i];
            }
            

        }

        /*if(valor_input.indexOf(extra) == 0){
            valor_input = valor_input.replace(extra+"__", "")

        }else{
            valor_input = valor_input.replace("__"+extra, "")
        }*/

        input_extras.value = valor_input; 

    }

    /*--------------------------------------------*/

    etiqueta__agregado[id].style.opacity = "0"

    /*--------------------------------------------*/


    if(arrayExtras.length == 0){
        lista__extras.appendChild(li_noExtras)
    }




}