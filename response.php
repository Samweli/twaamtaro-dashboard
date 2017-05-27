<?php
    header("content-type: text/xml");
    echo "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";


    include_once 'twiliosettings.php';


    $msg = $client->messages("MM800f449d0399ed014aae2bcc0cc2f2ec")->fetch();
    $msgstr = $msg->body;
    $msgsender = $msg->from;
    
    if ((strrchr($msgstr, 'msaada')) != null)
     	{
     		$sql = "SELECT * FROM adopted_drains WHERE (SELECT id FROM citizen WHERE phone ='$msgsender')"; 
     		$sqlqry = mysqli_query($dbcon, $sql) or die(mysqli_error());
     		$sqlarr = mysqli_fetch_array($sqlqry);
     		$sl = $sqlarr['streetleader'];

     		$slqry = mysqli_query($dbcon, "SELECT * FROM sl WHERE $sl ='$msgsender'") or die(mysqli_error());
 			$slarr = mysqli_fetch_array($slqry);

 			$slmobile = $slarr['mobile'];

 			$sms = $client->account->messages->create(
                $number,
                array(
                    'from' => "Twaa Mtaro", 
                    'body' => "Habari, mwananchi mwenye namba ".$$msgsender." ametuma ujumbe kwamba anahitaji msaada kusafisha mtaro wake "
                )
            );
?>

    <Response>
    	<Message>Habari, taarifa yako imefika, mwenyekiti wako wa mtaa ametaarifiwa kwa ujumbe na atakuja kukagua mtaro ili kujua jinsi gani anaweza kukupatia msaada</Message>
	</Response>

<?php

        } elseif (((strrchr($msgstr, 'nimesafisha')) != null)) {

?> 
	<Response>
	    <Message>Habari, Asante kwa kufanya usafi katika mtaro wako </Message>
	</Response>

<?php
        } else 
        {
            echo "Taarifa kuhusu mtaro haijamfikia ".$mobile;
?>
    <Response>
	    <Message>Habari, Asante kwa kufanya usafi katika mtaro wako </Message>
	</Response>  
<?php        
}    	


    //'''''' === ;;; ))))))))



    //If message contains msaada, respond with help is coming send a message to SL about it, update the db

    //If message says nimesafisha, fetch senders number search from database link it to a drain then update the db, notify the citizen that his udate has been received

    //if message contains i
?>
<Response>
    <Message>Habari, taarifa yako imefika, mwenyekiti wako wa mtaa ametaarifiwa kwa ujumbe na atakuja kukagua mtaro ili kujua jinsi gani anaweza kukupatia msaada</Message>
</Response>

<Response>
    <Message>Habari, Asante kwa kufanya usafi katika mtaro wako </Message>
</Response>

