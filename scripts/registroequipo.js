$(document).ready(function () {
    const equipoForm = document.getElementById('equipoForm');

    equipoForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

        // Recopilar datos del formulario
        const nombreEquipo = document.getElementById('nombreEquipo').value;
        const fechaRegistro = document.getElementById('fechaRegistro').value;
        const adeudos = document.getElementById('adeudos').value;
        const incidencias = document.getElementById('incidencias').value;

        // Puedes realizar acciones con los datos, como enviarlos a un servidor o mostrarlos en una alerta
        $.ajax({
            url: "../clases/peticiones.php",
            method: "POST",
            data: { accion:"agregar",nombre: nombreEquipo, fecha: fechaRegistro,adeudos:adeudos,incidencias:incidencias},
            success: function (response) {
                
            },
            error: function () {
                // Manejo de errores
                console.error("Error al realizar la inserción.");
            }
        });

        // Limpia el formulario después de enviar
        equipoForm.reset();
    });
});