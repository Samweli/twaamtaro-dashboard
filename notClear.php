<?php
 include 'dbcon.php';
 //fetch id of the clicked drain, unclear = yes

    //$sqlDrain = "SELECT * FROM adopted_drains WHERE drainId = $fetchedId ";
    $sqlDrain = "SELECT * FROM adopted_drains";
    $resultDrain = mysqli_query($dbcon,$sqlDrain) or die(mysqli_error('$dbcon'));
    $drainnum_row = mysqli_num_rows($resultDrain);
    $drain_row = mysqli_fetch_array($resultDrain);
    $citizen = $drain_row['citizenId'];

    $sqlCitizen = "SELECT * FROM citizen WHERE id ='$citizen'";
    $result = mysqli_query($dbcon,$sqlCitizen) or die(mysqli_error('$dbcon'));

    $citizen_row = mysqli_fetch_array($result); 
    $mobile = $citizen_row['phone'];
    

//if drain is found, select corresonding citizen
    if( $drainnum_row > 0 ) 
{
     //select citizens phone number
        $number = $citizen_row['phone'];        
  
        include 'twiliosettings.php';
            $sms = $client->account->messages->create(
                $number,
                array(
                    'from' => "+447490079080", 
                    'body' => "Habari, Kiongozi wako ameangalia mtaro wako na kuona kua sio msafi! Tafadhali unaombwa kuusafisha"
                )
            );

            // Display a confirmation message on the screen
            echo "Ujumbe umetumwa kwa namba $number";
            echo $sms->sid;
            $messageId = $client->messages($sms->sid)->fetch();
            /*$messageDelivery = $client->messages($sms->status)->fetch();

            if ($messageDelivery == 'sent') {
                # get SL hone number then send a message to them

                $smsSL = $client->account->messages->create(
                $numberSL,
                array(
                    'from' => "+447490079080", 
                    'body' => "Ujumbe wako umetumwa kwenda namba !".$number
                ));
            } 
            elseif ($messageDelivery == 'delivered') 
            {

                # get SL hone number then send a message to them

                $smsSL = $client->account->messages->create(
                $numberSL,
                array(
                    'from' => "+447490079080", 
                    'body' => "Ujumbe wako umefika kwa namba ".$number
                ));
            } 
            else 
            {
                 $smsSL = $client->account->messages->create(
                $numberSL,
                array(
                    'from' => "+447490079080", 
                    'body' => "Ujumbe wako bado haujafika kwa namba ".$number
                    ));
            }
            
            echo $messageId->body;
        }

else {
            echo "Ujumbe kuhusu mtaro haujamfikia ".$mobile;
        }
  