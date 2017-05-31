<?php  
      include('dbco.php'); 
      include 'twiliosettings.php';

      if((isset($_POST['submit']))) 
      { 
        $mobile = $_POST['citizenNo'];

        $sqlCitizen = "SELECT * FROM citizen WHERE phone ='$mobile'";
        $result = mysqli_query($dbcon,$sqlCitizen) or die(mysqli_error('$dbcon'));


          $num_row = mysqli_num_rows($result);
          $user_row = mysqli_fetch_array($result);
          $citizen = $user_row['id'];
          if( $num_row < 0 ) 
            {
              echo "Mwananchi huyu hajaandikishwa";
            } 
            else 
            {
              $sqlDrain = "SELECT DISTINCT * FROM drain WHERE id NOT IN ('SELECT drainId FROM adopted_drains')";
              $resultDrain = mysqli_query($dbcon,$sqlDrain) or die(mysqli_error('$dbcon'));

              $drainnum_row = mysqli_num_rows($resultDrain);
              $drain_row = mysqli_fetch_array($resultDrain);

              if( $drainnum_row < 0 ) {
                    echo "Hakuna mitaro ambayo haina msimamizi";
                  }

              $toAssign = $drain_row['id'];
              $assign = "INSERT INTO adopted_drains(drainId, citizenId, streetleader) VALUES ('$toAssign', '$citizen', 101)";
              $assignment = mysqli_query($dbcon,$assign) or die(mysqli_error($dbcon));
                
              if ($assignment) {
                echo "Umempatia mwananchi mtaro";

                $sms = $client->account->messages->create($mobile,  array(
                //twilio number       
                  'from' => $TMsender, 
                      
                // the sms body
                'body' => "Umefanikiwa kumpatia mwananchi mwenye namba $mobile mtaro wenye jina $toAssign!"
                  )
                );
              }
              else
                  echo "Umeshindwa kumpa mtaro huyo mwananchi";
                
            } //End assigning drain

              //Send notification to the assigned citizen
              $sms = $client->account->messages->create($mobile,  array(
                //twilio number       
                'from' => $TMsender, 
                'body' => "Umepatiwa mtaro wa kusimamia, wasiliana na mwenyekiti wako wa mtaa kwa maelezo zaidi.!"
                  )
              );

              // Display a confirmation message on the screen
              echo "Ujumbe umemfikia $mobile";
       }

      ?>
