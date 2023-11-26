$(document).ready(function () {
    $.ajax({
        url: '../clases/peticiones.php',
        method: 'POST',
        data: { accion:"consultarmarcador"},
        dataType: 'json',
        success: function (response) {
            
            var datos = response.resultado; 
            console.log(datos);
            var camposType = [
                { name: 'ne1', type: 'string' },
                { name: 'G1', type: 'string' },
                { name: 'g2', type: 'string' },
                { name: 'ne2', type: 'string' }
            ];
    
            var columnas = [
                { text: 'Equipo Local', datafield: 'ne1', width: '25%', editable: false },
                { text: 'Goles', datafield: 'G1', width: '25%', editable: false },
                { text: 'Goles', datafield: 'g2', width: '25%', editable: false },
                { text: 'Equipo Visitante', datafield: 'ne2', width: '25%', editable: false }
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