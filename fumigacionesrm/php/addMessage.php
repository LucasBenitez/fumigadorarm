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

        $email_to = "contacto@fumigacionesrm.com.ar";
        $content = "Nombre: " . $name . "\nEmail: " . $email . "\nTelefono: " . $phone . "\nMensaje: " . $message;
        mail($email_to,"CONTACTO DESDE FUMIGACIONESRM.COM.AR", $content);
        
        echo 200;
    }

?>