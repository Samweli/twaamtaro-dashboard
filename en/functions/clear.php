<?php
include 'dbcon.php';

    $drainId= $_GET['thedrain'];
    $sqlCitizen = pg_query($dbcon,"SELECT * FROM sidewalk_claims WHERE gid=$drainId");

    if(pg_num_rows($sqlCitizen) > 0) {
        

        $updateStatus = pg_query($dbcon,"UPDATE sidewalk_claims SET shoveled = true WHERE gid=$drainId");
        if ($updateStatus) {
                   //echo "Eneo hili la Mtaro limesafishwa";
            while ($citizenInfo=pg_fetch_assoc($sqlCitizen)) {

            $citizenId=$citizenInfo["user_id"];

            $citizen = pg_query($dbcon,"SELECT * FROM users WHERE id=$citizenId");
            $citizenName=pg_fetch_assoc($citizen);
            $mhusika = $citizenName["first_name"]." ".$citizenName["last_name"];
            $number = $citizenName["sms_number"];

            include 'twiliosettings.php';
            $sms = $client->messages->create($number,
            array(
                'from' => '+14256540807',
                'body' => "Hello, Your drain has been cleaned!"
                )
            );
            // Display a confirmation message on the screen
            echo "<script> alert('A message has been sent to, ".$mhusika." with number ".$number."'); </script>";
            } //End While
           }

        else {
                   //echo "Something went wrong";
                   echo "<script> alert('Something went wrong'); </script>";

               }          
           echo "<script> window.location = '../index.php'; </script>";
        
    } //End if num rows
    else {
        echo "<script> alert('This drain has not been claimed'); </script>"; 
        echo "<script> window.location = '../index.php'; </script>";
    }
     
?>

