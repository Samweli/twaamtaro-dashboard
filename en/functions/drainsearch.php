<?php
      $drainsql = "SELECT * FROM mitaroKigogo WHERE gid = $search
      UNION
      SELECT * FROM mitaroKigogo WHERE name LIKE '%".$search."%'
      UNION
      SELECT * FROM mitaroKigogo WHERE address LIKE '%".$search."%'
      UNION
      SELECT * FROM mitaroKigogo WHERE waterway LIKE '%".$search."%'  
      UNION
      SELECT * FROM mitaroKigogo WHERE cleared LIKE = $search";



    $searchdrain = pg_query($dbcon,$drainsql);
    if($searchdrain ) {
        ?>
      <table class="w3-table w3-bordered w3-hoverable">
        <tr><th class="w3-center" colspan="5">DRAINS</th></tr>
      <tr>
        <th>DRAIN GID</th>
        <th>DRAIN NAME</th>
        <th>STREET</th>
        <th>CITIZEN</th>
        <th>SEND SMS</th>
      </tr>
      <?php
        while($drain_row=pg_fetch_assoc($searchdrain)) {
      ?>
      <tr>
        <td><?php echo $drain_row["gid"]; ?></td>
        <td><?php echo $drain_row["name"];  ?></td>
        <td><?php echo $drain_row["address"]; ?></td>
        <td>
          <?php 
             $drainId=$drain_row['gid'];
            //echo($drainId);
            $sqlCitizen = pg_query($dbcon,"SELECT * FROM sidewalk_claims WHERE gid=$drainId");

            if(pg_num_rows($sqlCitizen) > 0) {
              $citizenInfo=pg_fetch_assoc($sqlCitizen);
              $citizenId=$citizenInfo["user_id"];
              $citizen = pg_query($dbcon,"SELECT * FROM users WHERE id=$citizenId");
              $citizenName=pg_fetch_assoc($citizen);
              $mhusika = $citizenName["first_name"]." ".$citizenName["last_name"];
              $number = $citizenName["sms_number"];
              echo $mhusika;
            } else {
              echo "Not Claimed";
              
            }
            

           ?>
            
        </td>
        <td>
          <a href="<?php echo 'functions/notClear.php?thedrain='.$drainId; ?>"><button id="siomsafi" name="" class="btn warning" >DIRTY</button></a>
          <a href="<?php echo 'functions/clear.php?thedrain='.$drainId; ?>"><button id="msafi" name="" class="btn success">CLEAN</button></a> 
          
           <a href="<?php echo 'functions/inform.php?thedrain='.$drainId; ?>"><button id="taarifu" name="" class="btn w3-blue">NOTIFY</button></a>
        </td>
         <?php } //End While  ?>
      </tr>

      </table>
      <?php 
        } //End if
       ?>
