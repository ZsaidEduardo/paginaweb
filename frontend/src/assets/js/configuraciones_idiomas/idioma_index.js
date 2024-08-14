if(localStorage.getItem("idioma") == "espanol"){
    document.title = "Inicio | SpraYL"
}else{
    document.title = "Home | SpraYL"
}


/*-////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////- DESCRIPCION ///////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////*/

var parrafoDescripcion = document.querySelectorAll(".descripcion__parrafo")
var parrafoIngles_Descripcion = "At SpraYL, we're just a click away from helping you maintain your daily routine. You choose the location and we come to you, offering high-quality detailing services. Keep your vehicle in top condition without interrupting your day.";
var parrafoEspanol_Descripcion = "En SpraYL, estamos a solo un clic de ayudarte a mantener tu rutina diaria. Tú eliges la ubicación y nosotros vamos a ti, ofreciendo servicios de detallado de alta calidad. Mantén tu vehículo en óptimas condiciones sin interrumpir tu día."


recorrerIdioma(parrafoEspanol_Descripcion, parrafoIngles_Descripcion, parrafoDescripcion)

/*-------------*/

var campoEstadistica = document.querySelectorAll(".estadistica__descripcion")
var idiomaIngles_Estadistica_Descripcion = [
    "Years of service", "Service Quantity", "Gallons of water used", "Gallons of water saved"
]
var idiomaEspanol_Estadistica__Descripcion = [
    "Años de servicio", "CANTIDAD Servicio", "Galones de agua utilizados", "Galones de agua ahorrados"
]


recorrerIdioma(idiomaEspanol_Estadistica__Descripcion, idiomaIngles_Estadistica_Descripcion, campoEstadistica)

/*-------------*/

var camposItems_Descripcion = document.querySelectorAll(".descripcion__item__parrafo")

var idiomaIngles_Item_Descripcion = [
    "At SpraYL, we pride ourselves on offering a completely mobile service. No matter where you are, our team will come to your location to detail your vehicle. The customer chooses the location, and we don't charge extra for the trip. Whether it's your home, your office, or any location you choose, we come to you to offer maximum convenience and quality without you having to move. Relax and let SpraYL take care of everything!",
    "At SpraYL, we offer a full range of services, from full detailing to simple maintenance. No matter the size of the job, we always guarantee excellent prices compared to the market. Our maintenance services are fast and efficient, and we always offer a satisfaction guarantee until the customer is 100% satisfied.",
    "At SpraYL, we pride ourselves on providing exceptional customer service. You can reach us via phone or text, and our response is almost immediate. We are here to answer your questions, schedule services, and make sure you have a smooth experience every time. Your satisfaction is our priority, and we are available to assist you with whatever you need."
]
var idiomaEspanol_Item__Descripcion = [
    "En SpraYL, nos enorgullece ofrecer un servicio completamente móvil. No importa dónde te encuentres, nuestro equipo irá a tu ubicación para detallar tu vehículo. El cliente elige el lugar, y no cobramos nada extra por el desplazamiento. Ya sea en tu hogar, tu oficina, o cualquier lugar que elijas, nosotros vamos a ti para ofrecer la máxima comodidad y calidad sin que tengas que moverte. ¡Relájate y deja que SpraYL se encargue de todo!",
    "En SpraYL, ofrecemos una gama completa de servicios, desde un detallado completo hasta un mantenimiento simple. No importa el tamaño del trabajo, siempre garantizamos excelentes precios en comparación con el mercado. Nuestros servicios de mantenimiento son rápidos y eficientes, y siempre ofrecemos una garantía de satisfacción hasta que el cliente esté 100% satisfecho.",
    "En SpraYL, nos enorgullecemos de ofrecer un servicio al cliente excepcional. Puedes contactarnos a través de llamadas o mensajes, y nuestra respuesta es casi inmediata. Estamos aquí para responder tus preguntas, programar servicios y asegurarnos de que tengas una experiencia fluida cada vez. Tu satisfacción es nuestra prioridad, y estamos disponibles para asistirte con lo que necesites."
]

recorrerIdioma(idiomaEspanol_Item__Descripcion, idiomaIngles_Item_Descripcion, camposItems_Descripcion)


/*-////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////- SERVICIOS ///////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////*/

var titulo_Servicios = document.querySelectorAll(".servicios_section__titulo")
var camposServicos_titulo = document.querySelectorAll(".servicio__titulo")
var camposServicios_parrafo = document.querySelectorAll(".servicio__parrafo")

var tituloEspanol_Servicios = "Servicios"
var tituloIngles_Servicios = "Services"

recorrerIdioma(tituloEspanol_Servicios, tituloIngles_Servicios, titulo_Servicios)

/*-------------*/

var idiomaEspanol_titulos_Servicios = [
    "Interior Details", "Exterior Details"
]


var idiomaIngles_titulos_Servicios = [
    "Interior Details", "Exterior Details"
]

recorrerIdioma(idiomaEspanol_titulos_Servicios, idiomaIngles_titulos_Servicios, camposServicos_titulo)

/*-------------*/

var idiomaEspanol_parrafos_Servicios = [
    "Nuestros servicios interiores se encargan de mantener el interior de tu coche impecable y acogedor. Ofrecemos una limpieza completa con aspiradora para eliminar la suciedad y los residuos de todas las superficies, desempolvado para que cada rincón esté libre de polvo, y limpieza del parabrisas para que tu visión sea completamente clara. También limpiamos todas las ventanas para mejorar la visibilidad y la apariencia general. Por último, añadimos una fragancia agradable para que tu coche huela fresco y limpio. Cada servicio está pensado para mejorar tu experiencia de conducción y mantener el interior en perfecto estado.", 
    "Nuestros servicios exteriores aseguran que tu coche luzca lo mejor posible desde cualquier ángulo. Ofrecemos un lavado con cera líquida que no solo limpia, sino que también añade un brillo protector. La limpieza del parabrisas garantiza una visibilidad clara, y eliminamos meticulosamente los insectos para mantener un acabado impecable. Además, limpiamos las llantas para que brillen y aplicamos un producto para neumáticos que les da un acabado pulido. Cada servicio está diseñado para realzar la apariencia de tu coche y asegurarse de que se mantenga"
]

var idiomaIngles_parrafos_Servicios = [
    "Our interior services take care of keeping the inside of your car spotless and inviting. We offer a thorough vacuuming to remove dirt and debris from all surfaces, dusting to make every corner dust-free, and windshield cleaning to make your vision completely clear. We also clean all windows to improve visibility and overall appearance. Lastly, we add a pleasant fragrance to make your car smell fresh and clean. Each service is designed to enhance your driving experience and keep the interior in tip-top shape.",
    "Our exterior services ensure your car looks its best from every angle. We offer a liquid wax wash that not only cleans, but also adds a protective shine. Windshield cleaning ensures clear visibility, and we meticulously remove bugs to maintain a flawless finish. Additionally, we clean the rims to make them shine and apply a tire product that gives them a polished finish. Each service is designed to enhance your car's appearance and ensure it stays looking its best."
]

recorrerIdioma(idiomaEspanol_parrafos_Servicios, idiomaIngles_parrafos_Servicios, camposServicios_parrafo)


/*-////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////- GALERIA ///////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////*/

var titulo_galeria = document.querySelectorAll(".galeria__section__titulo")
var idiomaEspanol_galeriaTitulo = "Galería"
var idiomaIngles_galeriaTitulo = "Gallery"

recorrerIdioma(idiomaEspanol_galeriaTitulo, idiomaIngles_galeriaTitulo, titulo_galeria)

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

