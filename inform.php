<?php
include 'dbcon.php';

    $drainId= $_GET['thedrain'];
    
    $sqlCitizen = pg_query($dbcon,"SELECT * FROM sidewalk_claims WHERE gid=$drainId");

    if(pg_num_rows($sqlCitizen) > 0) {
        while ($citizenInfo=pg_fetch_assoc($sqlCitizen)) {

            $citizenId=$citizenInfo["user_id"];
            $drainClean=$citizenInfo["shoveled"];

            $citizen = pg_query($dbcon,"SELECT * FROM users WHERE id=$citizenId");
            while ($citizenName=pg_fetch_assoc($citizen)) {
            var_dump($citizenName);
            $mhusika = $citizenName["first_name"]." ".$citizenName["last_name"];
            $number = $citizenName["sms_number"];

            include 'twiliosettings.php';
          
            
        if ($drainClean = true) {
            $sms = $client->messages->create($number,
            array(
                'from' => '+14256540807',
                'body' => "Habari, Mtaro wako ni msafi!"
                )
            );
            // Display a confirmation message on the screen
            echo "<script> alert('Ujumbe umetumwa kwa mhusika, ".$mhusika." mwenye namba ".$number."'); </script>";
            }

        elseif ($drainClean = false) {
                $sms = $client->account->messages->create(
                $number,
                array(
                    'from' => $TMsender, 
                    'body' => "Habari, Kiongozi wako ameangalia mtaro wako na kuona kua sio msafi! Tafadhali unaombwa kuusafisha"
                )
            );
            // Display a confirmation message on the screen
           echo "<script> alert('Ujumbe umetumwa kwa mhusika, ".$mhusika." mwenye namba ".$number."'); </script>";
        } //End ElseIf

            
            echo "<script> window.location = 'index.php'; </script>";
            }
        }// End while
      } //End if 
        else { 
        echo "<script> alert('Mtaro huu haujatwaliwa bado'); </script>"; 
        echo "<script> window.location = 'index.php'; </script>";
        }
          
?> 