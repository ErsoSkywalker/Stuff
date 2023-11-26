$(document).ready(function () {
    $.ajax({
        url: '../clases/peticiones.php',
        method: 'POST',
        data: { accion:"consultarjugador"},
        dataType: 'json',
        success: function (response) {
            
            var datos = response.resultado; 
            console.log(datos);
            var camposType = [
                { name: 'NombreJugador', type: 'string' },
                { name: 'Posicion', type: 'string' },
                { name: 'Edad', type: 'string' },
                { name: 'Telefono_de_contacto', type: 'string' },
                { name: 'correo', type: 'string' },
                { name: 'equipo', type: 'string' }
            ];
    
            var columnas = [
                { text: 'Nombre', datafield: 'NombreJugador', width: '16.5%', editable: false },
                { text: 'Posición', datafield: 'Posicion', width: '16.5%', editable: false },
                { text: 'Edad', datafield: 'Edad', width: '16.5%', editable: false },
                { text: 'Teléfono de Contacto', datafield: 'Telefono_de_contacto', width: '16.5%', editable: false },
                { text: 'Correo', datafield: 'correo', width: '16.5%', editable: false },
                { text: 'Equipo al que Pertenece', datafield: 'equipo', width: '16.5%', editable: false }
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