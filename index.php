  <!DOCTYPE html>
<html>
<title>Twaa Mtaro Dash</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
<link rel="stylesheet" type="text/css" href="styles/w3.css">
  <link rel="stylesheet" type="text/css" href="styles/application.css">
  <link rel="stylesheet" type="text/css" href="styles/drains.css">
  
<style>
html,body,h1,h2,h3,h4,h5 {font-family: "Raleway", sans-serif}
</style>
<body class="w3-light-grey">
<?php
      include 'dbcon.php';
      $drain = pg_query($dbcon, "SELECT * FROM mitaroKigogo");
      //All Drains in Dar
      //$drain = pg_query($dbcon, "SELECT * FROM mitaro_dar");

      if (!$drain) {
        echo "Table is empty ";
      }
?>
<!-- Top container -->
<div class="w3-bar w3-top w3-dark-grey w3-large w3-padding-16" style="z-index:4">
  <button class="w3-bar-item w3-button w3-hide-large w3-hover-none w3-hover-text-light-grey" onclick="w3_open();"><i class="fa fa-bars"></i>  Menu</button>
  <span class="w3-bar-item w3-calign-enter"></span>

</div>



<!-- Overlay effect when opening sidebar on small screens -->
<div class="w3-overlay w3-hide-large w3-animate-opacity" onclick="w3_close()" style="cursor:pointer" title="close side menu" id="myOverlay"></div>

<!-- !PAGE CONTENT! -->
<div class="w3-main" style="margin:10px;margin-top:60px;">

  <!-- Header -->
  <header class="w3-container" style="padding-top:22px">
  </header>

  <div class="w3-row-padding w3-margin-bottom">
    <div class="w3-col l2 m2 s6">
      <div class="w3-container w3-teal w3-padding-16">
        <h4>Mitaro Yote</h4>
        <h3 class="w3-text-black"><?php $drains = pg_num_rows($drain); echo $drains; ?></h3>
      </div>
    </div>

    <div class="w3-col l2 m2 s6">
      <div class="w3-container w3-blue w3-padding-16">
        <h4>Misafi</h4>

        <h3 class="w3-text-black">
          <?php $cleandrain = pg_query($dbcon, "SELECT * FROM mitaroKigogo WHERE cleared = true" ); 
          $cleandrains = pg_num_rows($cleandrain); echo $cleandrains; 
          ?>
        </h3>
      </div>
    </div>
    <div class="w3-col l2 m2 s6">
      <div class="w3-container w3-orange w3-text-white w3-padding-16">
        <div class="w3-clear"></div>
        <h4>Michafu</h4>
        <h3 class="w3-text-black">
        <?php $dirtydrain = pg_query($dbcon, "SELECT * FROM mitaroKigogo WHERE cleared = false"); 
        $dirtydrains = pg_num_rows($dirtydrain); echo $dirtydrains; ?>
        </h3>
        </div>
    </div>
    <div class="w3-col l2 m2 s6">
      <div class="w3-container w3-red w3-padding-16">
        <div class="w3-clear"></div>
        <h4>Msaada</h4>
        <h3 class="w3-text-black">
        <?php $helpdrain = pg_query($dbcon, "SELECT * FROM mitaroKigogo WHERE need_help = true");
        $helpdrains = pg_num_rows($helpdrain); echo $helpdrains; ?>
        </h3>
      </div>
    </div>
    <div class="w3-col l2 m2 s6">
      <div class="w3-container w3-teal w3-text-white w3-padding-16">
        <div class="w3-clear"></div>
        <h4>Wananchi</h4>
        <h3 class="w3-text-black"><?php $user= pg_query($dbcon, "SELECT * FROM users"); 
        $users = pg_num_rows($user); echo $users; ?>
          
        </h3>
      </div>
    </div>
    <div class="w3-col l2 m2 s6">
      <div class="w3-container w3-green w3-text-white w3-padding-16">
        
        <div class="w3-clear"></div>
        <h4>Eneo</h4>
        <h3 class="w3-text-black">Kigogo</h3>
        </div>
      </div>
    </div>
  </div>
<hr>

  <div class="w3-panel" style="margin:30px;">
    <div class="w3-row-padding" style="margin:0 -16px">
      <div class="w3-quarter w3-center">
        <h4>Karibu Twaa Mtaro</h4>
        <ul class="w3-ul">

          <li class="w3-padding"><a href="http://www.twaamtaro.org"><button class="w3-btn-block w3-btn w3-bar-item btn w3-blue">ANGALIA RAMANI</button></a></li>
          <li class="w3-padding"><button class="w3-btn-block w3-btn w3-bar-item btn w3-blue" onclick="notify()">TUMA TAARIFA</button>
          <span id="notifyResult"></span>
          </li>
          <li class="w3-padding"><!--form action="search.php" method="post"-->
            <input type="text" name="search" id="searchterm"> <button class="btn w3-blue" name="searchbtn" onclick="search()">TAFUTA</button>
            <!--/form-->
          </li>
        </ul>
       <?php include 'report.php'; ?>
    </div>

      <div class="w3-rest " style="margin-right:16px">
      <span id="serverResult"></span>
        <h3 class="w3-center">MITARO YA KIGOGO</h3>
        
   <table class="w3-table w3-hoverable w3-responsive w3-white" border="0">
    <tr class="w3-light-grey w3-border-bottom"> 
      <th>NAMBA YA MTARO</th>
      <th>JINA LA MTARO</th>
      <th>MTAA</th>
      <th>MHUSIKA</th>
      <th>TUMA UJUMBE</th>
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
        <a href="<?php echo 'notClear.php?thedrain='.$drainId; ?>"><button id="siomsafi" name="" class="btn warning" >MCHAFU</button></a>
        <a href="<?php echo 'clear.php?thedrain='.$drainId; ?>"><button id="msafi" name="" class="btn success">MSAFI</button></a> 
        
         <a href="<?php echo 'inform.php?thedrain='.$drainId; ?>"><button id="taarifu" name="" class="btn w3-blue">TAARIFU</button></a>
      </td>
       <!-- AJAX Scrits for Button Actions -->
    
    </tr>
<?php } //End While ?>  
    </table>
       
        
      </div>
    </div>
  </div>
  <hr>
  
  <div class="w3-container">
    
    
  </div>
  <hr>
  
  <hr>

  <div class="w3-container">

  <!-- Footer -->
  <footer class="w3-container w3-padding-16 w3-light-grey">
   
    <p>Twaa Mtaro by<a href="https://www.worldbank.org" target="_blank">The World Bank</a></p>
  </footer>

  <!-- End page content -->
</div>

<script>
// Get the Sidebar
var mySidebar = document.getElementById("mySidebar");

// Get the DIV with overlay effect
var overlayBg = document.getElementById("myOverlay");

// Toggle between showing and hiding the sidebar, and add overlay effect
function w3_open() {
    if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
        overlayBg.style.display = "none";
    } else {
        mySidebar.style.display = 'block';
        overlayBg.style.display = "block";
    }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
    overlayBg.style.display = "none";
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
function search() { 
    var xhttp = new XMLHttpRequest();
    var searchword = document.getElementById("searchterm").value;
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
         document.getElementById("serverResult").innerHTML = this.responseText;
        }
      };
      xhttp.open("GET", "search.php?searchword="+searchword, true);
      xhttp.send();
  }
</script>

</body>
</html>
