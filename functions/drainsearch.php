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
        <tr><th class="w3-center" colspan="5">MITARO</th></tr>
      <tr>
        <th>Namba ya Mtaro</th>
        <th>Jina la Mtaro</th>
        <th>Mtaa</th>
        <th>Mhusika</th>
        <th>Hali</th>
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
        <form>
            <button id="siomsafi"  class="btn warning" type="submit" onclick="notClear()"   >SIO MSAFI</button>

          <button id="msafi" class="btn success" onclick="assignClear()">MSAFI</button>
        </form>
        </td>
        </td>
         <?php } //End While  ?>
      </tr>

      </table>
      <?php 
        } //End if
       ?>
