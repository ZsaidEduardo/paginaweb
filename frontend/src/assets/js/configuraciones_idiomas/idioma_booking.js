if(localStorage.getItem("idioma") == "espanol"){
    document.title = "BookingModel | SpraYL"
}else{
    document.title = "BookingModel | SpraYL"
}

/*-////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////- HEADER BOOKING ///////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////*/

var booking_states_names = document.querySelectorAll(".booking__state__name")

var idiomaEspanol_headerbooking = [
    "Tu Carro", "Extras", "Fecha y Hora", "Detalles", "Resumen"
]

var idiomaIngles_headerbooking = [
    "Your Car", "Extras", "Date and Time", "Details", "Summary"
]

recorrerIdioma(idiomaEspanol_headerbooking, idiomaIngles_headerbooking, booking_states_names)

/*-////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////- BOOK ///////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////*/

var booking__form__titulo = document.querySelectorAll(".booking__form__titulo")

var idiomaEspanol_booking_formTitulo = [
    "Selecciona tu carro",
    "Detalles",
]

var idiomaIngles_booking_formTitulo = [
    "Select your car",
    "Details",
]

recorrerIdioma(idiomaEspanol_booking_formTitulo, idiomaIngles_booking_formTitulo, booking__form__titulo)

/* TODOS LOS LABELS */

var booking_form_labels = document.querySelectorAll(".booking__form__label");


var idiomaEspanol_booking_formLabel = [
    "Marca", "Modelo", "Año", "Color",
    "Nombre", "Apellido", "Correo Electrónico",
    "Número de Telefono", "¿Dónde desea el servicio?",
    "Ciudad", "Estado", "Código Postal", "Alguna petición específica"
]

var idiomaIngles_booking_formLabel = [
    "Make", "Model", "Year", "Color",
    "Name", "Last Name", "Email",
    "Phone Number", "Where do you want the service?",
    "City", "State", "Zip Code", "Any specific request"
]

recorrerIdioma(idiomaEspanol_booking_formLabel, idiomaIngles_booking_formLabel, booking_form_labels)


/*----------------*/

var boton_siguiente_book = document.querySelectorAll(".booking__form__siguiente_button--1")
var idiomaEspanol_botonSiguiente_book = "Siguiente"
var idiomaIngles_botonSiguiente_book = "Next"

recorrerIdioma(idiomaEspanol_botonSiguiente_book, idiomaIngles_botonSiguiente_book, boton_siguiente_book)


/*-////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////- EXTRAS ///////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////*/

var desplegar_buton = document.querySelectorAll("summary")
var extra_agregar_buton = document.querySelectorAll(".booking__button--agregar")
var extra_quitar_buton = document.querySelectorAll(".booking__button--quitar")
var etiqueta_agregado = document.querySelectorAll(".extra__etiqueta_agregado")

for(var i = 0; i < desplegar_buton.length; i++){

    if(localStorage.getItem("idioma") == "espanol"){
        desplegar_buton[i].innerHTML = "Más información"
        extra_agregar_buton[i].innerHTML = "Agregar"
        extra_quitar_buton[i].innerHTML = "Quitar"
        etiqueta_agregado[i].innerHTML = "Agregado"
    }else{
        desplegar_buton[i].innerHTML = "More information"
        extra_agregar_buton[i].innerHTML = "Add"
        extra_quitar_buton[i].innerHTML = "Remove"
        etiqueta_agregado[i].innerHTML = "Incorporated"
    }

}

/*------------------*/

var extra_titulo = document.querySelectorAll(".booking__item__titulo");
var idiomaEspanol_extraTitulo = [
    "Tratamiento ArmorAll",
    "Cera de pasta",
    "Limpieza de motor",
    "Restauración de faros",
    "Lavado con champú",
    "Restauración de plásticos exteriores"
]

var idiomaIngles_extraTitulo = [
    "ArmorAll Treatment",
    "Paste Wax",
    "Engine bay",
    "Headlight restoration",
    "Shampooing",
    "Restoration of exterior plastics"
]

recorrerIdioma(idiomaEspanol_extraTitulo, idiomaIngles_extraTitulo, extra_titulo)

/*------------------*/

var extras_parrafos = document.querySelectorAll(".booking__extra__item__details p")

var idiomaEspanol_extraParrafo = [
    "El tratamiento ArmorAll es un servicio de limpieza y acondicionamiento de las superficies interiores del vehículo, incluidos plástico, vinilo y cuero. Este tratamiento elimina el polvo y la suciedad, restaura y protege contra los rayos UV y deja un acabado brillante y limpio. También puede incluir una fragancia fresca. Este servicio mejora la apariencia y extiende la vida útil del interior del vehículo.",
    "El servicio Pasta Wax consiste en aplicar cera en pasta a la carrocería del vehículo para brindar una protección duradera y un brillo profundo. Este tratamiento elimina pequeñas imperfecciones y protege la pintura de contaminantes y rayos UV. Se aplica manualmente con una almohadilla de tela, lo que garantiza una cobertura uniforme y un acabado profesional. Pasta Wax ofrece una mayor durabilidad y protección en comparación con las ceras líquidas, manteniendo la pintura del vehículo en óptimas condiciones durante un período más prolongado.",
    "El tratamiento del compartimiento del motor implica una limpieza y acondicionamiento exhaustivos del compartimiento del motor. Este servicio elimina la suciedad, la grasa y los residuos, dejando el motor impecable y bien cuidado. Se utilizan productos especializados para proteger los componentes del desgaste y la corrosión, mejorando la apariencia y la longevidad del motor. El tratamiento garantiza un aspecto limpio y profesional.",
    "La restauración de faros implica limpiar y pulir los faros del automóvil para eliminar la oxidación y la opacidad. Este servicio restaura la claridad, mejora el brillo y mejora la visibilidad durante la conducción nocturna. Se utilizan productos y herramientas especializados para lograr un acabado claro y como nuevo, protegiendo los faros de futuros daños. El resultado es una mayor seguridad y una apariencia renovada para su vehículo.",
    "El lavado con champú consiste en limpiar profundamente los asientos del automóvil con máquinas y limpiadores especializados. Este proceso elimina la suciedad, las manchas y los olores de la tela, dejando los asientos frescos y limpios. Las máquinas inyectan una solución limpiadora en la tela y luego extraen el agua sucia, lo que garantiza una limpieza profunda. Este servicio mejora la apariencia y la higiene del interior de su automóvil.",
    "Nuestro servicio de restauración de plásticos exteriores rejuvenece y protege las superficies plásticas de su vehículo. Con el tiempo, la exposición a los elementos puede desteñir y deteriorar los plásticos exteriores. aplicamos un restaurador de plásticos de alta calidad, devolviendo el color y el acabado originales. Este tratamiento no solo mejora el aspecto de su vehículo, si no tambien lo protege !"
]

var idiomaIngles_extraParrafo = [
    "ArmorAll Treatment is a cleaning and conditioning service for vehicle interior surfaces including plastic, vinyl and leather. This treatment removes dust and dirt, restores and protects against UV rays and leaves a shiny, clean finish. It may also include a fresh fragrance. This service improves the appearance and extends the life of the vehicle's interior.",
    "The Pasta Wax service involves applying paste wax to the car's body to provide long-lasting protection and a deep shine. This treatment removes minor imperfections and shields the paint from contaminants and UV rays. It is applied manually with a fabric pad, ensuring even coverage and a professional finish. Pasta Wax offers greater durability and protection compared to liquid waxes, keeping the car's paint in top condition for a longer period.",
    "Engine bay treatment involves a thorough cleaning and conditioning of the engine bay. This service removes dirt, grease and debris, leaving the engine spotless and well maintained. Specialized products are used to protect components from wear and corrosion, improving the appearance and longevity of the engine. The treatment ensures a clean and professional appearance.",
    "Headlight restoration involves cleaning and polishing your car's headlights to remove oxidation and cloudiness. This service restores clarity, improves brightness, and enhances visibility during nighttime driving. Specialized products and tools are used to achieve a clear, like-new finish, protecting your headlights from future damage. The result is increased safety and a refreshed look for your vehicle.",
    "Shampooing involves deep cleaning of car seats using specialized machines and cleaners. This process removes dirt, stains, and odors from the fabric, leaving the seats fresh and clean. The machines inject a cleaning solution into the fabric and then extract the dirty water, ensuring a deep clean. This service improves the appearance and hygiene of your car's interior.",
    "Our exterior plastic restoration service rejuvenates and protects the plastic surfaces of your vehicle. Over time, exposure to the elements can fade and deteriorate exterior plastics. We apply a high-quality plastic restorer, restoring the original color and finish. This treatment not only improves the look of your vehicle, but also protects it!"
]

recorrerIdioma(idiomaEspanol_extraParrafo, idiomaIngles_extraParrafo, extras_parrafos)

/*------------------*/

var boton_siguiente_extras = document.querySelectorAll(".booking__form__siguiente_button--2")
var idiomaEspanol_botonSiguiente_extras = "Siguiente"
var idiomaIngles_botonSiguiente_extras = "Next"

recorrerIdioma(idiomaEspanol_botonSiguiente_extras, idiomaIngles_botonSiguiente_extras, boton_siguiente_extras)



/*-////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////- FECHA Y HORA ///////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////*/

var fechaYHora_titulo = document.querySelectorAll(".horas__titulo")
var idiomaEspanol_tituloFechaYHora = "Seleccione la Hora"
var idiomaIngles_tituloFechaYHora = "Select Time"

recorrerIdioma(idiomaEspanol_tituloFechaYHora, idiomaIngles_tituloFechaYHora, fechaYHora_titulo)

/*-------------------*/
var fechaYHora_categoria_titulo = document.querySelectorAll(".horas__categoria__titulo")
var idiomaEspanol_tituloFechaYHora_categoria = [
    "Mañana", "Tarde", "Tarde-Noche"
]
var idiomaIngles_tituloFechaYHora_categoria = [
    "Morning", "Afternoon", "Evening"
]


recorrerIdioma(idiomaEspanol_tituloFechaYHora_categoria, idiomaIngles_tituloFechaYHora_categoria, fechaYHora_categoria_titulo)


/*------------------*/

var boton_siguiente_fechaYHora = document.querySelectorAll(".booking__form__siguiente_button--3")
var idiomaEspanol_botonSiguiente_fechaYHora = "Siguiente"
var idiomaIngles_botonSiguiente_fechaYHora = "Next"

recorrerIdioma(idiomaEspanol_botonSiguiente_fechaYHora, idiomaIngles_botonSiguiente_fechaYHora, boton_siguiente_fechaYHora)




/*-////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////- DETALLES ///////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////*/


var opciones_suciedad = document.querySelectorAll("#nivel_suciedad option")

var idiomaEspanol_opcionesSuciedad = [
    "Que tan sucio está tu carro",
    "Mantenimiento",
    "No está mal",
    "Sucio",
    "Muy Sucio",
    "Extremadamente sucio"
]

var idiomaIngles_opcionesSuciedad = [
    "How dirty is your car?",
    "Maintenance",
    "It is not too bad",
    "Dirty",
    "Very dirty",
    "Extremely dirty",
]

recorrerIdioma(idiomaEspanol_opcionesSuciedad, idiomaIngles_opcionesSuciedad, opciones_suciedad)

/*------------------*/

var label_politica = document.querySelectorAll(".booking__contenedor__checkbox label");

var idiomaEspanol_labelPolitica = [
    "Estoy de acuerdo con la <span class='booking__politica__link' id='dirty'>Dirt Charge Policy - SpraYL</span>",
    "Acepto la <span class='booking__politica__link' id='vehicle'>Vehicle Valuables Policy - SpraYL</span>",
    "Acepto la <span class='booking__politica__link' id='tos'>Tos - SpraYL</span> y <span class='booking__politica__link' id='privacy'>Privacy policy - SpraYL</span>",
]

var idiomaIngles_labelPolitica = [
    "I agree with the<span class='booking__politica__link' id='dirty'>Dirt Charge Policy - SpraYL</span>",
    "I accept <span class='booking__politica__link' id='vehicle'>Vehicle Valuables Policy - SpraYL</span>",
    "I accept <span class='booking__politica__link' id='tos'>Tos - SpraYL</span> y <span class='booking__politica__link' id='privacy'>Privacy policy - SpraYL</span>",
]

recorrerIdioma(idiomaEspanol_labelPolitica, idiomaIngles_labelPolitica, label_politica)

/*------------------*/

var boton_siguiente_detalles = document.querySelectorAll(".booking__form__siguiente_button--4")
var idiomaEspanol_botonSiguiente_detalles = "Confirmar"
var idiomaIngles_botonSiguiente_detalles = "Confirm"

recorrerIdioma(idiomaEspanol_botonSiguiente_detalles, idiomaIngles_botonSiguiente_detalles, boton_siguiente_detalles)


/*-////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////- POLITICAS ///////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////*/

var titulo_politica = document.querySelectorAll(".titulo__politica")
var idiomaEspanol_tituloPolitica = [
    "Política de Cobro por Suciedad",
    "Política de Objetos Valiosos en el Vehículo",
    "Términos y Condiciones del Servicio",
    "Política de Privacidad"
]
var idiomaIngles_tituloPolitica = [
    "Dirt Collection Policy",
    "Vehicle Valuables Policy",
    "Terms and Conditions of Service",
    "Privacy Policy"
]

recorrerIdioma(idiomaEspanol_tituloPolitica, idiomaIngles_tituloPolitica, titulo_politica)


/*---------------------*/

var parrafo_politica = document.querySelectorAll(".parrafo__politica")

var idiomaEspanol_parrafoPolitica = [
    "Política de Cargos Adicionales Basados en la Duración del Servicio:",
    "En SpraYL, nos esforzamos por ofrecer servicios de limpieza de vehículos impecables y de alta calidad. Para garantizar una experiencia satisfactoria para nuestros clientes, hemos implementado una política de cargos adicionales basada en la duración del servicio.",
    "Durante el proceso de reserva de nuestros servicios, los clientes tienen la opción de elegir  su vehículo y elegir extras deseados. En esta etapa, se muestra claramente la duración estimada del servicio. Además, el tiempo total estimado para el tamaño del vehículo y los extras seleccionados.",
    "Es importante tener en cuenta que si, durante el servicio, se requiere tiempo adicional más allá del tiempo estimado inicial debido al nivel de suciedad del vehículo, se aplicarán cargos adicionales. Estos cargos se calcularán una ves terminado el servicio.",
    "Nuestro objetivo es proporcionar un servicio integral y satisfactorio para dejar su vehículo en condiciones óptimas. Sin embargo, en casos donde el nivel de suciedad exceda las expectativas normales, puede ser necesario tiempo adicional para garantizar un resultado satisfactorio.",
    "Agradecemos la comprensión y cooperación de nuestros valiosos clientes respecto a esta política de cargos adicionales por tiempo. Estamos comprometidos a proporcionar un servicio de calidad y a garantizar la total satisfacción del cliente.",
    "Si tiene alguna pregunta o inquietud sobre esta política, no dude en contactarnos. Estamos aquí para ofrecerle la mejor experiencia de limpieza de vehículos posible.",
    "¡Gracias por elegir <span>Spra</span>YL!",

    "Política de Objetos Valiosos en el Vehículo",
    "Agradecemos a nuestros clientes y entendemos que pueden dejar objetos personales valiosos dentro de sus vehículos. Sin embargo, no somos responsables por la pérdida o daño de ningún objeto de valor que se encuentre dentro del vehículo durante el servicio de limpieza.",
    "Para prevenir posibles pérdidas o daños, recomendamos que los clientes retiren todos los objetos valiosos antes de dejar su vehículo para la limpieza. En caso de que el cliente decida dejar objetos valiosos dentro del vehículo, la empresa no se hará responsable y, al aceptar esta política, el cliente está exonerando a la compañía de cualquier responsabilidad.",
    "En caso de que un cliente reporte la pérdida o daño de un objeto valioso, se seguirá un protocolo de investigación interna y se proporcionará toda la información posible a las autoridades pertinentes, si es necesario.",
    "Es importante señalar que la empresa se reserva el derecho de negarse a realizar el servicio si se identifican objetos valiosos dentro del vehículo, y no asumirá ninguna responsabilidad por la posible pérdida o daño de dichos objetos.",
    "Prohibición de Entrega de Llaves al Sprayler",
    "Queda terminantemente prohibido entregar las llaves del vehículo al Sprayler. En caso de que el cliente decida entregar la llave por algún motivo, la compañía no se hará responsable de su pérdida o de que el vehículo quede cerrado con la llave dentro. Recomendamos encarecidamente que el cliente deje el vehículo abierto al menos 30 minutos antes del servicio para evitar la necesidad de entregar la llave.",
    "Al aceptar nuestros servicios de limpieza, el cliente acepta y está de acuerdo con los términos y condiciones de esta política.",

    "Propósito: Estos términos y condiciones tienen como objetivo establecer las condiciones generales para la prestación de servicios por parte de SpraYL LLC, en adelante denominada “SpraYL,” a sus clientes, en adelante denominados “el cliente.” Al aceptar estos términos y condiciones, el cliente acepta todos los términos establecidos en el presente documento.",
    "Servicios Ofrecidos: La empresa se dedica a ofrecer servicios de detallado de vehículos móvil sin agua, en adelante denominados “los servicios.” La empresa se compromete a proporcionar los servicios con la diligencia y cuidado necesarios, de acuerdo con los estándares de calidad de la industria.",
    "Precio y Método de Pago: El precio de los servicios será el establecido en el sitio web www.sprayl.com. Los precios se expresarán en moneda local y estarán basados en estimados nunca precios fijos. El pago se realizará bajo las condiciones acordadas previamente entre la empresa y el cliente o a través del portal de pago en el sitio web www.sprayl.com.",
    "Responsabilidad de la Empresa: La empresa no será responsable por daños causados al vehículo o a su contenido durante el servicio, a menos que dichos daños sean causados por negligencia o incumplimiento por parte de la empresa.",
    "Responsabilidad del Cliente: El cliente es responsable de proporcionar información precisa y completa sobre el vehículo y su contenido, y de asegurar que el vehículo esté en condiciones seguras y adecuadas para la prestación de los servicios. Además, el cliente es responsable de garantizar que el vehículo y su contenido estén adecuadamente asegurados.",
    "Política de Cancelación: El cliente puede cancelar o reprogramar los servicios acordados previamente con la empresa, siempre que se haga con al menos 2 horas de anticipación. En caso de cancelación tardía o falta de presentación, la empresa se reserva el derecho de cobrar una tarifa de cancelación del 20% del precio total de los servicios.",
    "Propiedad Intelectual: Los derechos de propiedad intelectual sobre los servicios y cualquier material relacionado con ellos son propiedad exclusiva de la empresa. El cliente acepta no usar, copiar, modificar, distribuir ni divulgar dichos derechos sin el consentimiento previo por escrito de la empresa.",
    "Membresías",
    "Básica: El cliente paga una tarifa de $9.99 al mes que le ofrece los beneficios de un descuento del 20% del precio regular, más la acumulación de puntos para gastar dentro de la misma en servicios o servicios extras. Estos puntos no pueden ser transferidos o utilizados en otros vehículos. También incluye el beneficio de solicitar el servicio de manera instantánea en la app.",
    "Familiar: El cliente paga una tarifa de $24.99 al mes que le ofrece los beneficios de un descuento del 20% del precio regular, además de poder invitar hasta 5 amigos o familiares para mayor acumulación de puntos para gastar dentro de la misma en servicios o servicios extras. Estos puntos pueden ser transferidos o utilizados en otros vehículos que estén dentro de la cuenta familiar. También incluye el beneficio de solicitar el servicio de manera instantánea en la app.",
    "Ley Aplicable y Jurisdicción: Estos términos y condiciones se regirán e interpretarán de acuerdo con las leyes de los Estados Unidos de América. Cualquier disputa o reclamación que surja de o en conexión con estos términos y condiciones estará sujeta a la jurisdicción exclusiva de los tribunales competentes del Estado de Florida.",
    "Al aceptar estos términos y condiciones, el cliente acepta que ha leído y comprendido su contenido y los acepta en su totalidad.",

    "En SpraYL, tomamos muy en serio la privacidad y protección de los datos personales de nuestros clientes y usuarios. Por ello, hemos desarrollado la siguiente política de privacidad para explicar cómo recopilamos, usamos, compartimos y protegemos la información personal que obtenemos a través de nuestros servicios y sitio web.",
    "Información Recopilada: Recopilamos información personal de nuestros clientes y usuarios, como nombre, dirección, correo electrónico, número de teléfono y detalles de pago, solo cuando se nos proporciona de manera voluntaria al registrarse en nuestra plataforma o al utilizar nuestros servicios. Además, podemos recopilar información técnica, como la dirección IP, el tipo de dispositivo y el navegador utilizado al acceder a nuestros servicios.",
    "Uso de la Información: Utilizamos la información personal que recopilamos para proporcionar nuestros servicios, procesar pagos, mejorar nuestros servicios y comunicarnos con nuestros clientes y usuarios. También podemos utilizar la información para personalizar nuestros servicios y publicidad, y para cumplir con las leyes y regulaciones aplicables.",
    "Compartición de Información: No compartimos, vendemos ni alquilamos la información personal de nuestros clientes y usuarios a terceros, a menos que estemos obligados por ley o sea necesario para proporcionar nuestros servicios (por ejemplo, para procesar pagos o para fines de entrega de servicios). Solo compartimos información técnica de forma agregada y anónima con terceros para fines estadísticos.",
    "Protección de la Información: Tomamos medidas de seguridad técnicas y organizativas adecuadas para proteger la información personal de nuestros clientes y usuarios contra pérdida, uso no autorizado, acceso, divulgación, alteración o destrucción.",
    "Derechos de Clientes y Usuarios: Los clientes y usuarios tienen derecho a acceder, rectificar, eliminar y limitar el uso de su información personal. También pueden retirar su consentimiento en cualquier momento. Para ejercer estos derechos, pueden contactarnos a través de nuestro sitio web o por correo electrónico.",
    "Cambios en la Política de Privacidad: Nos reservamos el derecho de actualizar y modificar esta política de privacidad en cualquier momento. Si se realizan cambios significativos en la política, los clientes y usuarios serán notificados a través de nuestro sitio web o por correo electrónico.",
    "Contacto: Si tiene preguntas o inquietudes sobre nuestra política de privacidad o el uso de su información personal, no dude en contactarnos a través de nuestro sitio web o por correo electrónico."

]


var idiomaIngles_parrafoPolitica = [
    "Additional Charge Policy Based on Service Duration:",
    "At SpraYL, we strive to provide high-quality, impeccable vehicle cleaning services. To ensure a satisfying experience for our customers, we have implemented an additional charge policy based on the duration of the service.",
    "During the process of booking our services, customers have the option to choose their vehicle and select desired extras. At this stage, the estimated duration of the service is clearly displayed. In addition, the total estimated time for the vehicle size and the selected extras is displayed.",
    "It is important to note that if, during the service, additional time is required beyond the initial estimated time due to the level of dirt on the vehicle, additional charges will apply. These charges will be calculated once the service is completed.",
    "Our goal is to provide a comprehensive and satisfactory service to leave your vehicle in optimal condition. However, in cases where the level of dirt exceeds normal expectations, additional time may be necessary to ensure a satisfactory result.",
    "We appreciate our valued customers' understanding and cooperation regarding this additional time charge policy. We are committed to providing quality service and ensuring total customer satisfaction.",
    "If you have any questions or concerns about this policy, please feel free to contact us. We are here to provide you with the best vehicle cleaning experience possible.",
    "Thank you for choosing <span>Spra</span>YL!",

    "Valuables in Vehicle Policy",
    "We appreciate our customers and understand that they may leave valuable personal items inside their vehicles. However, we are not responsible for the loss or damage of any valuable items found inside the vehicle during the cleaning service.",
    "To prevent possible loss or damage, we recommend that customers remove all valuable items before leaving their vehicle for cleaning. In the event that the customer decides to leave valuable items inside the vehicle, the company will not be held responsible and by agreeing to this policy, the customer is exonerating the company from any liability.",
    "In the event that a customer reports the loss or damage of a valuable item, an internal investigation protocol will be followed and all possible information will be provided to the relevant authorities, if necessary.",
    "It is important to note that the company reserves the right to refuse to perform the service if valuable items are identified inside the vehicle, and will not assume any liability for the possible loss or damage of such items.",
    "Prohibition of Handing Over Keys to the Sprayer",
    "It is strictly forbidden to hand over the vehicle keys to the Sprayer. In the event that the client decides to hand over the key for any reason, the company will not be responsible for its loss or for the vehicle being locked with the key inside. We strongly recommend that the client leave the vehicle unlocked at least 30 minutes before the service to avoid the need to hand over the key.",
    "By accepting our cleaning services, the client accepts and agrees to the terms and conditions of this policy.",

    "Purpose: These terms and conditions are intended to set forth the general conditions for the provision of services by SpraYL LLC, hereinafter referred to as “SpraYL,” to its clients, hereinafter referred to as “the client.” By accepting these terms and conditions, the client agrees to all the terms set forth herein.",
    "Services Offered: The company is engaged in offering waterless mobile vehicle detailing services, hereinafter referred to as “the services.” The company is committed to providing the services with the necessary diligence and care, in accordance with industry quality standards.",
    "Price and Payment Method: The price of the services will be as set forth on the website www.sprayl.com. Prices will be expressed in local currency and will be based on estimates, never fixed prices. Payment will be made under the conditions previously agreed between the company and the client or through the payment portal on the website www.sprayl.com.",
    "Company Responsibility: The company will not be liable for damage caused to the vehicle or its contents during the service, unless such damage is caused by negligence or default on the part of the company.",
    "Client Responsibility: The client is responsible for providing accurate and complete information about the vehicle and its contents, and for ensuring that the vehicle is in safe and suitable condition for the provision of services. In addition, the client is responsible for ensuring that the vehicle and its contents are adequately insured.",
    "Cancellation Policy: The client may cancel or reschedule services previously agreed upon with the company, provided that this is done at least 2 hours in advance. In the event of late cancellation or no-show, the company reserves the right to charge a cancellation fee of 20% of the total price of the services.",
    "Intellectual Property: The intellectual property rights on the services and any materials related to them are the exclusive property of the company. The client agrees not to use, copy, modify, distribute or disclose such rights without the prior written consent of the company.",
    "Memberships",
    "Basic: The client pays a fee of $9.99 per month that offers the benefits of a 20% discount on the regular price, plus the accumulation of points to spend within the same account on services or extra services. These points cannot be transferred or used on other vehicles. It also includes the benefit of requesting the service instantly in the app.",
    "Family: The client pays a fee of $24.99 per month that offers the benefits of a 20% discount on the regular price, in addition to being able to invite up to 5 friends or family members for a greater accumulation of points to spend within the same account on services or extra services. These points can be transferred or used on other vehicles that are within the family account. It also includes the benefit of requesting the service instantly in the app.",
    "Applicable Law and Jurisdiction: These terms and conditions will be governed by and interpreted in accordance with the laws of the United States of America. Any dispute or claim arising out of or in connection with these terms and conditions shall be subject to the exclusive jurisdiction of the competent courts of the State of Florida.",
    "By accepting these terms and conditions, the customer agrees that he or she has read and understood their content and accepts them in their entirety.",

    "At SpraYL, we take the privacy and protection of our customers' and users' personal data very seriously. Therefore, we have developed the following privacy policy to explain how we collect, use, share and protect the personal information we obtain through our services and website.",
    "Information Collected: We collect personal information from our customers and users, such as name, address, email, phone number and payment details, only when it is voluntarily provided to us when registering on our platform or when using our services. In addition, we may collect technical information, such as IP address, device type and browser used when accessing our services.",
    "Use of Information: We use the personal information we collect to provide our services, process payments, improve our services and communicate with our customers and users. We may also use the information to personalize our services and advertising, and to comply with applicable laws and regulations.",
    "Information Sharing: We do not share, sell or rent our customers' and users' personal information to third parties unless we are required to do so by law or it is necessary to provide our services (for example, to process payments or for service delivery purposes). We only share technical information in aggregated and anonymous form with third parties for statistical purposes.",
    "Information Protection: We take appropriate technical and organizational security measures to protect our customers' and users' personal information from loss, unauthorized use, access, disclosure, alteration or destruction.",
    "Customer and User Rights: Customers and users have the right to access, rectify, delete and limit the use of their personal information. They may also withdraw their consent at any time. To exercise these rights, they may contact us through our website or by email.",
    "Privacy Policy Changes: We reserve the right to update and modify this privacy policy at any time. If significant changes are made to the policy, customers and users will be notified through our website or by email.",
    "Contact: If you have questions or concerns about our privacy policy or the use of your personal information, please feel free to contact us through our website or by email."

]

recorrerIdioma(idiomaEspanol_parrafoPolitica, idiomaIngles_parrafoPolitica, parrafo_politica)

/*-////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////- RESUMEN ///////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////*/


var titulo_resumen = document.querySelectorAll(".resumen__titulo")
var idiomaEspanol_resumenTitulo = "Detalles de la Compra"
var idiomaIngles_resumenTitulo = "Purchase Details"


recorrerIdioma(idiomaEspanol_resumenTitulo, idiomaIngles_resumenTitulo, titulo_resumen)


/*----------------------*/

var resumen_row_item = document.querySelectorAll(".resumen__row__item--caracteristica")

var idiomaEspanol_resumen_RowItem = [
    "Cliente", "Dirección", "Fecha y Hora", "Marca", "Modelo", "Año", "Color", "Extras", "Subtotal", "Cupón", "Total Estimado"
]

var idiomaIngles_resumen_RowItem = [
    "Customer", "Address", "Date and Time", "Brand", "Model", "Year", "Color", "Extras", "Subtotal", "Coupon", "Total estimated"
]

recorrerIdioma(idiomaEspanol_resumen_RowItem, idiomaIngles_resumen_RowItem, resumen_row_item)


/*----------------------*/

var boton_pagar_resumen = document.querySelector(".booking__button__submit")

if(localStorage.getItem("idioma") == "espanol"){
    boton_pagar_resumen.value = "Pagar"
}else{
    boton_pagar_resumen.value = "Pay"
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
