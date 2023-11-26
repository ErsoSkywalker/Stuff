$(document).ready(function () {
    $.ajax({
        url: '../clases/peticiones.php',
        method: 'POST',
        data: { accion:"consultar"},
        dataType: 'json',
        success: function (response) {
            
            var datos = response.resultado; 
            console.log(datos);
            var camposType = [
                { name: 'Nombre_equipo', type: 'string' },
                { name: 'Adeudos', type: 'string' }
            ];
    
            var columnas = [
                { text: 'Nombre', datafield: 'Nombre_equipo', width: '50%', editable: false },
                { text: 'Adeudos', datafield: 'Adeudos', width: '50%', editable: false }
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