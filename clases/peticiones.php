<?php
include_once("funciones.php");
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Verifica si se proporciona el parámetro "accion" en la solicitud
    if (isset($_POST["accion"])) {
        $accion = $_POST["accion"];
        $miClase = new funciones();

        switch ($accion) {
            case "consultar":
                $resultado = $miClase->consultar();
                break;
            case "consultarjugador":
                $resultado = $miClase->consultarjugador();
                break;
            case "consultartrabajador":
                $resultado = $miClase->consultartrabajador();
                break;
            case "agregar":
                $nombre = $_POST["nombre"];
                $fecha = $_POST["fecha"];
                $adeudos = $_POST["adeudos"];
                $incidencias = $_POST["incidencias"];
                $resultado = $miClase->agregar($nombre, $fecha, $adeudos, $incidencias);
                echo $resultado;
                break;
            case "eliminar":
                $id = $_POST["nombre"];
                $resultado = $miClase->eliminar($id);
                break;
            case "consultarespecifico":
                $nombre = $_POST["nombre"];
                $resultado = $miClase->consultarespecifico($nombre);
                break;
            case "consultarjugadorespecifico":
                $nombre = $_POST["id"];
                $resultado = $miClase->consultarespecificojugador($nombre);
                break;
            case "consultartrabajadorespecifico":
                $nombre = $_POST["id"];
                $resultado = $miClase->consultarespecificotrabajador($nombre);
                break;
            case "generarautomatico":
                $limite = $_POST["limite"];
                $resultado = $miClase->generarautomatico($limite);
                break;
            case "modificarquipo":
                $id = $_POST["id"];
                $nombre = $_POST["nombre"];
                $fecha = $_POST["fecha"];
                $resultado = $miClase->modificarquipo($id, $nombre, $fecha);
                break;
            case "modificaradeudoquipo":
                $id = $_POST["id"];
                $total = $_POST["total"];
                $resultado = $miClase->modificaradeudoquipo($id, $total);
                break;
            case "agregarjugador":
                $nombre = $_POST["nombre"];
                $posicion = $_POST["posicion"];
                $edad = $_POST["edad"];
                $telefonos = $_POST["telefonos"];
                $correo = $_POST["correo"];
                $equipo = $_POST["equipo"];
                $resultado = $miClase->AgregarJugador($nombre, $posicion, $edad, $telefonos, $correo, $equipo);
                break;
            case "agregartrabajador":
                $nombre = $_POST["nombre"];
                $puesto = $_POST["puesto"];
                $telefono = $_POST["telefono"];
                $correo = $_POST["correo"];
                $resultado = $miClase->AgregarTrabajador($nombre, $puesto, $telefono, $correo);
                break;
            case "modificartrabajador":
                $id = $_POST["id"];
                $nombre = $_POST["nombre"];
                $puesto = $_POST["puesto"];
                $telefono = $_POST["telefono"];
                $correo = $_POST["correo"];
                $resultado = $miClase->modificartrabajador($id, $nombre, $puesto, $telefono, $correo);
                break;
            case "eliminarjugador":
                $nombre = $_POST["nombre"];
                $resultado = $miClase->eliminarjugador($nombre);
                break;
            case "eliminartrabajador":
                $nombre = $_POST["id"];
                $resultado = $miClase->eliminartrabajador($nombre);
                break;
            case "modificarjugador":
                $id = $_POST["id"];
                $nombre = $_POST["nombre"];
                $posicion = $_POST["posicion"];
                $edad = $_POST["edad"];
                $telefonos = $_POST["telefonos"];
                $correo = $_POST["correo"];
                $equipo = $_POST["equipo"];
                $resultado = $miClase->modificarjugador($id, $nombre, $posicion, $edad, $telefonos, $correo, $equipo);
                break;
            case "modificartorneo":
                $id = $_POST["id"];
                $nombre = $_POST["nombre"];
                $fecini = $_POST["fecini"];
                $fecter = $_POST["fecter"];
                $resultado = $miClase->modificartorneo($id, $nombre, $fecini, $fecter);
                break;
            case "agregartorneo":
                $nombre = $_POST["nombre"];
                $fecini = $_POST["fecini"];
                $fecter = $_POST["fecter"];
                $cuantos = $_POST["cuantos"];
                $equipos = $_POST["equipos"];
                $resultado = $miClase->agregartorneo($nombre, $fecini, $fecter, $cuantos, $equipos);
                break;
            case "agregarinfopartido":
                $idpartido = $_POST["idpartido"];
                $nombrepartido = $_POST["nombrepartido"];
                $goleseq1 = $_POST["goleseq1"];
                $goleseq2 = $_POST["goleseq2"];
                $faltaseq1 = $_POST["faltaseq1"];
                $faltaseq2 = $_POST["faltaseq2"];
                $ganador = $_POST["ganador"];
                $resultado = $miClase->agregarinfopartido($idpartido, $nombrepartido, $goleseq1, $goleseq2, $faltaseq1,$faltaseq2,$ganador);
                break;
            case "consultartorneo":
                $resultado = $miClase->consultartorneo();
                break;
            case "consultarpartidos":
                $resultado = $miClase->consultarpartidos();
                break;
            case "consultarmarcador":
                $resultado = $miClase->consultarmarcador();
                break;
            case "consultaradeudos":
                $resultado = $miClase->consultaradeudos();
                break;
            case "consultartorneoespecifico":
                $nombre = $_POST["id"];
                $resultado = $miClase->consultarespecificotorneo($nombre);
                break;
            case "iniciarsession":
                $usuario = $_POST["usuario"];
                $contraseña = $_POST["contraseña"];
                $resultado = $miClase->iniciarsession($usuario,$contraseña);
                break;
            case "consultarsession":
                $resultado = $miClase->consultarsession();
                break;
            case "cerrarsession":
                $resultado = $miClase->cerrarsession();
                break;
                
            default:
                $resultado = "Acción no válida";
                break;

        }

        // Devuelve el resultado como respuesta JSON
        echo json_encode(["resultado" => $resultado]);
    } else {
        echo "Falta el parámetro 'accion' en la solicitud.";
    }
} else {
    echo "Método de solicitud no válido.";
}
function debug_to_console($data)
{
    $output = $data;
    if (is_array($output))
        $output = implode(',', $output);

    echo "<script>console.log('Debug Objects: " . $output . "' );</script>";
}
?>