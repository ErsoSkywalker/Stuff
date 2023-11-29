$(document).ready(function () {

    const bajaEquipoForm = document.getElementById("bajaTrabajadorForm");

    bajaEquipoForm.addEventListener("submit", function (event) {
        event.preventDefault();

        
        const nombretrabajador = document.getElementById("nombreTrabajador").value;
        const idtrabajador = document.getElementById("idtrabajador").value;

        
        if (confirm(`¿Estás seguro de eliminar al Trabajador ${nombretrabajador}?`)) {
            $.ajax({
                url: "../clases/peticiones.php",
                method: "POST",
                data: { accion:"eliminartrabajador",id: idtrabajador},
                success: function (response) {
                    
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
        data: { accion:"consultartrabajador"},
        dataType: 'json',
        success: function (response) {
            
            var datos = response.resultado; 
            console.log(datos);
            var camposType = [
                { name: 'trabajadores_id', type: 'string' },
                { name: 'NombreTrabajador', type: 'string' },
                { name: 'Telefono', type: 'string' },
                { name: 'correo', type: 'string' },
                { name: 'Puesto', type: 'string' },
            ];
    
            var columnas = [
                { text: 'trabajadores_id', datafield: 'trabajadores_id', width: '16.5%', editable: false ,hidden:true},
                { text: 'Nombre', datafield: 'NombreTrabajador', width: '25%', editable: false },
                { text: 'Telefono', datafield: 'Telefono', width: '25%', editable: false },
                { text: 'Puesto', datafield: 'Puesto', width: '25%', editable: false },
                { text: 'Correo', datafield: 'correo', width: '25%', editable: false }
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
        $("#nombreTrabajador").val(value.NombreTrabajador);
         $("#idtrabajador").val(value.trabajadores_id);
    });
});
