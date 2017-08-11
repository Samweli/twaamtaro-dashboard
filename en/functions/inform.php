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
                'body' => "Hello, your drain has been cleaned!"
                )
            );
            // Display a confirmation message on the screen
            echo "<script> alert('A message has been sent to, ".$mhusika." of number ".$number."'); </script>";
            }

        elseif ($drainClean = false) {
                $sms = $client->account->messages->create(
                $number,
                array(
                    'from' => $TMsender, 
                    'body' => "Hello, You street leader has inspected your drain and noticed that it is not clean. You are kindly requested to clean your drain."
                )
            );
            // Display a confirmation message on the screen
           echo "<script> alert('A message has been sent to, ".$mhusika." with number ".$number."'); </script>";
        } //End ElseIf

            
            echo "<script> window.location = '../index.php'; </script>";
            }
        }// End while
      } //End if 
        else { 
        echo "<script> alert('This drain has not been claimed'); </script>"; 
        echo "<script> window.location = '../index.php'; </script>";
        }
          
?> 