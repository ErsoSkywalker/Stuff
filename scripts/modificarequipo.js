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
            $("#nombreEquipoc").empty().html( combo );
        },
        error: function () {        
            console.error('Error al cargar los datos.');
        }
    });
    $(document).on('click', '#Buscar', function(event) {
        let id= $("#equipo").val();
        if(id !== 0){

            $.ajax({
                url: '../clases/peticiones.php',
                method: 'POST',
                data: { accion:"consultarespecifico",nombre:id},
                dataType: 'json',
                success: function (response) {
                    var datos = response.resultado;
                    $("#nombreEquipobase").val(datos[0].Nombre_equipo);
                    $("#nombreEquipo").val(datos[0].Nombre_equipo);
                    $("#fechaRegistro").val(datos[0].Fecha_registro);
                    $("#adeudos").val(datos[0].Adeudos);
                    $("#observaciones").val(datos[0].Adeudos);
                    $("#modificarEquipo").attr("disabled",false);
                },
                error: function () {        
                    console.error('Error al cargar los datos.');
                }
            });
        }
    });
    $(document).on('click', '#modificarEquipo', function(event) {
        let id=$("#nombreEquipobase").val();
        var nombre= $("#nombreEquipo").val();
        var fecha= $("#fechaRegistro").val();
        $.ajax({
            url: '../clases/peticiones.php',
            method: 'POST',
            data: { accion:"modificarquipo",id:id,nombre:nombre,fecha:fecha},
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