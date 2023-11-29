document.addEventListener('DOMContentLoaded', function () {
    const trabajadorForm = document.getElementById('trabajadorForm');

    trabajadorForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

        // Recopilar datos del formulario
        const nombre = document.getElementById('nombre').value;
        const telefono = document.getElementById('telefono').value;
        const correo = document.getElementById('correo').value;
        const puesto = document.getElementById('puesto').value;

        $.ajax({
            url: "../clases/peticiones.php",
            method: "POST",
            data: { accion:"agregartrabajador",nombre:nombre,telefono:telefono,correo:correo,puesto:puesto},
            success: function (response) {
                
            },
            error: function () {
                // Manejo de errores
                console.error("Error al realizar la inserción.");
            }
        });  
        // Limpia el formulario después de enviar
        trabajadorForm.reset();
    });
});
