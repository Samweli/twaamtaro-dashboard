<?php
    include 'dbcon.php';

      $filtervalue = $_GET['filterarea'];
      //$filtervalue = 'Tandale';
      
          $drainsql = "SELECT * FROM mitaro_dar WHERE address = '".$filtervalue."'";
          
        
        $filterdrain = pg_query($dbcon,$drainsql);
    ?>
<div class="w3-container">
   <table class="w3-table w3-hoverable w3-responsive w3-white" border="0">
        <tr class="w3-dark-grey w3-border-bottom">
        <th class="w3-center " colspan="5">MITARO  YA  <?php echo strtoupper($filtervalue); ?></th></tr>
      <tr class="w3-light-grey w3-border-bottom">
        <th>Namba ya Mtaro</th>
        <th>Jina la Mtaro</th>
        <th>Mtaa</th>
        <th>Mhusika</th>
        <th>Hali</th>
      </tr>
      <?php
        
        while($drain_row=pg_fetch_assoc($filterdrain)) {
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
          <?php //; ?>
          <a href="<?php echo 'functions/notClear.php?thedrain='.$drainId; ?>"><button id="siomsafi" name="" class="btn warning" >MCHAFU</button></a>
          <a href="<?php echo 'functions/clear.php?thedrain='.$drainId; ?>"><button id="msafi" name="" class="btn success">MSAFI</button></a> 
          
           <!-- a href="<?php //echo 'functions/inform.php?thedrain='.$drainId; ?>"><button id="taarifu" name="" class="btn w3-blue">TAARIFU</button></a -->
        </td>
         <?php } //End While  ?>
      </tr>
      </table>
  </div>

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

    </script>

</body>
</html>

