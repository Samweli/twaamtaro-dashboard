<?php
try {
$dbuser = 'postgres';
$dbpass = 'nancy';
$host = 'localhost';
$dbname = 'mitaroKigogo';

$dbcon = new PDO("pgsql:host=$host;dbname=$dbname", $dbuser, $dbpass);
}catch (PDOException $e) {
echo "Error : " . $e->getMessage() . "<br/>";
die();
}

?>