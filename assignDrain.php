



<form method="POST" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>">
        <input class="w3-input w3-border" type="text" name="citizenNo" placeholder="Ingiza namba ya simu ya mwananchi ">
        <button  type="submit" name="submit" id="assignClick" class="w3-btn w3-black w3-small"  >Assign</button>
</form>
<?php  
  include('dbcon.php'); 
  //click a drain and fetch its id; 
  

  //assign a drain t a citizen

if((isset($_POST['submit']))) 
//if(null != ($_POST['submit'])) 
{	
  $mobile = $_POST['citizenNo'];
  var_dump($mobile);

 	$sqlCitizen = "SELECT * FROM citizen WHERE phone ='$mobile'";
 	$result = mysqli_query($dbcon,$sqlCitizen) or die(mysqli_error('$dbcon'));
 	var_dump($mobile);

  	$num_row = mysqli_num_rows($result);
    $user_row = mysqli_fetch_array($result);

    //$citizenNo = $user_row['phone'];
    $citizen = $user_row['citizenId'];

            #var_dump($role);
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
		        	//exit();
		        }

		    var_dump($drain_row['id']);

		    $toAssign = $drain_row['id'];
          	
        $assign = "INSERT INTO adopted_drains(drainId, citizenId, ) VALUES ($toAssign, $citizen)";
        $assignment = mysqli_query($dbcon,$assign) or die(mysqli_error($dbcon));
        	
        if ($assignment) {
        	echo "Umepatia mwananchi mtaro";
          
          include 'twiliosettings.php';

          $sms = $client->account->messages->create($mobile,  array(
          //twilio number       
            'from' => "+447490079080", 
                
          // the sms body
          'body' => "Umepatia mtaro wa kusimamia, wasiliana na mwenyekiti wako wa mtaa kwa maelezo zaidi.!"
            )
          );
        }
        else
        		echo "Umeshindwa kumpa mtaro huyo mwananchi";
        	
      } //End citizen is registered
        include 'twiliosettings.php';

        $sms = $client->account->messages->create($mobile,  array(
          //twilio number       
          'from' => "+447490079080", 
                
           // the sms body
          'body' => "Umepatiwa mtaro wa kusimamia, wasiliana na mwenyekiti wako wa mtaa kwa maelezo zaidi.!"
            )
        );

        // Display a confirmation message on the screen
        echo "Sent message to $name";
 } 
 /*else
{ echo "Something is soooo wrong!!"; }*/

?>