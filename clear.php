<?php


    echo "You are here <br>";
    $number = '+255782120252'; 
          
    include 'twiliosettings.php';

        $sms = $client->messages->create('+255782120252',
            array(
                'from' => '+255782120252',
                'body' => "Habari, Mtaro wako umesafishwa!",
                )
            );

            echo "Ujumbe umetumwa kwa namba $number";
          
 ?> 