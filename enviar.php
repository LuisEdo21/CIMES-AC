<?php 
	$fecha=date("d-m-Y");
	$hora=date("H:i:s");
	$destino="luisedo21@gmail.com";
	$asunto="Inscripción al CIMES";
	$desde = 'From: ' .$_POST[correoelectronico];
	$comentario = "
		\n
		Nombre: $_POST[nombre]\n
		Apellidos: $_POST[apellidos]\n
		Calle: $_POST[calle]\n
		Número exterior: $_POST[numero]\n
		Número interior: $_POST[numeroint]\n
		Colonia: $_POST[colonia]\n
		Ciudad: $_POST[ciudad]\n
		Teléfono fijo: $_POST[telefonocasa]\n
		Teléfono celular: $_POST[celular]\n
		Correo electrónico: $_POST[correoelectronico]\n
		Enviado: $fecha a las $hora\n
		\n
	";
	mail($destino, $asunto, $comentario, $desde);

	header('Location: index.html');
?>