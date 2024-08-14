if(localStorage.getItem("idioma") == "espanol"){
    document.title = "Únete | SpraYL"
}else{
    document.title = "Join Up | SpraYL"
}


/*-////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////- PORTADA ///////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////*/

var portada_titulo = document.querySelectorAll(".portada__titulo");
var portada_subtitulo = document.querySelectorAll(".portada__subtitulo")
var portada_button = document.querySelectorAll(".portada__button")

var idiomaEspanol_portadaTitulo = "Trabaja cuando quieras y genera las ganancias que necesites"
var idiomaEspanol_portadaSubtitulo = "Administra tu propio tiempo y genera ganancias."
var idiomaEspanol_portadaButton = "Comenzar"

var idiomaIngles_portadaTitulo = "Work when you want and generate the profits you need"
var idiomaIngles_portadaSubtitulo = "Manage your own time and generate profits."
var idiomaIngles_portadaButton = "To Start"

recorrerIdioma(idiomaEspanol_portadaTitulo, idiomaIngles_portadaTitulo, portada_titulo)
recorrerIdioma(idiomaEspanol_portadaSubtitulo, idiomaIngles_portadaSubtitulo, portada_subtitulo)
recorrerIdioma(idiomaEspanol_portadaButton, idiomaIngles_portadaButton, portada_button)

/*-////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////- GANANCIA ///////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////*/

var ganancia_titulo = document.querySelectorAll(".ganancia__titulo");
var ganancia_subtitulo = document.querySelectorAll(".ganancia__subtitulo");

var idiomaEspanol_gananciaTitulo = "Gana <span>$</span>33.75 por hora con <span>Spra</span>YL en Panama City"
var idiomaIngles_gananciaTitulo = "Earn <span>$</span>33.75 per hour with <span>Spra</span>YL in Panama City"

recorrerIdioma(idiomaEspanol_gananciaTitulo, idiomaIngles_gananciaTitulo, ganancia_titulo)

var idiomaEspanol_gananciaSubtitulo = '"Trabaja en la plataforma con más clientes activos – ¡Únete a SpraYL y maximiza tus ingresos!"'
var idiomaIngles_gananciaSubtitulo = '"Work on the platform with the most active clients – Join SpraYL and maximize your income!"'


recorrerIdioma(idiomaEspanol_gananciaSubtitulo, idiomaIngles_gananciaSubtitulo, ganancia_subtitulo)


/*-////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////- DESCRIPCION ///////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////*/

var descripcion_titulos = document.querySelectorAll(".descripcion__titulo")

var idiomaEspanol_descripcion_titulos = [
    "Una alternativa a los trabajos tradicionales de limpieza de carros",
    "Rentas y Financiamiento de Equipos con <span>Spra</span>YL"
]
var idiomaIngles_descripcion_titulos = [
    "An alternative to traditional car cleaning jobs",
    "Equipment Rentals and Financing with <span>Spra</span>YL"
]


recorrerIdioma(idiomaEspanol_descripcion_titulos, idiomaIngles_descripcion_titulos, descripcion_titulos)

/*-----------*/
var descripcion_parrafos = document.querySelectorAll(".descripcion__parrafo")
var idiomaEspanol_descripcion_parrafos = [
    "Alternativa a los Trabajos Tradicionales de Limpieza de Carros, unete a SpraYL que ofrece una oportunidad única para generar ingresos de manera flexible. Es una excelente alternativa a los trabajos tradicionales de limpieza de carros, trabajos a tiempo parcial, trabajos temporales o empleos estacionales. Ya sea que busques una opción a tiempo completo o a tiempo parcial, o si deseas complementar tus ingresos actuales, convertirte en un socio de SpraYL puede ser la solución ideal.", 
    "¿Por Qué Elegir SpraYL? <br> En SpraYL, creemos que tu trabajo debe adaptarse a tu vida, no al revés. Ofrecemos una alternativa innovadora a los trabajos tradicionales de limpieza de carros, permitiéndote establecer tu propio horario y trabajar de manera independiente. Ya seas un detallador de autos experimentado o alguien que busca una nueva oportunidad, SpraYL te brinda las herramientas y el soporte necesarios para tener éxito.", 
    "Rentas de Equipos", 
    "Costo de Renta Semanal: Por solo $150 por semana, puedes rentar un kit de trabajo completo que incluye todo lo necesario para ofrecer servicios de detailing de alta calidad.", 
    "Incluye Seguro y Mantenimiento : Nuestras rentas de equipos incluyen seguro y mantenimiento básico, asegurando que siempre tengas las herramientas en perfectas condiciones para realizar tu trabajo.", 
    "Opciones de Renta Flexible: Ofrecemos diferentes opciones de renta que se adaptan a tus necesidades,",
    "Financiamiento de Equipos", 
    "Opciones de Financiamiento: Si prefieres comprar tu propio kit de trabajo, ofrecemos opciones de financiamiento accesibles. Puedes pagar tu equipo en cuotas cómodas que se ajusten a tu presupuesto.", 
    "Propiedad del Equipo: Al finalizar el período de financiamiento, el equipo será completamente tuyo, permitiéndote maximizar tus ganancias.",
    "Garantía Incluida: Todos nuestros equipos financiados vienen con una garantía, asegurando que recibas soporte y reemplazo de equipos en caso de cualquier fallo durante el período de financiamiento."
]

var idiomaIngles_descripcion_parrafos = [
    "Alternative to Traditional Car Cleaning Jobs, join SpraYL which offers a unique opportunity to generate income in a flexible way. It is a great alternative to traditional car cleaning jobs, part-time jobs, temporary jobs or seasonal employment. Whether you are looking for a full-time or part-time option, or if you want to supplement your current income, becoming a SpraYL partner can be the ideal solution.", 
    "Why Choose SpraYL? <br> At SpraYL, we believe that your job should fit around your life, not the other way around. We offer an innovative alternative to traditional car detailing jobs, allowing you to set your own schedule and work independently. Whether you're an experienced car detailer or someone looking for a new opportunity, SpraYL gives you the tools and support you need to succeed.", 
    "Equipment Rentals", 
    "Weekly Rental Cost: For just $150 per week, you can rent a complete work kit that includes everything you need to offer high-quality detailing services.", 
    "Insurance and Maintenance Included: Our equipment rentals include insurance and basic maintenance, ensuring that you always have the tools in perfect condition to get the job done.", 
    "Flexible Rental Options: We offer different rental options to suit your needs.",
    "Equipment Financing", 
    "Financing Options: If you prefer to purchase your own work kit, we offer affordable financing options. You can pay for your equipment in comfortable installments that fit your budget.", 
    "Equipment Ownership: At the end of the financing period, the equipment will be completely yours, allowing you to maximize your profits.",
    "Warranty Included: All of our financed equipment comes with a warranty, ensuring that you receive support and equipment replacement in case of any failure during the financing period."
]

recorrerIdioma(idiomaEspanol_descripcion_parrafos, idiomaIngles_descripcion_parrafos, descripcion_parrafos)


/*-////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////- BENEFICIOS ///////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////*/

var beneficios_titulo = document.querySelectorAll(".beneficios__section_titulo")

var idiomaEspanol_beneficioTitulo = "¿Cuál es el beneficio de ser un socio de la App de <span>Spra</span>YL?"
var idiomaIngles_beneficioTitulo = "What is the benefit of being a <span>Spra</span>YL App partner?"

recorrerIdioma(idiomaEspanol_beneficioTitulo, idiomaIngles_beneficioTitulo, beneficios_titulo)

/*--------------*/

var items_titulo_beneficio = document.querySelectorAll(".beneficio__item__titulo");
var items_parrafo_beneficio = document.querySelectorAll(".beneficio__item__descripcion")

var idiomaEspanol_item_TituloBeneficio = [
    "Administra tu propio tiempo",
    "Obtén tus ganancias rápidamente",
    "Obtén soporte a cada paso"
]

var idiomaIngles_item_TituloBeneficio = [
    "Manage your own time",
    "Get your profits quickly",
    "Get support every step of the way"
]

recorrerIdioma(idiomaEspanol_item_TituloBeneficio, idiomaIngles_item_TituloBeneficio, items_titulo_beneficio)

var idiomaEspanol_item_SubtituloBeneficio = [
    "Algunas oportunidades de trabajo puedenincluir largas horas y horarios rígidos. Si te conviertes en socio de la App de SpraYL, tú decides cuándo y con qué frecuencia trabajar.",
    "Cuando obtienes ganancias por usar la app de SpraYL, estas se transfieren de manera automática a tu cuenta bancaria cada semana.",
    "Si tienes preguntas, puedes contactarnos en cualquier momento, en línea o en la app. Consulta sobre la verificación de antecedentes, las promociones semanales, cómo recibir tus ganancias y mucho más."
]

var idiomaIngles_item_SubtituloBeneficio = [
    "Some job opportunities may include long hours and rigid schedules. If you become a SpraYL App Partner, you decide when and how often you work.",
    "When you earn money from using the SpraYL app, it is automatically transferred to your bank account every week.",
    "If you have questions, you can contact us at any time, online or in the app. Ask about background checks, weekly promotions, how to receive your earnings, and much more."
]

recorrerIdioma(idiomaEspanol_item_SubtituloBeneficio, idiomaIngles_item_SubtituloBeneficio, items_parrafo_beneficio)


/*-////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////- GENERA ///////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////*/

var genera_titulo = document.querySelectorAll(".genera__titulo")

var idiomaEspanol_generaTitulo = "Genera ganancias como <span>Spra</span>YLer";
var idiomaIngles_generaTitulo = "Earn money as a <span>Spra</span>YLer";

recorrerIdioma(idiomaEspanol_generaTitulo, idiomaIngles_generaTitulo, genera_titulo)

/*---------*/

var genera__item__subtitulo = document.querySelectorAll(".genera__subtitulo")

var idiomaEspanol_genera__itemSubtitulo = [
    "Genera ganancias a cualquier hora y en cualquier lugar",
    "¿No tienes equipo para generear ganancias?"
]
var idiomaIngles_genera__itemSubtitulo = [
    "Generate profits anytime, anywhere",
    "Don't have the equipment to generate profits?"
]

recorrerIdioma(idiomaEspanol_genera__itemSubtitulo, idiomaIngles_genera__itemSubtitulo, genera__item__subtitulo)

var genera__item__parrafo = document.querySelectorAll(".genera__parrafo")

var idiomaEspanol_genera__itemParrafo = [
    "Ya sea que quieras trabajar unas horas de vez en cuando o que seas un usuario frecuente de la app para socios de SpraYL, podrás adaptarte a lo que más te importa gracias a SpraYL. Trabaja a cualquier hora, cualquier día de la semana. Las funciones de la app te ayudarán a encontrar clientes en tiempo real y recibir alertas sobre las oportunidades para generar ganancias cerca de ti.",
    "No hay problema. Si quieres convertirte en socio de SpraYL pero necesitas un kit de trabajo, revisa la selección de nuestros socios. Puedes encontrar un kit asequible por semana o por períodos más largos. Estos kits vienen con seguro, mantenimiento básico y más. Las opciones y las tarifas más bajas disponibles varían según la ciudad."
]

var idiomaIngles_genera__itemParrafo = [
    "Whether you want to work a few hours here and there or you're a frequent user of the SpraYL Partner App, you can work on what matters most to you with SpraYL. Work at any time, any day of the week. The app's features help you find clients in real time and receive alerts about earning opportunities near you.",
    "No problem. If you want to become a SpraYL partner but need a work kit, check out our partner selection. You can find an affordable kit for a week or longer periods. These kits come with insurance, basic maintenance, and more. Options and lowest rates available vary by city."
]

recorrerIdioma(idiomaEspanol_genera__itemParrafo, idiomaIngles_genera__itemParrafo, genera__item__parrafo)



/*-////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////- REQUISITOS ///////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////*/

var requisitos_titulo = document.querySelectorAll(".requisitos__section_titulo")

var idiomaEspanol_requisitosTitulo = "Esto es lo que necesitas para convertirte en socio de <span>Spra</span>YL"
var idiomaIngles_requisitosTitulo = "Here's what you need to become a <span>Spra</span>YL partner"

recorrerIdioma(idiomaEspanol_requisitosTitulo, idiomaIngles_requisitosTitulo, requisitos_titulo)

/*---------------------*/

var requisito_item_titulo = document.querySelectorAll(".requisito__item__titulo")
var idiomaEspanol_requisito_itemTitulo = [
    "Requisitos",
    "Documentos", 
    "Proceso de Registro"
]
var idiomaIngles_requisito_itemTitulo = [
    "Requirements",
    "Documents", 
    "Registration Process"
]

recorrerIdioma(idiomaEspanol_requisito_itemTitulo, idiomaIngles_requisito_itemTitulo, requisito_item_titulo)

/*---------------------*/

var requisito_lista_item = document.querySelectorAll(".requisito__lista__item")
var idiomaEspanol_requisito_listaItem = [
    "Debes tener la edad mínima  requerida para conducir en tu ciudad.", 
    "Debes aprobar una verificación de antecedentes.", 
    "Licencia de conducir vigente", 
    "Comprobante de residencia en tu ciudad, estado o provincia", 
    "Tener seguro de su vehiculo", 
    "Envía los documentos y la foto", 
    "Proporciona la información necesaria para la verificación de antecedentes"
]

var idiomaIngles_requisito_listaItem = [
    "You must be the minimum age required to drive in your city.", 
    "You must pass a background check.", 
    "Valid driver's license", 
    "Proof of residency in your city, state or province", 
    "Have insurance on your vehicle", 
    "Send the documents and the photo", 
    "Provides the necessary information for background checks"
]

recorrerIdioma(idiomaEspanol_requisito_listaItem, idiomaIngles_requisito_listaItem , requisito_lista_item )


/*-////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////- SEGURIDAD ///////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////*/

var seguridad_titulo = document.querySelectorAll(".seguridad__section_titulo")
var seguridad_subtitulo = document.querySelectorAll(".seguridad__section_subtitulo")

var idiomaEspanol_seguridadTitulo = "Seguridad en el camino"
var idiomaIngles_seguridadTitulo = "Safety on the road"

var idiomaEspanol_seguridadSubtitulo = "Nos comprometemos a llevar su seguridad a un nivel superior."
var idiomaIngles_seguridadSubtitulo = "We are committed to taking your security to the next level."


recorrerIdioma(idiomaEspanol_seguridadTitulo, idiomaIngles_seguridadTitulo, seguridad_titulo)
recorrerIdioma(idiomaEspanol_seguridadSubtitulo, idiomaIngles_seguridadSubtitulo, seguridad_subtitulo)

/*---------------------*/

var seguridad_item_titulo = document.querySelectorAll(".seguridad__item__titulo")
var idiomaEspanol_seguridad_itemTitulo = [
    "Recibes ayuda cuando la necesitas",
    "Soporte Continuo", 
]
var idiomaIngles_seguridad_itemTitulo = [
    "You get help when you need it",
    "Continuous support  ", 
]


recorrerIdioma(idiomaEspanol_seguridad_itemTitulo, idiomaIngles_seguridad_itemTitulo, seguridad_item_titulo )

/*---------------------*/

var seguridad_item_descripcion = document.querySelectorAll(".seguridad__item__descripcion")

var idiomaEspanol_seguridad_itemParrafo = [
    "Con el botón de emergencias llamas al 911. La app mostrará los detalles de tu viaje para que puedas compartirlo rápidamente con las autoridades.",
    "Ofrecemos asistencia constante durante la jornada laboral de los Spraylers, resolviendo problemas con clientes, incidencias en la carretera y otras situaciones. Nuestro equipo de soporte está siempre disponible para brindar ayuda rápida y efectiva."

]

var idiomaIngles_rseguridad_itemParrafo= [
    "With the emergency button you call 911. The app will show the details of your trip so you can quickly share it with the authorities.",
    "We offer constant assistance during the Spraylers' working day, resolving customer issues, roadside incidents and other situations. Our support team is always available to provide quick and effective help."
    
]


recorrerIdioma(idiomaEspanol_seguridad_itemParrafo, idiomaIngles_rseguridad_itemParrafo, seguridad_item_descripcion)



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
