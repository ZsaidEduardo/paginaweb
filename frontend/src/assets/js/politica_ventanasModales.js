const ventanaModal = document.querySelector(".contenedor__ventanaModal__politicas")
var links = document.querySelectorAll(".booking__politica__link")
var contenedor__politica = document.querySelectorAll(".contenedor__politica")

for(var i =0; i<links.length; i++){

    var id = links[i].id
    
    links[i].setAttribute("onclick", "abrirVentanaModal('"+id+"')")

}


function abrirVentanaModal(politica_id){

    for(var i =0; i<contenedor__politica.length; i++){
        contenedor__politica[i].style.display = "none"
    }

    ventanaModal.style.display = "block"

    var politica = document.getElementById("contenedor_politica_"+politica_id)


    politica.style.display = "block"
}


function cerrarVentanaModal(){

    ventanaModal.style.display = "none"


}
