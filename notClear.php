<?php
 //include 'dbcon.php';

     //select citizens phone number
        $number = '+255782120252';        
  
        include 'twiliosettings.php';
            $sms = $client->account->messages->create(
                $number,
                array(
                    'from' => $TMsender, 
                    'body' => "Habari, Kiongozi wako ameangalia mtaro wako na kuona kua sio msafi! Tafadhali unaombwa kuusafisha"
                )
            );

            // Display a confirmation message on the screen
            echo "Ujumbe umetumwa kwa namba $number";
            
?>
