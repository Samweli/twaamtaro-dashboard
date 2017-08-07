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
                        'body' => "Habari, msimu wa mvua unakaribia, hivyo mnakumbushwa kusafisha mitaro yenu ili kuepuka mafuriko yanayosababishwa na mitaro michafu"
                    )
                );

                //echo "Ujumbe umetumwa kwa mhusika, ".$mhusika."mwenye namba ".$number;

        }
        // Display a confirmation message on the screen
        echo "Umefanikiwa kuwataarifu wakazi wako wasafishe mitaro";
            
    }
    else {
        echo "There are no adopted drains";
    }