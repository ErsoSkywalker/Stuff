$(document).ready(function () {
    $.ajax({
        url: '../clases/peticiones.php',
        method: 'POST',
        data: { accion:"consultartorneo"},
        dataType: 'json',
        success: function (response) {
            var datos = response.resultado;
            var combo = "<select id='torneo' name='torneo' class='combo'><option value=0 > Seleccionar torneo </option>";
            $.each(datos , function (index, value){
                combo += "<option value='" + value.torneo_id + "'>" + value.NombreTorneo + " </option>";
            });
            combo += "</select>";
            $("#torneocombo").empty().html( combo );
        },
        error: function () {        
            console.error('Error al cargar los datos.');
        }
    });
    $(document).on('click', '#btn-buscar', function(event) {
        let id=$("#torneo").val();
        if(id !== "" && id != 0){
            alert(id);
            traertabla(id);
        }else{
            alert("Selecciona un torneo");
        }
    });
});//ready
function traertabla(id){
    $.ajax({
        url: '../clases/peticiones.php',
        method: 'POST',
        data: { accion:"consultartablasderesultado",id:id},
        dataType: 'json',
        success: function (response) {
            
            var datos = response.resultado; 
    
            console.log(datos);
    
            var camposType = [
                { name: 'NombreEquipo', type: 'string' },
                { name: 'PTS', type: 'string' },
                { name: 'J', type: 'string' },
                { name: 'JG', type: 'string' },
                { name: 'JE', type: 'string' },
                { name: 'JP', type: 'string' },
            ];
    
            var columnas = [
                { text: 'Nombre del equipo', datafield: 'NombreEquipo', width: '17%', editable: false },
                { text: 'PTS', datafield: 'PTS', width: '16.6%', editable: false },
                { text: 'J', datafield: 'J', width: '16.6%', editable: false },
                { text: 'JG', datafield: 'JG', width: '16.6%', editable: false },
                { text: 'JE', datafield: 'JE', width: '16.6%', editable: false },
                { text: 'JP', datafield: 'JP', width: '16.6%', editable: false },
            ];
    
            var source = {
                localdata: datos,
                datatype: 'array',
                datafields: camposType
            };
    
            var dataAdapter = new $.jqx.dataAdapter(source);
            $('#greed').jqxGrid({
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
}