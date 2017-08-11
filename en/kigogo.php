<h3 class="w3-center w3-text-black">ALL DRAINS</h3>
        
   <table class="w3-table w3-hoverable w3-responsive w3-white" border="0">
    <tr class="w3-light-grey w3-border-bottom"> 
      <th>DRAIN GID</th>
      <th>DRAIN NAME</th>
      <th>STREET</th>
      <th>CITIZEN</th>
      <th>SEND SMS</th>
    </tr>
  
    <?php
      include 'dbcon.php';
      $drain = pg_query($dbcon, "SELECT * FROM mitaroKigogo");
      //All Drains in Dar
      //$drain = pg_query($dbcon, "SELECT * FROM mitaro_dar");

      if (!$drain) {
        echo "Table is empty ";
      }
      while($drain_row=pg_fetch_assoc($drain)) {
         $drainId=$drain_row['gid'];
    ?>
    <tr><?php  ?>
      <td><?php echo $drainId; ?></td>
      <td><?php echo $drain_row['name'];  ?></td>
      <td><?php echo $drain_row['address']; ?></td>
      <td>
        <?php 
          
          $sqlCitizen = pg_query($dbcon,"SELECT * FROM sidewalk_claims WHERE gid=$drainId");
          
          if(pg_num_rows($sqlCitizen) > 0) {
            //echo "Claimed";
            while ($citizenInfo=pg_fetch_assoc($sqlCitizen)) {
              $citizenId=$citizenInfo['user_id'];
              $citizen = pg_query($dbcon,"SELECT * FROM users WHERE id=$citizenId");
              $citizenName=pg_fetch_assoc($citizen);
              $mhusika = $citizenName['first_name']." ".$citizenName["last_name"];
              $number = $citizenName['sms_number'];
              echo $mhusika."<br /> ";

            }
          } else {
            echo "Not Claimed";
          }
          
         ?>
          
      </td>
      <td>
        <?php //; ?>
        <a href="<?php echo 'functions/notClear.php?thedrain='.$drainId; ?>"><button id="siomsafi" name="" class="btn warning" >DIRTY</button></a>
        <a href="<?php echo 'functions/clear.php?thedrain='.$drainId; ?>"><button id="msafi" name="" class="btn success">CLEAN</button></a> 
        
         <!-- a href="<?php //echo 'functions/inform.php?thedrain='.$drainId; ?>"><button id="taarifu" name="" class="btn w3-blue">NOTIFY</button></a -->
      </td>
       <!-- AJAX Scrits for Button Actions -->
    
    </tr>
<?php } //End While ?>  
    </table>
       
        