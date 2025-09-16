<?php

$config = parse_ini_file($rootDir . "../" . '.env');

$servername = $config["DBADDRESS"];
$dbname = $config["DBNAME"];
$username = $config["DBUSER"];
$password = $config["DBPASS"];

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

} catch(PDOException $e) {
    echo "Connection has failed: " . $e->getMessage();
}