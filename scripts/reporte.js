$(document).ready(function () {
    $(".formulario-reporte").hide();
    $.ajax({
        url: '../clases/peticiones.php',
        method: 'POST',
        data: { accion:"consultarpartidos"},
        dataType: 'json',
        success: function (response) {
            
            var datos = response.resultado; 
            console.log(datos);
            var camposType = [
                { name: 'id', type: 'string' },
                { name: 'torneo', type: 'string' },
                { name: 'Nombrepartido', type: 'string' },
                { name: 'NombreTorneo', type: 'string' },
                { name: 'eq1', type: 'string' },
                { name: 'eq2', type: 'string' }
            ];
    
            var columnas = [
                { text: 'id', datafield: 'id', width: '16.5%', editable: false,hidden:true },
                { text: 'idtorneo', datafield: 'torneo', width: '16.5%', editable: false,hidden:true},
                { text: 'Partido', datafield: 'Nombrepartido', width: '25%', editable: false },
                { text: 'Torneo', datafield: 'NombreTorneo', width: '25%', editable: false },
                { text: 'Equipo 1', datafield: 'eq1', width: '25%', editable: false },
                { text: 'Equipo 2', datafield: 'eq2', width: '25%', editable: false }
            ];
    
            var source = {
                localdata: datos,
                datatype: 'array',
                datafields: camposType
            };
    
            var dataAdapter = new $.jqx.dataAdapter(source);
            $('#grid_solicitudes').jqxGrid({
                width: '100%',
                autoheight: true,
                source: dataAdapter,
                altrows: true,
                columnsresize: false,
                showfilterrow: false,
                filterable: false,
                columnsreorder: false,
                sortable: false,
                columns: columnas
            });
        },
        error: function () {
            
            console.error('Error al cargar los datos.');
        }
    });
    $('#grid_solicitudes').on('rowdoubleclick', function (event){
        $(".formulario-reporte").show();
        var params=$(".formulario-reporte").serialize();
        $("#grid_solicitudes").hide();
        var id = event.args.rowindex;
        console.log(id);
        var value = $('#grid_solicitudes').jqxGrid('getrowdata', id);
        console.log(value);
        $(".eq1").text(value.eq1);
        $(".eq2").text(value.eq2);
        var idpartido = value.id;
        var nombrepartido = value.Nombrepartido;
        $(document).on('click', '#btnr', function(event) {
            var goleseq1 = $("#goles_equipo1").val();
            var goleseq2 = $("#goles_equipo2").val();
            var faltaseq1 = $("#faltas_equipo1").val();
            var faltaseq2 = $("#faltas_equipo2").val();
            var ganador = $("#equipo-ganador").val();
            if($("#asistencia1").is(":checked")){
                var asistencia1 = 1;
            }else{
                var asistencia1 = 0;
                
            }
            if($("#asistencia2").is(":checked")){
                var asistencia2 = 1;
                
            }else{
                var asistencia2 = 0;

            }
            $.ajax({
                url: "../clases/peticiones.php",
                method: "POST",
                data: { accion:"agregarinfopartido",idpartido: idpartido,nombrepartido:nombrepartido,goleseq1:goleseq1,goleseq2:goleseq2,faltaseq1:faltaseq1,faltaseq2:faltaseq2,ganador:ganador},
                success: function (response) {
                    alert(response);
                },
                error: function () {
                    // Manejo de errores
                    console.error("Error al realizar la inserción.");
                }
            });
        });
    });
});//ready
