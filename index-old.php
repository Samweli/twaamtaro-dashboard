
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
         <form action="filter.php" method="post">
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
   <table class="w3-table w3-hoverable w3-responsive" border="1">
    <tr class="w3-light-grey w3-border-bottom"> 
      <th>NAMBA YA MTARO</th>
      <th>JINA LA MTARO</th>
      <th>MTAA</th>
      <th>MHUSIKA</th>
      <th>TUMA UJUMBE</th>
    </tr>
  
    <?php
    error_reporting(E_ALL & ~E_DEPRECATED & ~E_STRICT);
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
    <tr>
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
   
        <a href="<?php echo 'notClear.php?thedrain='.$drainId; ?>"><button id="siomsafi" name="" class="btn warning" >SIO MSAFI</button></a>
        <a href="<?php echo 'clear.php?thedrain='.$drainId; ?>"><button id="msafi" name="" class="btn success">MSAFI</button></a> 
        
         <a href="<?php echo 'inform.php?thedrain='.$drainId; ?>"><button id="taarifu" name="" class="btn w3-blue">TAARIFU</button></a>
      </td>
       <!-- AJAX Scrits for Button Actions -->
    
    </tr>
<?php } //End While ?>  
    </table>
       
      

    </div> <!--End Column -->
  </div> <!-- End Row -->



  <!-- AJAX Scrits for Button Actions -->
  <script>

 

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

