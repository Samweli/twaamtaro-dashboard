 <!DOCTYPE html>

<title>Wananchi - Twaa Mtaro Dash</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
<link rel="stylesheet" type="text/css" href="styles/w3.css">
  <link rel="stylesheet" type="text/css" href="styles/application.css">
  <link rel="stylesheet" type="text/css" href="styles/drains.css">
  <link rel="stylesheet" type="text/css" href="styles/style.css">
<script>
  function filterEneo(area) { 
    var xhttp = new XMLHttpRequest();
    var area = document.getElementById("eneo").value;
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
         document.getElementById("serverResult").innerHTML = this.responseText;
        }
      };
      xhttp.open("GET", "functions/filterarea.php?filterarea="+area, true);
      xhttp.send();
  }
</script> 
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
        echo "Hakuna taarifa yoyote ";
      }
?>
<!-- Top container -->
<div class="w3-bar w3-top w3-dark-grey w3-large w3-padding-right" style="z-index:4">
    <div class="w3-center">
      <span class="w3-margin-right w3-right w3-padding-right w3-text-small"><a href="#"> Swahili </a></span>
      <span class="w3-right w3-padding-right"><a href="en/"> English</a></span>
    <input type="text" name="search" id="searchterm"> <button class="btn w3-blue w3-margin-right w3-padding-right" name="searchbtn" onclick="search()">TAFUTA</button>
  </div>
</div>



<!-- Overlay effect when opening sidebar on small screens -->
<div class="w3-overlay w3-hide-large w3-animate-opacity" onclick="w3_close()" style="cursor:pointer" title="close side menu" id="myOverlay"></div>

<!-- !PAGE CONTENT! -->
<div class="w3-main" style="margin:10px;margin-top:40px;">

<hr>

  <div class="w3-panel" style="margin:30px;">
    <div class="w3-row-padding" style="margin:0 -16px">
      <div class="w3-quarter w3-center">
        <h4>Karibu Twaa Mtaro</h4>
        <ul class="w3-ul">
        <li class="w3-padding"><a href="index.php" target="_blank"><button class="w3-btn-block w3-btn w3-bar-item btn w3-blue">DASHBOARD</button></a></li>
          <li class="w3-padding"><a href="http://www.twaamtaro.org" target="_blank"><button class="w3-btn-block w3-btn w3-bar-item btn w3-blue">ANGALIA RAMANI</button></a></li>
          <li class="w3-padding"><button class="w3-btn-block w3-btn w3-bar-item btn w3-blue" onclick="notify()">TUMA TAARIFA</button>
          <span id="notifyResult"></span>
          </li>
          
          <li>
            <?php include 'functions/eneo.php'; ?>
          </li>
        </ul>
      
    </div>

      <div class="w3-rest " style="margin-right:16px" >
      <h3 class="w3-center w3-text-black">WANANCHI WA TWAA MTARO</h3>
      <span id="serverResult"></span>
      
  <table class="w3-table w3-hoverable w3-responsive w3-white" border="0">
  
      <tr class="w3-light-grey w3-border-bottom" >
        <th>Namba ya Mkazi</th>
        <th>Jina la Mkazi</th>
        <th>Simu</th>
        <th>Mitaro</th>
      </tr>
    
      <?php

          //&& !$searchclaims
          $citizen = pg_query($dbcon,"SELECT * FROM users");
          while($user_row=pg_fetch_assoc($citizen)) {
            $user = $user_row['id'];
            $mhusika = $user_row['first_name'].' '.$user_row['last_name'];
            $namba = $user_row['sms_number'];
            $mitaro = " ";

            $sqlClaims = pg_query($dbcon,"SELECT * FROM sidewalk_claims WHERE user_id='$user'");

            if(pg_num_rows($sqlClaims) > 0) {
              while ($claimsInfo=pg_fetch_assoc($sqlClaims)) {
                $mitaro .=$claimsInfo['gid'];
              }

            } else {
              echo $mitaro ="No Claims";
              
            }
      ?>
      <tr>
        <td><?php echo $user; ?></td>
        <td><?php echo $mhusika; ?></td>
        <td><?php echo $namba; ?></td>
        <td><?php echo $mitaro; ?></td>
         <?php } //End While
           ?>
      </tr>

      </table>

      </div>
    </div>
  </div>

  
  <hr>

  <div class="w3-container">

  <!-- Footer -->
  <footer class="w3-container w3-padding-16 w3-light-grey">
   
    <p>Twaa Mtaro by <a href="https://www.worldbank.org" target="_blank"> The World Bank</a></p>
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
         document.getElementById("notifyResult").innerHTML = this.responseText;
        }
      };
      xhttp.open("POST", "functions/notify.php", true);
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
      xhttp.open("GET", "functions/search.php?searchword="+searchword, true);
      xhttp.send();
  }
  function filter(filterword) { 
    var xhttp = new XMLHttpRequest();
    //var filterword = document.getElementById("filtervalue").value;
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
         document.getElementById("serverResult").innerHTML = this.responseText;
        }
      };
      xhttp.open("GET", "functions/filter.php?filter="+filterword, true);
      xhttp.send();
  }
</script>

</body>
</html>
