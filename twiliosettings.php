<?php 

require_once "Twilio/autoload.php";
    use Twilio\Rest\Client;
    
    $AccountSid = "AC12f20bfa2f6630b53c40266939dab38e";
    $AuthToken = "c2e4f138358a300f07031c7026c9341f";
    $TMsender = "+14256540807";

    //$twaamtaroId = "Twaa Mtaro";

    // Instantiate a new Twilio Rest Client
    $client = new Client($AccountSid, $AuthToken);
    echo "<br>The settings work <br>";

/*-------My Credentials -------

    $AccountSid = "ACf60b1f4135f753ca049b5460c4ac694f";
    $AuthToken = "9a6afc2903aa871ba30d5964109ee796";
    +447490079080

-------Samz Credentials -------   

    $AccountSid = "AC12f20bfa2f6630b53c40266939dab38e";
    $AuthToken = "c2e4f138358a300f07031c7026c9341f";
    +14256540807
*/
?>