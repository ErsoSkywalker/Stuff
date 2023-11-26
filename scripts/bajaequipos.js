$(document).ready(function () {

    const bajaEquipoForm = document.getElementById("bajaEquipoForm");

    bajaEquipoForm.addEventListener("submit", function (event) {
        event.preventDefault();

        
        const nombreEquipo = document.getElementById("nombreEquipo").value;

        
        if (confirm(`¿Estás seguro de eliminar al equipo ${nombreEquipo}?`)) {
            $.ajax({
                url: "../clases/peticiones.php",
                method: "POST",
                data: { accion:"eliminar",nombre: nombreEquipo},
                success: function (response) {
                    alert(response);
                    location.reload();
                },
                error: function () {
                    // Manejo de errores
                    console.error("Error al realizar la inserción.");
                }
            });
            
        }
    });
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
                { name: 'Fecha_registro', type: 'string' },
                { name: 'Adeudos', type: 'string' },
                { name: 'Incidencias', type: 'string' }
            ];
    
            var columnas = [
                { text: 'Nombre del equipo', datafield: 'Nombre_equipo', width: '25%', editable: false },
                { text: 'Fecha de registro', datafield: 'Fecha_registro', width: '25%', editable: false },
                { text: 'Adeudos', datafield: 'Adeudos', width: '25%', editable: false },
                { text: 'Incidencias', datafield: 'Incidencias', width: '25%', editable: false }
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
            })
        },
        error: function () {
            console.error('Error al cargar los datos.');
        }
    });
    $('#grid_solicitudes').on('rowdoubleclick', function (event){
        
        var id = event.args.rowindex;
        var value = $('#grid_solicitudes').jqxGrid('getrowdata', id);
         $("#nombreEquipo").val(value.Nombre_equipo);
    });
});
