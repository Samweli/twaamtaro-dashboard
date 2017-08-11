


    <?php
    //UPDATE users SET sms_number = '+255654988047' WHERE id=1007
    include 'dbcon.php';

      $filtervalue = $_GET['filter'];

        if ($filtervalue == "notclear") {
          $drainsql = "SELECT * FROM mitaroKigogo WHERE cleared = false";
          $tabletitle = "DIRTY";
        } else if ($filtervalue == "clear")  {
          $drainsql = "SELECT * FROM mitaroKigogo WHERE cleared = true";
          $tabletitle = "CLEAN";
        }

        $filterdrain = pg_query($dbcon,$drainsql);
    ?>
   <table class="w3-table w3-hoverable w3-responsive w3-white" border="0">
        <tr class="w3-light-grey w3-border-bottom">
        <th class="w3-center" colspan="5"><?php echo $tabletitle; ?> DRAINS</th></tr>
      <tr class="w3-light-grey w3-border-bottom">
        <th>DRAIN GID</th>
        <th>DRAIN NAME</th>
        <th>STREET</th>
        <th>CITIZEN</th>
        <th>SEND SMS</th>
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
          <a href="<?php echo 'functions/notClear.php?thedrain='.$drainId; ?>"><button id="siomsafi" name="" class="btn warning" >DIRTY</button></a>
          <a href="<?php echo 'functions/clear.php?thedrain='.$drainId; ?>"><button id="msafi" name="" class="btn success">CLEAN</button></a> 
          
          <!--a href="<?php echo 'functions/inform.php?thedrain='.$drainId; ?>"><button id="taarifu" name="" class="btn w3-blue">NOTIFY</button></a -->
        </td>
         <?php } //End While  ?>
      </tr>

      </table>
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
       <?php   ?>
    </tr>

    </table>
       
      </p>
      

    </div> <!--End Column -->
  </div> <!-- End Row -->



  <!-- AJAX Scrits for Button Actions -->
  <script>

  </script>
</body>
</html>

