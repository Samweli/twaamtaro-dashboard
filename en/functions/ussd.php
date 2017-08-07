<?php
include 'dbcon.php';
//$phonenumber = $_GET['MSISDN'];  
//$sessionID = $_GET['sessionId'];  
//$servicecode = $_GET['serviceCode'];  
$ussdString = $_GET['ussdtext']; 

include 'ussduser.php';

function ussd_next ($ussdText){  
    echo $ussdText;  
} 

 function displayMenu()
{
    $ussdText = "Karibu Twaa Mtaro. Tafadhali chagua huduma; <br/>
        1. Toa Taarifa<br/>2. Pata Taarifa<br/>3. Omba Msaada<br/>4. Badili Lugha<br/>";  
    ussd_next($ussdText);   
}
 function updateDrainStatus()
{
    
}
 function getInfoDrain()
{
    echo $infoDrain;
}
 function getInfoCollaborators()
{
    echo $collaboratorName;
}
 function getInfoStatus()
{
    echo $drainLocalStatus;
    echo $drainGlobalStatus;
}
   
switch ($ussdString) {
    case '1':
        updateDrainStatus();
        break;
    case '2':
        getInfoDrain();
        break;
    case '3':
        getInfoCollaborators();
        break;
    
    default:
        echo "Hatukujui atii!!!";
        break;
}



?>
<!-- Assumption is made that the session ID is the phone number with a country code 