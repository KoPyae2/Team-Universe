<?php
    
    $subemail = $_REQUEST['subemail'];
    $subscribe = $_REQUEST['subscribe'];


    if(empty($subemail)){
        echo "Please fill your email address.";
    }
    else{
        mail("myathetpaing94@gmail.com", "Just Testing Message", "SubscribeFrom : <$subemail>");
        echo "<script type = 'text/javascript'>alert('you subscribed successfully');
        window.histroy.log(-1);
        </script>";
    }


?>