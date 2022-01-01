<?php
    $name = $_REQUEST['name'];
    $email = $_REQUEST['email'];
    $phone = $_REQUEST['phone'];
    $message = $_REQUEST['message'];
    

    if(empty($name) || empty($email) || empty($phone) || empty($message)){
        echo "Please fill all the filelds.";
    }
    else {
        mail("myathetpaing94@gmail.com", "Just Testing Message", "Phone : $phone\r\n$message", "From: $name<$email>");
        echo "<script type = 'text/javascript'>alert('your message sent successfully');
        window.histroy.log(-1);
        </script>";
    }


?>