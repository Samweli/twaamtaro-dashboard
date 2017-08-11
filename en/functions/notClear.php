<?php
include 'dbcon.php';


    $drainId= $_GET['thedrain'];

    $sqlCitizen = pg_query($dbcon,"SELECT * FROM sidewalk_claims WHERE gid=$drainId");

    if(pg_num_rows($sqlCitizen) > 0) {

    $updateStatus = pg_query($dbcon,"UPDATE sidewalk_claims SET shoveled = false WHERE gid=$drainId");
        if ($updateStatus) {
                   //echo "Eneo hili la Mtaro ni chafu";
          
            while ($citizenInfo=pg_fetch_assoc($sqlCitizen)) {

            $citizenId=$citizenInfo["user_id"];

            $citizen = pg_query($dbcon,"SELECT * FROM users WHERE id=$citizenId");
            while ($citizenName=pg_fetch_assoc($citizen)) {
            $mhusika = $citizenName["first_name"]." ".$citizenName["last_name"];
            $number = $citizenName["sms_number"];

            include 'twiliosettings.php';

                $sms = $client->account->messages->create(
                $number,
                array(
                    'from' => $TMsender, 
                    'body' => "Hello, You street leader has inspected your drain and noticed that it is not clean. You are kindly requested to clean your drain."
                )
            );
            // Display a confirmation message on the screen
           echo "<script> alert('A message has been sent to the citizen, ".$mhusika." with number ".$number."'); </script>";

            
            echo "<script> window.location = '../index.php'; </script>";
            }
        }// End while
                   //echo "<script> alert('Eneo hili la Mtaro ni chafu'); </script>";
               } 
        else {
                   //echo "Something went wrong";
                    echo "<script> alert('Something went wrong'); </script>";
               }          
           
      echo "<script> window.location = '../index.php'; </script>";
    } //End if 

    else {
        //echo "Mtaro huu haujatwaliwa bado";
        echo "<script> alert('This drain has not been claimed yet'); </script>"; 
        echo "<script> window.location = '../index.php'; </script>";
    }
     
?>

