<?php
$firstName = $_POST["firstName"];
$lastName = $_POST["lastName"];
$email = $_POST["email"];
$message = $_POST["message"];

$EmailTo = "info@tecbofilco.com";
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

mail($EmailTo, $Subject, $Body, "From:".$email);
?>