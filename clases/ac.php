<?php
$host = "localhost";
$db = "TorneosFut";
$user = "root";
$password = "";

// Conexión a la base de datos con configuración de codificación de caracteres
$conn = new PDO("mysql:host=$host;dbname=$db;charset=utf8", $user, $password);
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtener los datos del formulario
    $email = $_POST['email'];
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm_password'];

    if ($password == $confirm_password) {
        // Verificar si el correo electrónico existe en la base de datos
        $stmt = $conn->prepare("SELECT usuario_user FROM master_usuario WHERE usuario_user = :email");
        $stmt->bindParam(':email', $email);
        $stmt->execute();
        $user_id = $stmt->fetchColumn();

        if ($user_id) {
            // El correo electrónico es válido, actualizar la contraseña en la tabla master_usuario
            $stmt_update = $conn->prepare("UPDATE master_usuario SET usuario_pass = :password WHERE usuario_user = :user_id");
            $stmt_update->bindParam(':password', $password);  // Guardar la contraseña tal como se proporciona
            $stmt_update->bindParam(':user_id', $user_id);
            $stmt_update->execute();
            header("Location: http://localhost/upiicsa/AdmiFut/");

            // Redirigir con mensaje de éxito

        } else {
            // Redirigir con mensaje de error (correo electrónico no existe)
            header("Location: reset_password_form.php?error=El correo electrónico no existe en nuestra base de datos.");
            exit();
        }
    } else {
        // Redirigir con mensaje de error (contraseñas no coinciden)
        header("Location: reset_password_form.php?error=Las contraseñas no coinciden. Inténtalo de nuevo.");
        exit();
    }
}
?>
