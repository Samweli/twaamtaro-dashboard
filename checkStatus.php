<h3>Check the status of Drains</h3>
<?php
 include 'dbcon.php';

	$sqlDrain = "SELECT * FROM adopted_drains";
    $resultDrain = pg_query($dbcon,$sqlDrain) or die(mysqli_error('$dbcon'));

    $drainnum_row = pg_num_rows($resultDrain);
    

    if($drainnum_row > 0) {
    	while ($drain_row = pg_fetch_array($resultDrain)) {
    		$statusData = json_encode($drain_row);
			echo $statusData;
    	}
    	
    }
    else {
    	echo "Hakuna mtaro wowote uliotwaliwa";
    }

   ?> 