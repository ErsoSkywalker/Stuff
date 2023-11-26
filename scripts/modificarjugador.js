$(document).ready(function () {
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
    $.ajax({
        url: '../clases/peticiones.php',
        method: 'POST',
        data: { accion:"consultarjugador"},
        dataType: 'json',
        success: function (response) {
            var datos = response.resultado;
            var combo = "<select id='jugador' name='jugador' class='combo'><option value=0 > Seleccionar Jugador </option>";
            $.each(datos , function (index, value){
                combo += "<option value='" + value.NombreJugador + "'>" + value.NombreJugador + " </option>";
            });
            combo += "</select>";
            $("#nombreJugadorc").empty().html( combo );
        },
        error: function () {        
            console.error('Error al cargar los datos.');
        }
    });
    $(document).on('click', '#Buscar', function(event) {
        var id = $("#jugador").val();
        console.log(id);
        if(id !== 0){

            $.ajax({
                url: '../clases/peticiones.php',
                method: 'POST',
                data: { accion:"consultarjugadorespecifico",id:id},
                dataType: 'json',
                success: function (response) {
                    var datos = response.resultado;
                    $("#id").val(datos[0].jugador_id);
                    $("#nombreEquipo").val(datos[0].NombreJugador);
                    $("#posicion").val(datos[0].Posicion);
                    $("#edad").val(datos[0].Edad);
                    $("#telefonos").val(datos[0].Telefono_de_contacto);
                    $("#correo").val(datos[0].correo);
                    $("#equipo").val(datos[0].equipo);
                },
                error: function () {        
                    console.error('Error al cargar los datos.');
                }
            });
        }
    });
    $(document).on('click', '#modificarEquipo', function(event) {
        let id = $("#id").val();
        let nombre = $("#nombreEquipo").val();
        let posicion = $("#posicion").val();
        let edad = $("#edad").val();
        let telefono = $("#telefonos").val();
        let correo = $("#correo").val();
        let equipo = $("#equipo").val();
        $.ajax({
            url: '../clases/peticiones.php',
            method: 'POST',
            data: { accion:"modificarjugador",id:id,nombre:nombre,posicion:posicion,edad:edad,telefonos:telefono,correo:correo,equipo:equipo},
            dataType: 'json',
            success: function (response) {
                alert(response.resultado);
                location.reload();
            },
            error: function () {        
                console.error('Error al cargar los datos.');
            }
        });
    });
});//ready