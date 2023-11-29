document.addEventListener('DOMContentLoaded', function () {
    const jugadorForm = document.getElementById('jugadorForm');
    equipoc
    $.ajax({
        url: '../clases/peticiones.php',
        method: 'POST',
        data: { accion:"consultar"},
        dataType: 'json',
        success: function (response) {
            var datos = response.resultado;
            var combo = "<select id='equipo' name='equipo' class='combo'><option value=0 > Seleccionar Equipo </option>";
            $.each(datos , function (index, value){
                combo += "<option value='" + value.Nombre_equipo + "'>" + value.Nombre_equipo + " </option>";
            });
            combo += "</select>";
            $("#equipoc").empty().html( combo );
        },
        error: function () {        
            console.error('Error al cargar los datos.');
        }
    });
    jugadorForm.addEventListener('submit', function (event) {
        event.preventDefault(); 

        
        const nombre = document.getElementById('nombre').value;
        const posicion = document.getElementById('posicion').value;
        const edad = document.getElementById('edad').value;
        const telefonos = document.getElementById('telefonos').value;
        const correo = document.getElementById('correo').value;
        const equipo = document.getElementById('equipo').value;
       if(equipo !== 0){
        $.ajax({
            url: "../clases/peticiones.php",
            method: "POST",
            data: { accion:"agregarjugador",nombre: nombre,posicion:posicion,edad:edad,telefonos:telefonos,correo:correo,equipo:equipo},
            success: function (response) {
                
            },
            error: function () {
                // Manejo de errores
                console.error("Error al realizar la inserción.");
            }
        });       
       } else{
        alert("Selecciona un equipo valido");
       }
        jugadorForm.reset();
    });
});
