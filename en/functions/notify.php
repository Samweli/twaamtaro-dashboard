<?php
 include 'dbcon.php';

 //Select all adopted drains and add them to an array
    #$sqlDrain = "SELECT DISTINCT FROM sidewalk_claims";
    $resultDrain = pg_query($dbcon,"SELECT DISTINCT user_id FROM sidewalk_claims");

    $drainnum_row = pg_num_rows($resultDrain);
    //if drain is found, select corresonding citizen
    if( $drainnum_row > 0 ) {
        while ( $drain_row = pg_fetch_assoc($resultDrain)) {
            //Select userId from each adopted drain
            $citizenId=$drain_row["user_id"];

            //Get the citizen's details
            $citizen = pg_query($dbcon,"SELECT * FROM users WHERE id=$citizenId");
            $citizenInfo=pg_fetch_assoc($citizen);

            //Get the citizen's phone number
            $mhusika = $citizenInfo["first_name"]." ".$citizenInfo["last_name"];
            $number = $citizenInfo["sms_number"];
            include 'twiliosettings.php';

                $sms = $client->account->messages->create(
                    $number,
                    array(
                        'from' => $TMsender, 
                        'body' => "Hello, the rain season is around the corner, you are reminded to clean your drains in order to prevent floods that are caused by dirty drains."
                    )
                );

                //echo "Ujumbe umetumwa kwa mhusika, ".$mhusika."mwenye namba ".$number;

        }
        // Display a confirmation message on the screen
        echo "You have succeded to notify your citizens to clean their drains";
            
    }
    else {
        echo "There are no adopted drains";
    }