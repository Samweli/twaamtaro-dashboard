<?php
 include 'dbco.php';
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
    if( $drainnum_row > 0 ) {
        
//select citizens phone number
        $number = $citizen_row['phone'];        
  
        include 'twiliosettings.php';
            $sms = $client->account->messages->create(
                $number,
                array(  
                    'from' => "+14256540807",
                    'body' => "Habari, Mtaro wako umesafishwa!", 
                    'provideFeedback' => true
                )
            );

            echo "Ujumbe umetumwa kwa namba $number";
          
        }
  