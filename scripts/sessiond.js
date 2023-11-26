$(document).ready(function () {
    $("#cerrarsessionbtn").hide();
    $.ajax({
        url: '../clases/peticiones.php',
        method: 'POST',
        data: { accion:"consultarsession"},
        dataType: 'json',
        success: function (response) {
            if(!response.resultado){
                $(".escondido").hide();
            }else{
                $("#iniciosession").hide();
                $("#cerrarsessionbtn").show();
            }
        },
        error: function () {        
            console.error('Error al cargar los datos.');
        }
    });
    $(document).on('click', '#iniciosessionbtn', function(event) {
    let usuario=$("#usuario").val();
    let contraseña=$("#contraseña").val();
    if(usuario !== "" && contraseña !== ""){
        $.ajax({
            url: '../clases/peticiones.php',
            method: 'POST',
            data: { accion:"iniciarsession",usuario:usuario,contraseña:contraseña},
            dataType: 'json',
            success: function (response) {
                alert(response.resultado);
                location.reload();
            },
            error: function () {        
                console.error('Error al cargar los datos.');
            }
        });
    }else{
        alert("Ingresa usuario o contraseña");
    }
    });
    $(document).on('click', '#cerrarsessionbtn', function(event) {
        $.ajax({
            url: '../clases/peticiones.php',
            method: 'POST',
            data: { accion:"cerrarsession"},
            dataType: 'json',
            success: function (response) {
                alert(response.resultado);
                location.reload();
            },
            error: function () {        
                console.error('Error al cargar los datos.');
            }
        });
    });
});//ready