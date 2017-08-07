<?php
$firstName = $_POST["firstName"];
$lastName = $_POST["lastName"];
$email = $_POST["email"];
$message = $_POST["message"];

$EmailTo = "gonzalo@digitalhouse.com";
$Subject = "Mensaje del sitio Tecbofilco";

$Body .= "Nombre: ";
$Body .= $firstName;
$Body .= "\n";

$Body .= "Apellido: ";
$Body .= $lastName;
$Body .= "\n";

$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";

$Body .= "Mensaje: ";
$Body .= $message;
$Body .= "\n";

$resp = $_POST['g-recaptcha-response'];

$url = "https://www.google.com/recaptcha/api/siteverify?secret=6Lfp1SsUAAAAABFF15lJBDVRMAwZ0RNyxRGmgL1j&response=$resp";

$result = file_get_contents($url, false);

$end = JSON_decode($result);

if ($end->success === true) {
  mail($EmailTo, $Subject, $Body, "From:".$email);
}

?>
