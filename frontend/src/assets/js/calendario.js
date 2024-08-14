
/*-//////////////////////////////////////////////// CALENDARIO ////////////////////////////////////////////////*/

var date__seleccionada;
const input__date = document.querySelector(".date__seleccionada")
var seleccion_fecha = false;
var selecciona_hora = false;

var contenedor_horarios = document.querySelector(".contenedor__section__horas")
var coordenada = contenedor_horarios.getBoundingClientRect();
var top_contenedor_horarios = coordenada.top

var ancho = screen.width
if(ancho < 700){
    var altura = 300 
}else{
    var altura = 500
}

document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.querySelector('.calendario');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        selectable: true,
        contentHeight: altura,
        aspectRatio: 2,
        dateClick: function(info){

            var fecha = info.dateStr;
            date__seleccionada = "";
            date__seleccionada+= fecha;
            input__date.value = date__seleccionada;

            seleccion_fecha = true;

            /*-----------------------------------------------*/

            const items_hora = document.querySelectorAll(".hora__item")
            for(var i = 0; i< items_hora.length; i++){
                items_hora[i].style.backgroundColor = "transparent";
            }
            selecciona_hora = false;

           
            /*-----------------------------------------------*/

            var casillas = document.querySelectorAll(".fc-daygrid-day");
            for(var i =0; i<casillas.length; i++){
                casillas[i].style.backgroundColor = "#000"
                casillas[i].style.color = "inherit"
            }

            info.dayEl.style.backgroundColor = '#00a859';
            info.dayEl.style.color = '#000';

        }

    });
    calendar.render();;
});


/*-//////////////////////////////////////////////// HORAS ////////////////////////////////////////////////*/

//MAÑANA
const contenedor__categoria__horasManana = document.querySelector(".contenedor__categoria__horas--manana");
crearHoras(6, 50, 30, contenedor__categoria__horasManana, "manana")

//TARDE
const contenedor__categoria__horasTarde = document.querySelector(".contenedor__categoria__horas--tarde");
crearHoras(11, 50, 24, contenedor__categoria__horasTarde, "tarde")

//NOCHE
const contenedor__categoria__horasNoche = document.querySelector(".contenedor__categoria__horas--noche");
crearHoras(3, 50, 19, contenedor__categoria__horasNoche, "noche")



/*------ FUNCIONALIDAD MENU --------------*/

const array_contenedores = document.querySelectorAll(".contenedor__categoria__horas");
const array_menuItems = document.querySelectorAll(".horas__categoria__titulo")

contenedor__categoria__horasTarde.style.display = "none"
contenedor__categoria__horasNoche.style.display = "none"

function cambiarHorario(horario){

    for(var i = 0; i<array_contenedores.length; i++){

            array_contenedores[i].style.display = "none"
            array_menuItems[i].classList.remove("horas__categoria__titulo--active")

            var horario_seleccionado = document.querySelector(".contenedor__categoria__horas--"+horario)
            var menu_seleccionado = document.querySelector(".horas__categoria__titulo--"+horario)

            horario_seleccionado.style.display = "flex"
            menu_seleccionado.classList.add("horas__categoria__titulo--active")
    }

}


// FUNCIONES

function crearHoras(horaInicio, minutosInicio, iteraciones, contenedor, horario){

    for(var i = 0; i < iteraciones; i++){

        if(minutosInicio+10 >= 60){

            if(horaInicio+1 > 12){
                horaInicio = 0;
            }

            horaInicio++;
            minutosInicio = minutosInicio-60+10

        }else{
            minutosInicio = minutosInicio+10
        }
        
        /*---------------------------------*/
        
        if(minutosInicio == 0){
            
            minutosInicio_Codificado = "00"
    
        }else{
            minutosInicio_Codificado = minutosInicio
        }

        /*---------------------------------*/

        if(horario == "manana"){
            var complemento = " am"
        }else{
            complemento = " pm"
        }
    
        var hora = horaInicio + ":" + minutosInicio_Codificado + complemento
       
        /*------------------------------*/

        if(horario == "tarde"){
            var id = i+30
        }else if(horario == "noche"){
            id = i+54
        }else{
            id = i
        }

        /*---------------------------------*/
    
        var contenedor_hora = document.createElement("div");
            contenedor_hora.classList.add("hora__item");
            contenedor_hora.innerHTML = hora;
            contenedor_hora.setAttribute("onclick", "seleccionarHora('"+ hora +"'," + id + ")")

    
        contenedor.appendChild(contenedor_hora)
    
    }

}

/*-------- FUNCIONALIDAD CLICK ---------------*/

const items_hora = document.querySelectorAll(".hora__item")


function seleccionarHora(hora, id){


    for(var i = 0; i< items_hora.length; i++){
        items_hora[i].style.backgroundColor = "transparent"
    }

    items_hora[id].style.backgroundColor = "#00a859"

    date__seleccionada+= " __ " + hora;

    selecciona_hora = true;

   
    input__date.value = date__seleccionada;
    
  
    
    

}


