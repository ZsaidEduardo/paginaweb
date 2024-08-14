if(localStorage.getItem("idioma") == "espanol"){
    document.title = "Sobre Nosotros | SpraYL"
}else{
    document.title = "About Us | SpraYL"
}


/*-////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////- BIENVENIDA ///////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////*/

var titulo_bienvenidad = document.querySelectorAll(".bienvenida__titulo")
var idiomaEspanol_tituloBienvenida = "¿Quiénes Somos?"
var idiomaIngles_tituloBienvenida = "About us"

recorrerIdioma(idiomaEspanol_tituloBienvenida, idiomaIngles_tituloBienvenida, titulo_bienvenidad)

/*--------------------------*/

var parrafo_bienvenida = document.querySelectorAll(".bienvenida__parrafo")
var idiomaEspanol_parrafosBienvenida = [
    "Bienvenido a SpraYL, una empresa con más de 2 años de experiencia en el detailing de vehículos, comprometida a brindar servicios de la más alta calidad a nuestros clientes. Fundada en 2023, SpraYL ha crecido con la misión de cuidar no solo los vehículos de nuestros clientes sino también el medio ambiente. Nos enorgullecemos de ofrecer una amplia gama de servicios diseñados para mantener la apariencia y el valor de su vehículo, tratando cada automóvil como si fuera nuestro.",
    "En SpraYL, entendemos que su automóvil es más que un medio de transporte; es una inversión y un reflejo de su personalidad. Es por eso que nos esforzamos por brindar un excelente servicio al cliente junto con nuestros detalles de primer nivel. Desde el momento en que se comunique con nosotros, recibirá atención y un compromiso con la excelencia que no encontrará en ningún otro lugar. Ofrecemos servicios que van desde detalles interiores y exteriores hasta mantenimiento y mucho más."
]

var idiomaIngles_parrafosBienvenida = [
    "Welcome to SpraYL, a company with over 2 years of experience in vehicle detailing, committed to providing the highest quality services to our customers. Founded in 2023, SpraYL has grown with a mission to care for not only our customers' vehicles but also the environment. We pride ourselves on offering a wide range of services designed to maintain the appearance and value of your vehicle, treating each car as if it were our own.",
    "At SpraYL, we understand that your car is more than just a means of transportation; it's an investment and a reflection of your personality. That's why we strive to provide excellent customer service along with our top-notch detailing. From the moment you contact us, you'll receive care and a commitment to excellence that you won't find anywhere else. We offer services ranging from interior and exterior detailing to maintenance and much more."
]

recorrerIdioma(idiomaEspanol_parrafosBienvenida, idiomaIngles_parrafosBienvenida, parrafo_bienvenida)

/*-////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////- WHY SPRAYL ///////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////*/

var whysprayl_titulo = document.querySelectorAll(".whysprayl__titulo");
var idiomaEspanol_tituloWhySprayl = "<span>¿Por</span> qué <span>Spra</span>YL?"
var idiomaIngles_tituloWhySprayl = "W<span>h</span>y Spra<span>YL</span>?"

recorrerIdioma(idiomaEspanol_tituloWhySprayl, idiomaIngles_tituloWhySprayl, whysprayl_titulo)

/*----------------------*/

var whysprayl_parrafo = document.querySelectorAll(".whysprayl__parrafo");
var idiomaEspanol_parrafoWhySprayl = "SpraYL ofrece importantes ventajas a sus suscriptores, ya que les permite solicitar servicios de detailing al instante a través de nuestra aplicación, sin necesidad de agendar una cita previamente. Ya sea que estés en casa, en el trabajo o incluso en un centro comercial, puedes solicitar nuestro servicio cuando lo necesites. Mientras haces tus compras, un Sprayler puede limpiar tu auto, lo que te brinda una comodidad y flexibilidad incomparables. Esta característica permite a nuestros clientes mantener sus vehículos impecables sin interrumpir su rutina diaria, maximizando su tiempo y garantizando un servicio de alta calidad en cualquier lugar."
var idiomaIngles_parrafoWhySprayl = "SpraYL offers significant benefits to its subscribers, allowing them to request detailing services instantly through our app, without the need to schedule an appointment in advance. Whether you are at home, at work, or even at a shopping mall, you can request our service whenever you need it. While you shop, a Sprayler can clean your car, giving you unparalleled convenience and flexibility. This feature allows our customers to keep their vehicles spotless without interrupting their daily routine, maximizing their time and ensuring high-quality service anywhere."

recorrerIdioma(idiomaEspanol_parrafoWhySprayl, idiomaIngles_parrafoWhySprayl, whysprayl_parrafo)

/*-////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////- DESCRIPCIONES ///////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////*/

var descripcion_aboutUs_parrafo = document.querySelectorAll(".descripcion__parrafo");

var idiomaEspanol_aboutUs_descripcionParrafo = [
    "En SpraYL, creemos que un excelente servicio al cliente es tan importante como un trabajo de detalle de primera calidad. Nuestro servicio al cliente está disponible durante toda la jornada laboral, lo que garantiza respuestas casi inmediatas a las llamadas y mensajes para resolver cualquier consulta o necesidad. La satisfacción del cliente es nuestra máxima prioridad. Garantizamos que si no está completamente satisfecho con nuestro servicio, haremos todo lo posible para solucionarlo. Esto es lo que nos distingue de la competencia, junto con nuestros precios competitivos y una calidad de trabajo inigualable. Los testimonios de nuestros clientes reflejan la dedicación y el cuidado que ponemos en cada trabajo.",
    "SpraYL genera numerosas oportunidades de empleo para sus pulverizadores, ofreciendo horarios de trabajo flexibles, salarios competitivos y un entorno de trabajo propicio. Nuestra plataforma permite a las personas unirse a nuestro equipo y disfrutar de la libertad de elegir su horario de trabajo, lo que la convierte en una opción ideal para quienes buscan empleo a tiempo parcial o completo. Los pulverizadores reciben una formación integral, acceso a herramientas de limpieza de alta calidad y la oportunidad de desarrollar una carrera gratificante en la industria de limpieza de automóviles. En SpraYL, valoramos a nuestros empleados y brindamos apoyo continuo para ayudarlos a tener éxito y crecer dentro de la empresa.",
    "En SpraYL, nuestro compromiso con el medio ambiente es primordial. Priorizamos la sostenibilidad en todos los aspectos de nuestras operaciones, desde la conservación del agua hasta el uso de productos biodegradables que minimizan el impacto ambiental. Nuestras prácticas ecológicas garantizan que no solo brindamos servicios de limpieza excepcionales, sino que también contribuimos a la preservación de nuestro planeta. Nos dedicamos a reducir nuestra huella de carbono y a promover soluciones ecológicas, lo que refleja nuestra creencia de que cuidar el medio ambiente es tan importante como cuidar su vehículo."
]

var idiomaIngles_aboutUs_descripcionParrafo = [
    "At SpraYL, we believe that excellent customer service is just as important as top-quality detailing work. Our customer service is available around the clock, ensuring almost immediate responses to calls and messages to resolve any queries or needs. Customer satisfaction is our top priority. We guarantee that if you are not completely satisfied with our service, we will do everything we can to make it right. This is what sets us apart from the competition, along with our competitive pricing and unmatched quality of work. Our customer testimonials reflect the dedication and care we put into every job.",
    "SpraYL creates numerous employment opportunities for its sprayers, offering flexible work schedules, competitive salaries, and a supportive work environment. Our platform allows individuals to join our team and enjoy the freedom to choose their work schedule, making it an ideal choice for those seeking part-time or full-time employment. Sprayers receive comprehensive training, access to high-quality cleaning tools, and the opportunity to develop a rewarding career in the car cleaning industry. At SpraYL, we value our employees and provide ongoing support to help them succeed and grow within the company.",
    "At SpraYL, our commitment to the environment is paramount. We prioritize sustainability in every aspect of our operations, from water conservation to the use of biodegradable products that minimize environmental impact. Our eco-friendly practices ensure that we not only provide exceptional cleaning services, but also contribute to the preservation of our planet. We are dedicated to reducing our carbon footprint and promoting eco-friendly solutions, reflecting our belief that caring for the environment is just as important as caring for your vehicle."
]

recorrerIdioma(idiomaEspanol_aboutUs_descripcionParrafo, idiomaIngles_aboutUs_descripcionParrafo, descripcion_aboutUs_parrafo)




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

