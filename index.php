
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
    <h2>Tuma Ujumbe kwa ajili ya Twaa Mtaro</h2>

    <input type="text" name="search">

   <table class="w3-table w3-bordered w3-hoverable">
    <tr>
      <th>Namba ya Mtaro</th>
      <th>Jina la Mtaro</th>
      <th>Mtaa</th>
      <th>Mhusika</th>
      <th>Actions</th>
    </tr>
  

    <tr>
      <td>121</td>
      <td>Mtaro wa Kigogo juu</td>
      <td>Kigogo</td>
      <td>Bwana Juma</td>
      <td>
        <button id="" class="btn warning" onclick="notClear()" >SIO MSAFI</button>

        <button class="btn success" onclick="assignClear()">MSAFI</button>
      </td>
    </tr>
    <?php
      include 'dbcon.php';
      $drain = pg_query($dbcon, "SELECT * FROM mitaroKigogo");

      if (!$drain) {
        echo "Table is empty ";
      }
      while($drain_row=pg_fetch_assoc($drain)) {
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
            echo "Claimed";
            //$citizenInfo=pg_fetch_assoc($sqlCitizen);
            //$citisenId=$citizenInfo["user_id"];
          } else {
            echo "Not Claimed";
            
          }
          

         ?>
          
      </td>
      <td>
        <button id="" class="btn warning" onclick="notClear()" >SIO MSAFI</button>

        <button class="btn success" onclick="assignClear()">MSAFI</button>
      </td>
       <?php }  ?>
    </tr>

    </table>
       
      </p>
      <p><button class="btn w3-blue" onclick="notify()">TUMA TAARIFA</button></p>

      <span id="serverResult"></span>

    </div> <!--End Column -->
  </div> <!-- End Row -->



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

   function notify() { 
    var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
         document.getElementById("serverResult").innerHTML = this.responseText;
        }
      };
      xhttp.open("POST", "notify.php", true);
      xhttp.send();
    }
  </script>
</body>
</html>

