function mostrarFormulario(formularioId, event) {
    event.preventDefault();
    const formularios = document.querySelectorAll('.booking__form');
    formularios.forEach((form) => {
        form.style.display = 'none';
    });
    document.getElementById(`formulario${formularioId}`).style.display = 'block';
}

function agregarExtra(nombre, id) {
    // Lógica para agregar el extra
    alert(`${nombre} agregado.`);
}

function quitarExtra(nombre, id) {
    // Lógica para quitar el extra
    alert(`${nombre} quitado.`);
}



/*detalltes*/
function mostrarFormulario(formId, event) {
    event.preventDefault(); // Evita la acción por defecto del enlace
    // Oculta todos los formularios
    document.querySelectorAll('.booking__form').forEach(function(form) {
        form.style.display = 'none';
    });
    // Muestra el formulario seleccionado
    document.getElementById('formulario' + formId).style.display = 'block';
}


/*prueba de detalles*/
function mostrarResumen() {
    // Formulario 1
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const anio = document.getElementById('anio').value;
    const color = document.getElementById('color').value;
    
    
    // Formulario 2 (Extras)
    const extras = []; // Deberías tener una lógica para obtener los extras seleccionados
    // Ejemplo: extras.push('ArmorAll Treatment');
    
    // Formulario 3
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
    const turno = document.querySelector('input[name="turno"]:checked')?.value;
    
    // Formulario 4
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value;
    const ubicacion_servicio = document.getElementById('ubicacion_servicio').value;
    const ciudad = document.getElementById('ciudad').value;
    const estado = document.getElementById('estado').value;
    const codigo_postal = document.getElementById('codigo_postal').value;
    const nivel_suciedad = document.getElementById('nivel_suciedad').value;
    const peticion = document.getElementById('peticion').value;

    // Actualizar el resumen
    document.getElementById('marca__dato').innerText = marca;
    document.getElementById('modelo__dato').innerText = modelo;
    document.getElementById('anio__dato').innerText = anio;
    document.getElementById('color__dato').innerText = color;
    
    const extrasList = document.getElementById('extras__lista');
    extrasList.innerHTML = ''; // Limpiar la lista de extras
    extras.forEach(extra => {
        const li = document.createElement('li');
        li.innerText = extra;
        extrasList.appendChild(li);
    });
    
    document.getElementById('fechaYHora__dato').innerText = `${fecha} ${hora} (${turno})`;
    document.getElementById('cliente__dato').innerText = `${nombre} ${apellido}`;
    document.getElementById('direccion__dato').innerText = `${ubicacion_servicio}, ${ciudad}, ${estado}, ${codigo_postal}`;
    document.getElementById('subtotal__dato').innerText = '529,00 US$'; // Ejemplo de subtotal
    document.getElementById('total__dato').innerText = '529,00 US$'; // Ejemplo de total
    
    // Mostrar Formulario 5
    document.getElementById('formulario5').style.display = 'block';
}


function mostrarFormulario(numero, event) {
    event.preventDefault();
    for (let i = 1; i <= 5; i++) {
        document.getElementById(`formulario${i}`).style.display = 'none';
    }
    if (numero === 5) {
        mostrarResumen();
    } else {
        document.getElementById(`formulario${numero}`).style.display = 'block';
    }
}



/*validar forms 1*/
function validarFormulario1(event) {
    event.preventDefault(); // Evita el comportamiento por defecto del enlace

    // Obtén los elementos del formulario
    const marca = document.getElementById('marca');
    const modelo = document.getElementById('modelo');
    const anio = document.getElementById('anio');
    const color = document.getElementById('color');

    // Verifica si todos los campos están completados
    if (marca.value.trim() === '' || modelo.value.trim() === '' || anio.value.trim() === '' || color.value.trim() === '') {
        alert('Por favor, completa todos los campos.');
        return; // Detiene la ejecución si no se completan todos los campos
    }

    // Si todos los campos están completados, muestra el siguiente formulario
    mostrarFormulario(2, event);
}


/*politica*/
// Obtener todos los botones que abren modales
var buttons = document.querySelectorAll('.booking__politica__link');

// Obtener todos los elementos de cierre
var closes = document.querySelectorAll('.close');

// Función para abrir el modal
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
    }
}

// Función para cerrar el modal
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

// Cuando el usuario hace clic en un botón, abrir el modal correspondiente
buttons.forEach(function(button) {
    button.onclick = function() {
        var modalId = this.getAttribute('data-modal');
        openModal(modalId);
    }
});

// Cuando el usuario hace clic en <span> (x), cerrar el modal correspondiente
closes.forEach(function(close) {
    close.onclick = function() {
        var modalId = this.getAttribute('data-close');
        closeModal(modalId);
    }
});

// Cuando el usuario hace clic en cualquier parte fuera del modal, cerrarlo
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        closeModal(event.target.id);
    }
}

