 <?php 
  include 'dbcon.php';

    $sqlAllDrains = pg_query($dbcon,"SELECT * FROM mitaro_dar");
    $sqlAllClaims = pg_query($dbcon,"SELECT DISTINCT gid FROM sidewalk_claims");
    $sqlCleanDrains = pg_query($dbcon,"SELECT DISTINCT gid FROM sidewalk_claims WHERE shoveled=true");
    $sqlDirtyDrains = pg_query($dbcon,"SELECT DISTINCT gid FROM sidewalk_claims WHERE shoveled=false");
    $sqlHelpDrains = pg_query($dbcon, "SELECT * FROM mitaro_dar WHERE need_help = true");
              
    $AllDrains = pg_num_rows($sqlAllDrains);
    $AllClaims = pg_num_rows($sqlAllClaims);
    $unClaimed = $AllDrains-$AllClaims;
    $CleanDrains = pg_num_rows($sqlCleanDrains);
    $DirtyDrains = pg_num_rows($sqlDirtyDrains);
    $HelpDrains = pg_num_rows($sqlHelpDrains);

?>  
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" type="text/css" href="../../styles/w3.css">
    <link rel="stylesheet" type="text/css" href="../../styles/style.css">

  <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(statusChart);
      google.charts.setOnLoadCallback(claimsChart);

      function statusChart() {
        var data = google.visualization.arrayToDataTable([
          ['Drain', 'Status'],
          ['Clean',    <?php echo $CleanDrains; ?> ],
          ['Dirty',     <?php echo $DirtyDrains; ?>],
          ['Help',  <?php echo $HelpDrains; ?>]
        ]);
        var options = {
          title: 'Cleanness Report for Claimed Drains'
        };
        var chart = new google.visualization.PieChart(document.getElementById('statuschart'));
        chart.draw(data, options);
      }

      function claimsChart() {
        var data = google.visualization.arrayToDataTable([
          ['Drain', 'Claims'],
          ['Claimed',    <?php echo $AllClaims; ?> ],
          ['Not Claimed',     <?php echo $unClaimed; ?>]
        ]);
        var options = {
          title: 'Claimed vs Unclaimed Drains'
        };
        var chart = new google.visualization.PieChart(document.getElementById('claimschart'));
        chart.draw(data, options);
      }
    </script>
<script>
    function filterEneo(area) { 
      var xhttp = new XMLHttpRequest();
      var area = document.getElementById("eneo").value;
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
           document.getElementById('areabased').innerHTML = this.responseText;
          }
        };
        xhttp.open("GET", "areareports.php?filterarea="+area, true);
        xhttp.send();
    }
  </script>   
</head>

    
 
  <div class="w3-row-padding w3-margin-bottom">
    <div class="w3-col l4 m4 s12">
    Left
    </div>
    <div class="w3-col l4 m4 s12">
      <select id="eneo" class="w3-padding w3-select" onchange="filterEneo(this.value)">
      <option > --- Select Area --- </option>
      <?php
        include 'dbcon.php';
        $drain = pg_query($dbcon, "SELECT DISTINCT address FROM mitaro_dar");
        while($address_row=pg_fetch_assoc($drain)) {
           $drainAddress=$address_row['address'];
      ?>
      <option  value="<?php echo $drainAddress; ?>" ><?php echo $drainAddress; ?></option>

      <?php } ?>
      </select>
    </div>

    <div class="w3-col l4 m4 s12">
    Right
    </div>
  </div>

  <div class="w3-row-padding" id="areabased">
   
  </div>
    
  <div class="w3-row-padding">
   <div class="w3-half s12">
     <div id="statuschart" style="width: 800px; height: 500px; margin: 0px; padding: 0;"></div>
   </div>
   <div class="w3-half s12">
     <div id="claimschart" style="width: 800px; height: 500px; margin: 0px; padding: 0;"></div>
   </div>
  </div>
    
    <br>
    
