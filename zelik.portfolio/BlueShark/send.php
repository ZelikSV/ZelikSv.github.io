<?
if((isset($_POST['login'])&&$_POST['login']!="")&&(isset($_POST['coments'])&&$_POST['coments']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'emzil@rambler.ru'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Новый отзыв на сайте!!!'; //Заголовок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['login'].'</p>
                        <p>E-mail: '.$_POST['email'].'</p>
                        <p>Отзыв: '.$_POST['coments'].'</p>                       
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Отправитель <emzil@rambler.ru>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}
?>
