$(document).ready(function () {
    $.ajax({
        url: '../clases/peticiones.php',
        method: 'POST',
        data: { accion:"consultartorneo"},
        dataType: 'json',
        success: function (response) {
            var datos = response.resultado;
            var combo = "<select id='equipo' name='equipo' class='combo'><option value=0 > Seleccionar Torneo </option>";
            $.each(datos , function (index, value){
                combo += "<option value='" + value.torneo_id + "'>" + value.NombreTorneo + " </option>";
            });
            combo += "</select>";
            $("#torneoc").empty().html( combo );
        },
        error: function () {        
            console.error('Error al cargar los datos.');
        }
    });
    $(document).on('click', '#Buscar', function(event) {
        var id = $("#equipo").val();
        console.log(id);
        if(id !== 0){

            $.ajax({
                url: '../clases/peticiones.php',
                method: 'POST',
                data: { accion:"consultartorneoespecifico",id:id},
                dataType: 'json',
                success: function (response) {
                    var datos = response.resultado;
                    $("#torneo_id").val(datos[0].torneo_id);
                    $("#nombreEquipo").val(datos[0].NombreTorneo);
                    $("#fechaInicio").val(datos[0].Fecha_inicio);
                    $("#fechaFin").val(datos[0].Fecha_fin);
                },
                error: function () {        
                    console.error('Error al cargar los datos.');
                }
            });
        }
    });
    $(document).on('click', '#modificarEquipo', function(event) {
        let id = $("#torneo_id").val();
        let nombre = $("#nombreEquipo").val();
        let fecini = $("#fechaInicio").val();
        let fecter = $("#fechaFin").val();
        $.ajax({
            url: '../clases/peticiones.php',
            method: 'POST',
            data: { accion:"modificartorneo",id:id,nombre:nombre,fecini:fecini,fecter:fecter},
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