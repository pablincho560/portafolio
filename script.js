// Script para manejar el envío del formulario
document.getElementById("form-contacto").addEventListener("submit", function(e) {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario

    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("mensaje").value;

    // Aquí podrías agregar la lógica para enviar el formulario a un servidor

    document.getElementById("respuesta").innerHTML = "¡Gracias por tu mensaje, " + nombre + "! Nos pondremos en contacto contigo pronto.";
});
