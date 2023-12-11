<?php
// Conexión a la base de datos (reemplaza con tus credenciales)
$host = "localhost";
$db = "TorneosFut";
$user = "root";
$password = "";
$conn = new PDO("mysql:host=$host;dbname=$db", $user, $password);

// Obtener el token de la URL
$token = $_GET['token'];

// Verificar si el token es válido y no ha expirado
$stmt = $conn->prepare("SELECT correo FROM restablecertokens WHERE token = :token AND fecha_expiracion > NOW()");
$stmt->bindParam(':token', $token);
$stmt->execute();
$result = $stmt->fetch();

if ($result) {
    // El token es válido, permitir al usuario restablecer la contraseña
    // Puedes redirigir a una página donde el usuario pueda ingresar su nueva contraseña
    // y actualizarla en la base de datos
    header("Location: http://localhost/upiicsa/Admifut/contenido/restablecercontrasenaconfirmacion.html");

} else {
    echo "El enlace de restablecimiento de contraseña no es válido o ha expirado.";
}
?>
