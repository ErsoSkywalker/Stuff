$(document).ready(function () {

    const bajaEquipoForm = document.getElementById("bajaForm");

    bajaEquipoForm.addEventListener("submit", function (event) {
        event.preventDefault();

        
        const nombre = document.getElementById("nombre").value;
        const id = document.getElementById("id_jugador").value;

        
        if (confirm(`¿Estás seguro de eliminar al jugador ${nombre}?`)) {
            $.ajax({
                url: "../clases/peticiones.php",
                method: "POST",
                data: { accion:"eliminarjugador",nombre: id},
                success: function (response) {
                    
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
        data: { accion:"consultarjugador"},
        dataType: 'json',
        success: function (response) {
            
            var datos = response.resultado; 
    
            console.log(datos);
    
            var camposType = [
                { name: 'jugador_id', type: 'string' },
                { name: 'NombreJugador', type: 'string' },
                { name: 'Posicion', type: 'string' },
                { name: 'correo', type: 'string' },
                { name: 'Edad', type: 'string' },
                { name: 'Telefono_de_contacto', type: 'string' },
                { name: 'equipo', type: 'string' }
            ];
    
            var columnas = [
                { text: 'Jugador ID', datafield: 'jugador_id', width: '16.6%', editable: false,hidden:true },
                { text: 'Nombre del jugador', datafield: 'NombreJugador', width: '16.6%', editable: false },
                { text: 'Posicion', datafield: 'Posicion', width: '16.6%', editable: false },
                { text: 'Correo', datafield: 'correo', width: '16.6%', editable: false },
                { text: 'Edad', datafield: 'Edad', width: '16.6%', editable: false },
                { text: 'Telefono', datafield: 'Telefono_de_contacto', width: '16.6%', editable: false },
                { text: 'Equipo', datafield: 'equipo', width: '16.6%', editable: false }
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
         $("#nombre").val(value.NombreJugador);
         $("#id_jugador").val(value.jugador_id);
    });
});
