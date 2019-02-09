<?
if((isset($_POST['login'])&&$_POST['email']&&$_POST['adress']&&$_POST['tel']!="")&&(isset($_POST['coments'])&&$_POST['coments']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'zeliksirj@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Новый отзыв на сайте!!!'; //Заголовок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['login'].'</p>
                        <p>E-mail: '.$_POST['email'].'</p>
                        <p>Адрес: '.$_POST['adress'].'</p>
                        <p>Телефон: '.$_POST['tel'].'</p>
                        <p>Отзыв: '.$_POST['coments'].'</p>
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Отправитель <zeliksirj@gmail.com>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}
?>
