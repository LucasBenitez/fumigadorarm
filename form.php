<?php
$name = $_POST['nombre'];
$email = $_POST['email'];
$phone = $_POST['telephone'];
$msg = $_POST['message'];

$servername = "localhost";
$database = "c1720910_FUMI_DB";
$username = "c1720910_FUMI_DB";
$password = "rusoKAdo03";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$insert = "INSERT INTO contact_form(name, email, phone,msg) VALUES ('$name', '$email', '$email', '$phone', '$msg')";

$result = mysqli_query($conn, $insert)
if(!$result){
    echo 'Error al insertar datos'
}else{
    echo "<script>
    window.history.go(-1);
    </script>";
}
mysqli_close($conn); 
>