document.addEventListener('DOMContentLoaded', function () {
    const torneoForm = document.getElementById('torneoForm');
    const siguienteBtn = document.getElementById('siguienteBtn');
    $("#finalizarBtn").hide();
    $("#torneo").hide();
    siguienteBtn.addEventListener('click', function () {
        // Recopilar datos del formulario
        const nombreTorneo = document.getElementById('nombreTorneo').value;
        const fechaInicio = document.getElementById('fechaInicio').value;
        const fechaFin = document.getElementById('fechaFin').value;

        // Puedes realizar acciones con los datos, como enviarlos a un servidor o mostrarlos en una alerta
        const mensaje = `Nombre del Torneo: ${nombreTorneo}\nFecha de Inicio: ${fechaInicio}\nFecha de Fin: ${fechaFin}`;
        armar_html($("#cuantosequipos").val());
        // Limpia el formulario después de enviar
        $(this).hide();
        $("#finalizarBtn").show();
    });
    function armar_html(datos){
        $("#torneo").show();
        $("#torneoForm").hide();
        let html='<div id="id_snippet">'+
        '<div id="equipo">';
var n=0
var j=datos
for(n; n<j;n++){
    html +='<input type="text" id="" name="" class="inputequipos campos" fila="'+datos+'" equipo="'+n+'" readonly>'+
    '<div class="inputid comboequipos campos" fila="'+datos+'" equipo="'+n+'" hidden></div>';
    '<input type="text" id="" name="" class="inputid" fila="'+datos+'" equipo="'+n+'" hidden>';
}html +='</div>'+
'<div id="botones">'+
'<button type="button" id="gnrauto" class="botones">Automatico</button>'+
'<button type="button" id="gnrmanual" class="botones">Manual</button>'+
'</div>'+
'<div>'+
'<button type="button" id="finalizarBtn" class="botones">Finalizar</button>'+
'</div>'+
'</div>';
        $("#tablastorneo").append(html);
        return html;        
    }
});

/*
for(n; n<=j;n++){
for (i=1;i<=n;i++){
if(n == 1 || n == 2 || n == 4 || n == 8){
    html +='<input type="text" id="" name="" class="inputequipos" fila="'+n+'">';
}
}
if(n == 1 || n == 2 || n == 4 || n ==8){
    html +="<br/>";
}
}
*/
$(document).on('click', '#gnrauto', function(event) {
    var datos = $("#cuantosequipos").val();
    generaraleatoreo(datos);
});
function generaraleatoreo(datos){
    $.ajax({
        url: '../clases/peticiones.php',
        method: 'POST',
        data: { accion:"generarautomatico",limite:datos},
        dataType: 'json',
        success: function (response) {           
            var datos = response.resultado; 
            $.each(datos , function (index, value){
            $(".inputequipos[equipo="+index+"]").val(value.Nombre_equipo);
            });
    
        },
        error: function () {
            
            console.error('Error al cargar los datos.');
        }
    });
}
$(document).on('click', '#gnrmanual', function(event) {
    $(".comboequipos").show();
    $.ajax({
        url: '../clases/peticiones.php',
        method: 'POST',
        data: { accion:"consultar"},
        dataType: 'json',
        success: function (response) {
            var datos = response.resultado;
            var combo = "<select id='equiposc' name='equiposc' class='combo'><option value=0 > Seleccionar Equipo </option>";
            $.each(datos , function (index, value){
                combo += "<option value='" + value.Nombre_equipo + "'>" + value.Nombre_equipo + " </option>";
            });
            combo += "</select>";
            $(".comboequipos").empty().html( combo );
        },
        error: function () {        
            console.error('Error al cargar los datos.');
        }
    });
});
$(document).on('change', '.combo', function(event) {
    let id=$(this).parent().attr('equipo');
    $(".inputequipos[equipo="+id+"]").val($(this).val());
});
$(document).on('click', '#finalizarBtn', function(event) {
    var equipos = [];
    $(".inputequipos").each(function(){
        equipos.push($(this).val());
    });
    var fecini = $("#fechaInicio").val();
    var fecter = $("#fechaFin").val();
    var nombre = $("#nombreTorneo").val();
    var cuantos = $("#cuantosequipos").val();
    $.ajax({
        url: "../clases/peticiones.php",
        method: "POST",
        data: { accion:"agregartorneo",equipos: equipos,fecini:fecini,fecter:fecter,nombre:nombre,cuantos:cuantos},
        success: function (response) {
            alert(response);
        },
        error: function () {
            // Manejo de errores
            console.error("Error al realizar la inserción.");
        }
    });
});