<?php

//include 'dbcon.php';

    //$sqlDrain = "SELECT * FROM adopted_drains";
    
    //Select the citizen phone number from the database
    //$citizen_row = pg_fetch_array($result); 
    //$mobile=$citizen_row['phone'];

    //Assign the number to a variable

    $number = '+255782120252'; 
    
          
        include 'twiliosettings.php';
            $sms = $client->account->messages->create(
                $number,
                array(  
                    'from' => $TMsender,
                    'body' => "Habari, Mtaro wako umesafishwa!",
                )
            );

            echo "Ujumbe umetumwa kwa namba $number";
          
 ?> 