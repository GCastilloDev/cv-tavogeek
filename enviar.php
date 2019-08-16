<?php

//LLamando a los campos
$nombre = $_POST["nombre"];
$correo = $_POST["correo"];
$texto = $_POST["texto"];

//Datos para el correo
$destinatario = "gustavoc.mx@gmail.com";
$asunto = "Contacto desde la web";

$carta = "De: $nombre \n";
$carta .= "Correo: $correo \n";
$carta .= "Texto: $texto";

//Enviando mensaje
mail($destinatario, $asunto, $carta);

echo'<script type="text/javascript">
        alert("Enviado con éxito!");
        window.location.href="index.html";
        </script>';
?>