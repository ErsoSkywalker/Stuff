<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require '../vendor/autoload.php';

$host = "localhost";
$db = "TorneosFut";
$user = "root";
$password = "";

// Conexión a la base de datos
$conn = new PDO("mysql:host=$host;dbname=$db", $user, $password);

// Obtener el correo electrónico del formulario
$email = $_POST['email'];

// Verificar si el correo electrónico existe en la base de datos
$stmt = $conn->prepare("SELECT usuario_user FROM master_usuario WHERE usuario_user = :email");
$stmt->bindParam(':email', $email);
$stmt->execute();
$user = $stmt->fetch();

if ($user) {
    // Generar un token único
    $token = bin2hex(random_bytes(50));

    $deleteStmt = $conn->prepare("DELETE FROM restablecertokens WHERE correo = :correo");
    $deleteStmt->bindParam(':correo', $email);
    $deleteStmt->execute();

    // Insertar el token en la tabla de restablecimiento de contraseña
    $stmt = $conn->prepare("DELETE * FORM restablecertokens");
    $stmt = $conn->prepare("INSERT INTO restablecertokens (correo, token, fecha_expiracion) VALUES (:correo, :token, DATE_ADD(NOW(), INTERVAL 1 HOUR))");
    $stmt->bindParam(':correo', $email);
    $stmt->bindParam(':token', $token);
    $stmt->execute();

    // Enviar un correo electrónico con el enlace de restablecimiento usando PHPMailer
    $mail = new PHPMailer(true);

    try {
        // Configurar los parámetros SMTP
	
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com'; 
        $mail->SMTPAuth = true;
        $mail->Username = 'avendano.huerta.erick.daniel@gmail.com';  // Cambiar a tu dirección de correo 	$mail->Password   = 'eqiz eamb cwma xsdy';                               //SMTP password
        $mail->Password   = 'eqiz eamb cwma xsdy';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
        $mail->Port       = 465;  
        $mail->setFrom('avendano.huerta.erick.daniel@gmail.com', 'Equipo de la Bombonera');
        $mail->addAddress($email);
        
        $mail->isHTML(true);
        $mail->Subject = 'Restablecer Contraseña';
        $mail->Body = "Para restablecer tu contraseña, haz clic en el siguiente enlace: http://localhost/upiicsa/Admifut/clases/rcc.php?token=$token";

        $mail->send();
        echo "Se ha enviado un enlace de restablecimiento a tu correo electrónico, ve a tu correo electronico y accede al link que te enviamos, no compartas este link con nadie.";
    } catch (Exception $e) {
        echo "Error al enviar el correo: {$mail->ErrorInfo}";
    }
} else {
    echo "El correo electrónico no existe en nuestra base de datos.";
}

// Cierra la conexión
$conn = null;
?>
