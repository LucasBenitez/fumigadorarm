<?php
    include('database.php');

    if(isset($_POST['name'])){
        $name = $_POST['name'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $message = $_POST['message'];

        $query = "INSERT into contaco(name,email,phone,message) VALUES ('$name','$email', '$phone','$message')";
        $result = mysqli_query($connection, $query);
        if(!$result){
            die('Error en la consulta '. mysqli_error($connection));
        }
        echo 200;
    }

?>