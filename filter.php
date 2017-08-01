
<!DOCTYPE html>
<head>
  <title>SMS</title>
  <link rel="stylesheet" type="text/css" href="styles/w3.css">
  <!--link rel="stylesheet" type="text/css" href="styles/application.css" -->
  <link rel="stylesheet" type="text/css" href="styles/drains.css">
</head>
<body class="w3-center w3-container">
  <div class="w3-row w3-margin">
    <div class="w3-col">
    <h2>Twaa Mtaro  SMS</h2>
    <div class="w3-row w3-padding-bottom">
        <div class="w3-col s12 m5" >
          <form action="search.php" method="post">
            <input type="text" name="search" ><button class="btn w3-blue" name="searchbtn">TAFUTA</button>
          </form>
        </div>
        <div class="w3-col s12 m4" >
          <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post">
        <select class="w3-padding" name="filter">
          <option >--Filter--</option>
          <option value="clear">Misafi</option>
          <option value="notclear">Michafu</option>
        </select>
        <button class="btn w3-blue" name="filterbtn">FILTER</button>
      </form>
      </div>
        <div class="w3-col s12 m3" >
          <button class="btn w3-blue" onclick="notify()">TUMA TAARIFA</button>
        </div>
    </div>
   
      <span id="serverResult"></span>
    <?php
    //UPDATE users SET sms_number = '+255654988047' WHERE id=1007
    include 'dbcon.php';

      $filtervalue = $_POST['filter'];

      if(isset($_POST['filterbtn'])){
        if ($filtervalue == "notclear") {
          $drainsql = "SELECT * FROM mitaroKigogo WHERE cleared = false";
          $tabletitle = "MICHAFU";
        } else if ($filtervalue == "clear")  {
          $drainsql = "SELECT * FROM mitaroKigogo WHERE cleared = true";
          $tabletitle = "MISAFI";
        }

        $filterdrain = pg_query($dbcon,$drainsql);
    ?>
   <table class="w3-table w3-hoverable" border="1">
        <tr ><th class="w3-center" colspan="5">MITARO <?php echo $tabletitle; ?></th></tr>
      <tr class="w3-light-grey">
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
        <form>
            <button id="siomsafi"  class="btn warning" type="submit" onclick="notClear()"   >SIO MSAFI</button>

          <button id="msafi" class="btn success" onclick="assignClear()">MSAFI</button>
        </form>
        </td>
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

    /*function assignClear() { 
    var xhttp = new XMLHttpRequest();
    /*xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    var mhusika = " <?php //echo $mhusika; ?> ";
    var smsnumber = " <?php //echo $number; ?> ";

    var params = "citizen=mhusika&number=smsnumber" ;
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
         document.getElementById("serverResult").innerHTML = this.responseText;
        }
      };
      xhttp.open("POST", "clear.php?number=<?php //echo $number; ?>", true);
      xhttp.send(params);
    }*/
    </script>
       <?php }  ?>
    </tr>

    </table>
       
      </p>
      

    </div> <!--End Column -->
  </div> <!-- End Row -->



  <!-- AJAX Scrits for Button Actions -->
  <script>

    /*function notClear() {
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
    /*xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');/
    var mhusika = " <?php //echo $mhusika; ?> ";
    var smsnumber = " <?php //echo $number; ?> ";

    var params = "citizen=mhusika&number=smsnumber" ;
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
         document.getElementById("serverResult").innerHTML = this.responseText;
        }
      };
      xhttp.open("POST", "clear.php?=<?php //echo $number; ?>", true);
      xhttp.send(params);
    }*/

   function notify() { 
    var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
         document.getElementById("serverResult").innerHTML = this.responseText;
        }
      };
      xhttp.open("GET", "notify.php", true);
      xhttp.send();
    }
  </script>
</body>
</html>

