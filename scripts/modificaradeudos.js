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
$(document).on('keyup', '#pago', function(event) {
    $("#total").text("Total:");
    $("#totalresultado").val($("#textadeudo").val());
    if(($("#textadeudo").val() !== null || $("#textadeudo").val() !== "") && ($("#pago").val() !== null || $("#pago").val() !== "")){
        var resultado = ($("#textadeudo").val()-$("#pago").val());
        $("#total").append(resultado);
        $("#totalresultado").val(resultado);
    }
});