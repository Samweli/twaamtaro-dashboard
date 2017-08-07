<!DOCTYPE html>
<html>
<head>
	<title>USSD FORM</title>
</head>
<body>

<?php
 

function displayMenu()
{
    $ussdText = "Karibu Twaa Mtaro. Tafadhali chagua huduma; <br/>
        1. Toa Taarifa<br/>2. Pata Taarifa<br/>3. Omba Msaada<br/>4. Badili Lugha<br/>";  
     echo $ussdText;
}

displayMenu();
?>
<form action="ussd.php" action="GET">
	<input type="text" name="ussdtext"><input type="submit" name="submit">
</form>
</body>
</html>