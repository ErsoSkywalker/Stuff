$(document).ready(function () {
    $.ajax({
        url: '../clases/peticiones.php',
        method: 'POST',
        data: { accion:"consultartorneo"},
        dataType: 'json',
        success: function (response) {
            
            var datos = response.resultado; 
            console.log(datos);
            var camposType = [
                { name: 'NombreTorneo', type: 'string' },
                { name: 'Fecha_inicio', type: 'string' },
                { name: 'Fecha_fin', type: 'string' },
                { name: 'Ganador', type: 'string' },
                { name: 'No_de_equipos', type: 'string' }
            ];
    
            var columnas = [
                { text: 'Nombre', datafield: 'NombreTorneo', width: '16.5%', editable: false },
                { text: 'Fecha de inicio', datafield: 'Fecha_inicio', width: '16.5%', editable: false },
                { text: 'Fecha de termino', datafield: 'Fecha_fin', width: '16.5%', editable: false },
                { text: 'Ganador', datafield: 'Ganador', width: '16.5%', editable: false },
                { text: 'Numero de equipos', datafield: 'No_de_equipos', width: '16.5%', editable: false }
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
    
});//ready