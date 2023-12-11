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
            $("#equiposc").empty().html( combo );
        },
        error: function () {        
            console.error('Error al cargar los datos.');
        }
    });
    $(document).on('click', '#Buscar', function(event) {
        $("#Adeudos").text("Adeudos:");
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
                    $("#Adeudos").append((datos[0].Adeudos));
                    $("#textadeudo").val(datos[0].Adeudos);
                },
                error: function () {        
                    console.error('Error al cargar los datos.');
                }
            });
        }
    });
    $(document).on('click', '#modificarEquipo', function(event) {
        let id=$("#nombreEquipobase").val();
        let total = $("#totalresultado").val();
        $.ajax({
            url: '../clases/peticiones.php',
            method: 'POST',
            data: { accion:"modificaradeudoquipo",id:id,total:total},
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
});
$(document).on('keyup', '#pago', function (event) {
    $("#total").text("Total:");
    $("#totalresultado").val($("#textadeudo").val());
    var deudo = parseFloat($("#textadeudo").val()) || 0;
    var pago = parseFloat($("#pago").val()) || 0;
    if (deudo >= 0 && pago >= 0) {
        var resultado = deudo - pago;
        $("#total").append(resultado);
        $("#totalresultado").val(resultado); 
        $("#modificarEquipo").prop("disabled", false);
    } else {
        // Mostrar un mensaje de error o realizar alguna acción en caso de pagos negativos
        // Por ejemplo, puedes mostrar un mensaje de error en algún elemento HTML
        $("#total").append("Error: Los pagos no pueden ser negativos");
        $("#modificarEquipo").prop("disabled", true);

        // También podrías desactivar el botón de pago o realizar alguna otra acción
        // para indicar al usuario que ha ingresado un valor inválido.
    }
});