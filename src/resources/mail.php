<?php
$to = "makeev.gleb@yandex.ru";
$tema = "Форма обратной связи с сайта";
$message = "<b>Имя: </b>".$_POST['name']."<br>";
/*$message .= "E-mail: ".$_POST['email']."<br>";*/
$message .= "<b>Номер телефона:</b> ".$_POST['number']."<br>";
$message .= "<b>Сообщение:</b> ".$_POST['text']."<br>";
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
mail($to, $tema, $message, $headers);
?>
