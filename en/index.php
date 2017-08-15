 <!DOCTYPE html>
<head>
  <title>Twaa Mtaro Dash</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!--link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway"-->
  <link rel="stylesheet" type="text/css" href="../styles/w3.css">
    <link rel="stylesheet" type="text/css" href="../styles/application.css">
    <link rel="stylesheet" type="text/css" href="../styles/drains.css">
    <link rel="stylesheet" type="text/css" href="../styles/style.css">
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
</head>

<body class="w3-light-grey">
<?php
      include 'dbcon.php';
      $homedrain = pg_query($dbcon, "SELECT * FROM mitaro_dar");
      //All Drains in Dar
      //$drain = pg_query($dbcon, "SELECT * FROM mitaro_dar");

      if (!$homedrain) {
        echo "Table is empty ";
      }
?>
<!-- Top container -->
<div class="w3-bar w3-top w3-dark-grey w3-large w3-padding-right" style="z-index:4">
   <div class="w3-center w3-padding-top" >
   <span class="w3-margin-right w3-right w3-padding-right w3-text-small"><a href="../" class=""> Swahili </a></span> 
  <span class="w3-right w3-padding-right"><a href="#" class=""> English</a></span>
    <input type="text" name="search" id="searchterm"> <button class="btn w3-blue w3-margin-right w3-padding-right" name="searchbtn" onclick="search()">SEARCH</button>
  
  
  </div>
</div>



<!-- Overlay effect when opening sidebar on small screens -->
<div class="w3-overlay w3-hide-large w3-animate-opacity" onclick="w3_close()" style="cursor:pointer" title="close side menu" id="myOverlay"></div>

<!-- !PAGE CONTENT! -->
<div class="w3-main" style="margin:10px;margin-top:40px;">

  <!-- Header -->
  <header class="w3-container" style="padding-top:2px">
  </header>


<div class="w3-panel" style="margin:30px;">   
    <div class="w3-row-padding" style="margin:0 -16px">
      <div class="w3-quarter w3-center w3-margin-0 w3-padding-0">
        <h4>Welcome to adopt a drain</h4>
        <ul class="w3-ul">

          <li class="w3-padding"><a href="http://www.twaamtaro.org" target="_blank"><button class="w3-btn-block w3-btn w3-bar-item btn w3-blue">VIEW MAP</button></a></li>
          <li class="w3-padding"><button class="w3-btn-block w3-btn w3-bar-item btn w3-blue" onclick="notify()">NOTIFY ALL CITIZENS</button>
          <span id="notifyResult"></span>
          </li>
          <li class="w3-padding"><a href="functions/reports.php" target="_blank"><button class="w3-btn-block w3-btn w3-bar-item btn w3-blue">VIEW REPORTS</button></a></li>
          <li>
            <?php include 'functions/eneo.php'; ?>
          </li>
          
        </ul>
      
    </div>
      <div class="w3-rest " style="margin-right:16px" >
      <div class="w3-row-padding w3-margin-bottom">
    <div class="w3-col l2 m2 s6" style="width:20%">
      <div class="w3-container w3-padding w3-white w3-hover-shadow w3-border w3-border-teal" onclick="window.location.reload(true)" title="Click to view all drains">
        <h4>All Drains</h4>
        <h3 class="w3-text-black"><?php $drains = pg_num_rows($homedrain); echo $drains; ?></h3>
      </div>
    </div>

    <div class="w3-col l2 m2 s6" style="width:20%">
      <div class="w3-container w3-padding w3-white w3-hover-shadow w3-border w3-border-teal" onclick="filter('clear')" title="Click to view cleaned drains">
      <div class="w3-clear"></div><span class="w3-right"><img src="../assets/images/broom.png" title="Clean Drains" width="30" height="30"></span>
        <h4>Clean</h4>
        <h3 class="w3-text-black">
          <?php $cleandrain = pg_query($dbcon, "SELECT * FROM mitaro_dar WHERE cleared = true" ); 
          $cleandrains = pg_num_rows($cleandrain); echo $cleandrains; 
          ?>
        </h3>
      </div>
    </div>
    <div class="w3-col l2 m2 s6" style="width:20%">
      <div class="w3-container w3-padding w3-white w3-hover-shadow w3-border w3-border-teal" onclick="filter('notclear')" title="Click to view dirty drains">
      <div class="w3-clear"></div><span class="w3-right"><img src="../assets/images/trash.png" title="Dirty Drains" width="30" height="30"></span>
        <h4>Dirty</h4>
        <h3 class="w3-text-black">
        <?php $dirtydrain = pg_query($dbcon, "SELECT * FROM mitaro_dar WHERE cleared = false"); 
        $dirtydrains = pg_num_rows($dirtydrain); echo $dirtydrains; ?>
        </h3>
        </div>
    </div>
    <div class="w3-col l2 m2 s6 " style="width:20%">
      <div class="w3-container w3-padding w3-white w3-hover-shadow w3-border w3-border-teal">
        <div class="w3-clear"></div><span class="w3-right"><img src="../assets/images/help.png" title="Help Needed" width="30" height="30"></span>
        <h4>Help</h4>
        <h3 class="w3-text-black">
        <?php $helpdrain = pg_query($dbcon, "SELECT * FROM mitaro_dar WHERE need_help = true");
        $helpdrains = pg_num_rows($helpdrain); echo $helpdrains; ?>
        </h3>
      </div>
    </div>
    <div class="w3-col l2 m2 s6" style="width:20%">
      <a href="citizens.php" target="_blank"><div class="w3-container  w3-padding w3-white w3-hover-shadow w3-border w3-border-teal" title="Click to view all citizens" >
        <div class="w3-clear"></div><span class="w3-right"><img src="../assets/images/group.png" title="Citizens" width="30" height="30"></span>
        <h4>Citizens</h4>
        <h3 class="w3-text-black"><?php $user= pg_query($dbcon, "SELECT * FROM users"); 
        $users = pg_num_rows($user); echo $users; ?>
          
        </h3>
      </div></a>
    </div>
    <!--div class="w3-col l2 m2 s6">
      <div class="w3-container w3-padding-16 w3-transparent w3-hover-shadow w3-border w3-border-green" title="">
        
        <div class="w3-clear"></div>
        <h4>Area</h4>
        <h3 class="w3-text-black">Kigogo</h3>
        </div>
      </div>
    </div-->
  
      <span id="serverResult">
        <?php include 'functions/page.php'; ?>
      </span>
      </div>
    </div>
  </div>

  
  <hr>

  <div class="w3-container">

  <!-- Footer -->
  <footer class="w3-container w3-padding-16 w3-light-grey">
   
    <p>Twaa Mtaro by <a href="#" target="_blank">TURP</a></p>
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
  function activediv()
  {
    document.getElementById("filterbtn").style.boxShadow="0 8px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)";
  }
</script>

</body>
</html>
