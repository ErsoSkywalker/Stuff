<?php
class funciones{
    private $conexion;

    public function __construct(){
        // Constructor: Establece la conexión a la base de datos
        $this->conexion = new mysqli("localhost", "root", "", "TorneosFut");
        if ($this->conexion->connect_error) {
            die("Error de conexión: " . $this->conexion->connect_error);
        }

    }
    public function consultarmarcador(){
        $query = "SELECT ip.goleseq1 AS G1,ip.goleseq2 AS g2,p.NombreEquipo1 as ne1,p.NombreEquipo2 as ne2 from infopartidos ip
        inner join partidos p on p.partidos_id = ip.partidos_id;";

        $resultado = $this->conexion->query($query);

        if (!$resultado) {
            die("Error en la consulta: " . $this->conexion->error);
        }
        $datos = array();
        while ($fila = $resultado->fetch_assoc()) {
            $datos[] = $fila;
        }
        $this->conexion->close();
        header('Content-Type: application/json');
        return $datos;
    }
    public function consultar(){
        $query = "SELECT Nombre_equipo, Fecha_registro, Adeudos, Incidencias FROM Equipo";

        $resultado = $this->conexion->query($query);

        if (!$resultado) {
            die("Error en la consulta: " . $this->conexion->error);
        }
        $datos = array();
        while ($fila = $resultado->fetch_assoc()) {
            $datos[] = $fila;
        }
        $this->conexion->close();
        header('Content-Type: application/json');
        return $datos;
    }
    public function consultartrabajador(){
        $query = "SELECT trabajadores_id,NombreTrabajador,Telefono,Puesto,correo FROM trabajadores;";

        $resultado = $this->conexion->query($query);

        if (!$resultado) {
            die("Error en la consulta: " . $this->conexion->error);
        }
        $datos = array();
        while ($fila = $resultado->fetch_assoc()) {
            $datos[] = $fila;
        }
        $this->conexion->close();
        header('Content-Type: application/json');
        return $datos;
    }
    public function consultarjugador(){
        $query = "SELECT jugador_id,NombreJugador,Posicion,Edad,Telefono_de_contacto,correo,equipo FROM jugadores;";

        $resultado = $this->conexion->query($query);

        if (!$resultado) {
            die("Error en la consulta: " . $this->conexion->error);
        }
        $datos = array();
        while ($fila = $resultado->fetch_assoc()) {
            $datos[] = $fila;
        }
        $this->conexion->close();
        header('Content-Type: application/json');
        return $datos;
    }
    public function consultarmensajes(){
        $query = "select concat('El equipo ',Nombre_equipo,' tiene un adeudo') as mensaje from equipo where Adeudos >0;";

        $resultado = $this->conexion->query($query);

        if (!$resultado) {
            die("Error en la consulta: " . $this->conexion->error);
        }
        $datos = array();
        while ($fila = $resultado->fetch_assoc()) {
            $datos[] = $fila;
        }
        $this->conexion->close();
        header('Content-Type: application/json');
        return $datos;
    }
    public function consultarespecifico($nombre){
        $query = "SELECT Nombre_equipo, Fecha_registro, Adeudos, Incidencias FROM Equipo where Nombre_equipo = '$nombre' ";

        $resultado = $this->conexion->query($query);

        if (!$resultado) {
            die("Error en la consulta: " . $this->conexion->error);
        }
        $datos = array();
        while ($fila = $resultado->fetch_assoc()) {
            $datos[] = $fila;
        }
        $this->conexion->close();
        header('Content-Type: application/json');
        return $datos;
    }
    public function consultarespecificotrabajador($id){
        $query = "SELECT trabajadores_id,NombreTrabajador,Telefono,Puesto,correo FROM trabajadores WHERE trabajadores_id =  '$id' ";

        $resultado = $this->conexion->query($query);

        if (!$resultado) {
            die("Error en la consulta: " . $this->conexion->error);
        }
        $datos = array();
        while ($fila = $resultado->fetch_assoc()) {
            $datos[] = $fila;
        }
        $this->conexion->close();
        header('Content-Type: application/json');
        return $datos;
    }
    public function consultarespecificojugador($nombre){
        $query = "SELECT * FROM jugadores WHERE NombreJugador = '$nombre' ";

        $resultado = $this->conexion->query($query);

        if (!$resultado) {
            die("Error en la consulta: " . $this->conexion->error);
        }
        $datos = array();
        while ($fila = $resultado->fetch_assoc()) {
            $datos[] = $fila;
        }
        $this->conexion->close();
        header('Content-Type: application/json');
        return $datos;
    }
    public function agregar($nombre, $email, $adeudos, $incidencias){
        // Prepara la consulta SQL para la inserción
        $query = $this->conexion->prepare("INSERT INTO Equipo(Nombre_equipo,Fecha_registro,Adeudos,Incidencias) VALUES ('$nombre', '$email','$adeudos','$incidencias')");
        $res = $query->execute();
        if ($res) {
            return "Datos ingresados con exito.";
        } else {
            return "Error al ingresar los datos: " . $query->error;
        }
    }

    public function eliminar($id){
        $query = $this->conexion->prepare("DELETE FROM equipo WHERE nombre_equipo = '$id'");
        $res = $query->execute();
        if ($res) {
            return "Equipo eliminado con exito.";
        } else {
            return "Error al eliminar los datos: " . $query->error;
        }
    }
    public function modificarquipo($id, $nombre, $fecha){
        $query = $this->conexion->prepare("update equipo set nombre_equipo = '$nombre',fecha_registro = '$fecha' where nombre_equipo = '$id'");
        $res = $query->execute();
        if ($res) {
            return "Equipo actualizado con exito.";
        } else {
            return "Error al actualizar los datos: " . $query->error;
        }
    }
    public function modificaradeudoquipo($id, $total){
        $query = $this->conexion->prepare("update equipo set Adeudos = '$total' where nombre_equipo = '$id'");
        $res = $query->execute();
        if ($res) {
            return "Equipo actualizado con exito.";
        } else {
            return "Error al actualizar los datos: " . $query->error;
        }
    }
    public function AgregarTrabajador($nombre, $puesto, $telefono, $correo){
        $query = $this->conexion->prepare("INSERT INTO trabajadores(NombreTrabajador,Telefono,Puesto,correo) 
        VALUES('$nombre','$telefono','$puesto','$correo');");
        $res = $query->execute();
        if ($res) {
            return "Datos ingresados con exito.";
        } else {
            return "Error al ingresar los datos: " . $query->error;
        }
    }
    public function agregarinfopartido($idpartido, $nombrepartido, $goleseq1, $goleseq2, $faltaseq1,$faltaseq2,$ganador){
        $query = $this->conexion->prepare("INSERT INTO infopartidos(partidos_id,NombrePartido,goleseq1,goleseq2,Faltaseq1,Faltaseq2,equipoganador)
        VALUES('$idpartido','$nombrepartido','$goleseq1','$goleseq2','$faltaseq1','$faltaseq2','$ganador');");
        $res = $query->execute();
        if ($res) {
            return "Datos ingresados con exito.";
        } else {
            return "Error al ingresar los datos: " . $query->error;
        }
    }
    public function AgregarJugador($nombre, $posicion, $edad, $telefonos, $correo, $equipo){
        $query = $this->conexion->prepare("INSERT INTO jugadores(NombreJugador,
        Posicion,
        Edad,
        Telefono_de_contacto,
        correo,
        equipo)
        VALUES ('$nombre','$posicion','$edad','$telefonos','$correo','$equipo')");
        $res = $query->execute();
        if ($res) {
            return "Datos ingresados con exito.";
        } else {
            return "Error al ingresar los datos: " . $query->error;
        }
    }
    public function eliminartrabajador($id){
        $query = $this->conexion->prepare("DELETE FROM trabajadores WHERE trabajadores_id = '$id'");
        $res = $query->execute();
        if ($res) {
            return "Equipo eliminado con exito.";
        } else {
            return "Error al eliminar los datos: " . $query->error;
        }
    }
    public function eliminarjugador($id){
        $query = $this->conexion->prepare("DELETE FROM jugadores WHERE jugador_id = '$id'");
        $res = $query->execute();
        if ($res) {
            return "Equipo eliminado con exito.";
        } else {
            return "Error al eliminar los datos: " . $query->error;
        }
    }
    public function modificartorneo($id, $nombre, $fecini, $fecfin){
        $query = $this->conexion->prepare("UPDATE torneo set NombreTorneo = '$nombre',Fecha_inicio = '$fecini',Fecha_fin = '$fecfin' where torneo_id = '$id';");
        $res = $query->execute();
        if ($res) {
            return "Equipo actualizado con exito.";
        } else {
            return "Error al actualizar los datos: " . $query->error;
        }
    }
    public function modificarjugador($id, $nombre, $posicion, $edad, $telefono, $correo, $equipo){
        $query = $this->conexion->prepare("UPDATE jugadores set NombreJugador = '$nombre',Posicion = '$posicion',Edad = '$edad', Telefono_de_contacto = '$telefono',correo = '$correo',equipo = '$equipo' where jugador_id = '$id';");
        $res = $query->execute();
        if ($res) {
            return "Equipo actualizado con exito.";
        } else {
            return "Error al actualizar los datos: " . $query->error;
        }
    }
    public function modificartrabajador($id, $nombre, $puesto, $telefono, $correo){
        $query = $this->conexion->prepare("UPDATE trabajadores set NombreTrabajador = '$nombre',Telefono = '$telefono',Puesto = '$puesto',correo = '$correo' where trabajadores_id = '$id';");
        $res = $query->execute();
        if ($res) {
            return "Equipo actualizado con exito.";
        } else {
            return "Error al actualizar los datos: " . $query->error;
        }
    }
    public function generarautomatico($limite){
        $query = "SELECT *
        FROM equipo
        ORDER BY RAND()
        limit $limite;";

        $resultado = $this->conexion->query($query);

        if (!$resultado) {
            die("Error en la consulta: " . $this->conexion->error);
        }
        $datos = array();
        while ($fila = $resultado->fetch_assoc()) {
            $datos[] = $fila;
        }
        $this->conexion->close();
        header('Content-Type: application/json');
        return $datos;
    }
    public function agregartorneo($nombre,$fecini,$fecter,$cuantos,$equipos){
        $query = $this->conexion->prepare("INSERT INTO torneo(NombreTorneo,Fecha_inicio,Fecha_fin,No_de_equipos)VALUES('$nombre','$fecini','$fecter','$cuantos');");
        $res = $query->execute();
        if ($res) {
            $queryid = "SELECT LAST_INSERT_ID() AS nuevo_id from torneo;";

            $resultado = $this->conexion->query($queryid);
    
            if (!$resultado) {
                die("Error en la consulta: " . $this->conexion->error);
            }
            
            $fila = $resultado->fetch_assoc();
                $datos = $fila;
                $id = $datos["nuevo_id"];
            foreach ($equipos as $key => $value) {
                $query = $this->conexion->prepare("INSERT INTO equipos_del_torneo(NombreTorneo,torneo_id,NombreEquipo)VALUES('$nombre','$id','$value');");
                $resequipos = $query->execute();
                if($key == 0 || $key == 2 || $key == 4 || $key == 6){
                    $eqa = $equipos[$key];
                    $eqb = $equipos[$key+1];
                    $nompart = $id.$eqa."vs".$eqb;
                    $querypartidos = $this->conexion->prepare("INSERT INTO partidos(torneo_id,NombrePartido,NombreTorneo,NombreEquipo1,NombreEquipo2)
                    VALUES('$id','$nompart','$nombre','$eqa','$eqb');");
                    $querypartidos->execute();
                }
            }
            if ($resequipos && $querypartidos) {
                return "Datos ingresados con exito.";
            } else {
                return "Error al ingresar los datos: " . $query->error;
            }
        } else {
            return "Error al ingresar los datos: " . $query->error;
        }
        
    }
    public function consultaradeudos(){
        $query = "select nombre_equipo,adeudos from equipo";

        $resultado = $this->conexion->query($query);

        if (!$resultado) {
            die("Error en la consulta: " . $this->conexion->error);
        }
        $datos = array();
        while ($fila = $resultado->fetch_assoc()) {
            $datos[] = $fila;
        }
        $this->conexion->close();
        header('Content-Type: application/json');
        return $datos;
    }
    public function consultartorneo(){
        $query = "select * from torneo";

        $resultado = $this->conexion->query($query);

        if (!$resultado) {
            die("Error en la consulta: " . $this->conexion->error);
        }
        $datos = array();
        while ($fila = $resultado->fetch_assoc()) {
            $datos[] = $fila;
        }
        $this->conexion->close();
        header('Content-Type: application/json');
        return $datos;
    }
    public function consultartablasderesultado($id_torneo){
        $query = "SELECT 
        NombreEquipo,
        (SUM(ganado) * 3 + SUM(empate)) AS PTS,
        COUNT(*) AS J,
        SUM(ganado) AS JG,
        SUM(empate) AS JE,
        SUM(perdido) AS JP
    FROM (
        SELECT p.NombreEquipo1 AS NombreEquipo, ip.goleseq1 AS goleseq, ip.faltaseq1 AS faltaseq,
        case when ip.goleseq1 = ip.goleseq2 then 1 else 0 end AS empate,
        case when ip.goleseq1 > ip.goleseq2 then 1 else 0 end AS ganado,
        case when ip.goleseq1 < ip.goleseq2 then 1 else 0 end AS perdido
        FROM infopartidos ip
        INNER JOIN partidos p ON p.NombrePartido = ip.NombrePartido
        UNION ALL
        SELECT p.NombreEquipo2 AS NombreEquipo, goleseq2 AS goleseq, ip.faltaseq2 AS faltaseq,
        case when ip.goleseq1 = ip.goleseq2 then 1 else 0 end AS empate,
        case when ip.goleseq1 < ip.goleseq2 then 1 else 0 end AS ganado,
        case when ip.goleseq1 > ip.goleseq2 then 1 else 0 end AS perdido
        FROM infopartidos ip
        INNER JOIN partidos p ON p.NombrePartido = ip.NombrePartido
        WHERE p.torneo_id = $id_torneo
    ) AS Subquery
    GROUP BY NombreEquipo order by PTS DESC;";

        $resultado = $this->conexion->query($query);

        if (!$resultado) {
            die("Error en la consulta: " . $this->conexion->error);
        }
        $datos = array();
        while ($fila = $resultado->fetch_assoc()) {
            $datos[] = $fila;
        }
        $this->conexion->close();
        header('Content-Type: application/json');
        return $datos;
    }
    public function consultarespecificotorneo($id){
        $query = "SELECT * FROM torneo WHERE torneo_id =  '$id' ";

        $resultado = $this->conexion->query($query);

        if (!$resultado) {
            die("Error en la consulta: " . $this->conexion->error);
        }
        $datos = array();
        while ($fila = $resultado->fetch_assoc()) {
            $datos[] = $fila;
        }
        $this->conexion->close();
        header('Content-Type: application/json');
        return $datos;
    }
    public function consultarpartidos(){
        $query = "select partidos_id as id,torneo_id as torneo,Nombrepartido,NombreTorneo,NombreEquipo1 AS eq1,NombreEquipo2 AS eq2 from partidos;";

        $resultado = $this->conexion->query($query);

        if (!$resultado) {
            die("Error en la consulta: " . $this->conexion->error);
        }
        $datos = array();
        while ($fila = $resultado->fetch_assoc()) {
            $datos[] = $fila;
        }
        $this->conexion->close();
        header('Content-Type: application/json');
        return $datos;
    }
    public function consultarsession(){

        session_start();
        if(isset($_SESSION["loggin"]) && $_SESSION["loggin"] > 0){
            return true;
        }else{
            return false;
        }
    }
    public function iniciarsession($usuario,$pass){
        $user="";
        if(isset($usuario) && $usuario != "") 
        $user = $this->cleanQuery($usuario);

        $contra="";
        if(isset($pass) && $pass != "") 
        $contra = $this->cleanQuery($pass);

        $query = "SELECT * FROM master_usuario WHERE usuario_user = '$user' AND usuario_pass = '$contra';";

        $resultado = $this->conexion->query($query);

        if (!$resultado) {
            die("Error en la consulta: " . $this->conexion->error);
        }
        $res = $resultado->num_rows;
        if($res > 0){
            session_start();
            $_SESSION["loggin"] = 1;
            $mensaje = "Sesion iniciada";
        }else{
            $mensaje = "Sin usuario";
        }
        $this->conexion->close();
        header('Content-Type: application/json');
        return $mensaje;
    }
    public function cerrarsession(){
        session_start();
        $_SESSION['loggin'] = 0;
        session_unset();
        session_destroy();
        header('Content-Type: application/json');
        return "Sesion cerrada";
    }
    public function cleanQuery($string) {
        $string = stripslashes($string);
        if (phpversion() >= '4.3.0') {
	        if(is_array($string)) { 
	            foreach($string as $key => $v) { 
    	            $string[$key] = $this->conexion->real_escape_string($v);
	            } //foreach
	        } else { 
                $string = $this->conexion->real_escape_string($string);
	        } //if
        } else {
            $string = $this->conexion->real_escape_string($string);
        } //if
        return $string;
    } //public cleanQuery
}
?>