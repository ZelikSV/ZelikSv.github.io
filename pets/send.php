<?
if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['email'])&&$_POST['email']!="")){
        $to = 'zeliksv@gmail.com'; 
        $subject = 'Someone send the message to you';
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>E-mail: '.$_POST['email'].'</p>
                        <p>Телефон: '.$_POST['phone'].'</p>
                        <p>Порода кошки: '.$_POST['kind'].'</p>                       
                    </body>
                </html>'; 
        $headers  = "Content-type: text/html; charset=utf-8 \r\n";
        $headers .= "From: Отправитель <zeliksv@gmail.com>\r\n"; 
        mail($to, $subject, $message, $headers);
}
?>