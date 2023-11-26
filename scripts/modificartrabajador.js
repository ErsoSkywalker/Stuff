$(document).ready(function () {
    $.ajax({
        url: '../clases/peticiones.php',
        method: 'POST',
        data: { accion:"consultartrabajador"},
        dataType: 'json',
        success: function (response) {
            var datos = response.resultado;
            var combo = "<select id='trabajador' name='trabajador' class='combo'><option value=0 > Seleccionar Trabajador </option>";
            $.each(datos , function (index, value){
                combo += "<option value='" + value.trabajadores_id + "'>" + value.NombreTrabajador + " </option>";
            });
            combo += "</select>";
            $("#nombreTrabajadorc").empty().html( combo );
        },
        error: function () {        
            console.error('Error al cargar los datos.');
        }
    });
    $(document).on('click', '#Buscar', function(event) {
        var id = $("#trabajador").val();
        console.log(id);
        if(id !== 0){

            $.ajax({
                url: '../clases/peticiones.php',
                method: 'POST',
                data: { accion:"consultartrabajadorespecifico",id:id},
                dataType: 'json',
                success: function (response) {
                    var datos = response.resultado;
                    console.log(datos);
                    $("#id").val(datos[0].trabajadores_id);
                    $("#nombre").val(datos[0].NombreTrabajador);
                    $("#puesto").val(datos[0].Puesto);
                    $("#telefono").val(datos[0].Telefono);
                    $("#correo").val(datos[0].correo);
                },
                error: function () {        
                    console.error('Error al cargar los datos.');
                }
            });
        }
    });
    $(document).on('click', '#modificarEquipo', function(event) {
        let id = $("#id").val();
        let nombre = $("#nombre").val();
        let puesto = $("#puesto").val();
        let telefono = $("#telefono").val();
        let correo = $("#correo").val();
        $.ajax({
            url: '../clases/peticiones.php',
            method: 'POST',
            data: { accion:"modificartrabajador",id:id,nombre:nombre,puesto:puesto,telefono:telefono,correo:correo},
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