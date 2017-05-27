
<!DOCTYPE html>
<head>
	<title>SMS</title>
	<link rel="stylesheet" type="text/css" href="styles/w3.css">
</head>
<body class="w3-center w3-container">
<div class="w3-row w3-margin">
  <div class="w3-col w3-third w3-hide-small">
    &nbsp
  </div>

  <div class="w3-col w3-third m4 s12">
      <div style="">
      <form method="POST" class="w3-center" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>">
        
            <input style="display: inline;" class="w3-input w3-border " type="text" name="citizenNo" placeholder="Ingiza namba ya simu ya mwananchi mf. +2557xxxxxxxx" required="true"> <button  type="submit" name="submit" id="assignClick" class="w3-btn w3-black w3-small"  >Assign</button>
        
    </form>
    </div>

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

    <p>
      <button class="w3-btn w3-orange w3-small" onclick="needsHelp">Needs Help</button>

      <button class="w3-btn w3-red w3-small" onclick="notClear()" >Unclear</button>

      <button class="w3-btn w3-green w3-small" onclick="assignClear()">Clear</button>

      
    </p>
    <p><button class="w3-btn w3-blue w3-small" onclick="notify()">Notify All Citizens</button></p>

    <span id="serverResult"></span>


  </div>
  <div class="w3-col w3-third s12"></div>
</div>




<!-- AJAX Scrits for Button Actions -->
<script>

  function notClear() {
  	var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById("serverResult").innerHTML = this.responseText;
      }
    };
  	xhttp.open("GET", "notClear.php", true);
    xhttp.send();
  }

  function assignClear() { 
	var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById("serverResult").innerHTML = this.responseText;
      }
    };
    xhttp.open("POST", "assignClear.php", true);
    xhttp.send();
  }


  function checkStatus() { 
	var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById("serverResult").innerHTML = this.responseText;
      }
    };
    xhttp.open("POST", "checkStatus.php", true);
    xhttp.send();
  }
</script>

</body>
</html>

