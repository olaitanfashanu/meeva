<?php
$servername = "Localhost";
$username = "root";
$password = "School123!";
$dbname = "meeva";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$name = $_POST['name'];
$email = $_POST['email'];

$sql = "INSERT INTO user_data (name, email) VALUES (?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssi", $name, $email);
$stmt->execute();

$stmt->close();
$conn->close();
?>