<?php
  include 'dbcon.php';
    //$filtervalue = $_GET['filterarea'];

    $filtervalue = 'Tandale';
    $drainsql = "SELECT gid FROM mitaro_dar WHERE address = '".$filtervalue."'";
    $filterdrains = pg_query($dbcon,$drainsql);
    $AllDrains = pg_num_rows($filterdrains);
    $AreaDrains = pg_fetch_assoc($filterdrains);

$claims=0;$clean=0;
$dirty=0; //Claimed Drains of a given area

//foreach ($AreaDrains as $drain) {
 
 do {
   
    //if ($sqlAllClaims) {
 $sqlAllClaims = pg_query($dbcon,"SELECT * FROM sidewalk_claims WHERE gid= $drain"); //Check if its claimed
 $AllClaims = pg_num_rows($sqlAllClaims);
 

    $sqlCleanDrains = pg_query($dbcon,"SELECT * FROM sidewalk_claims WHERE gid= $drain AND shoveled=true");
    $sqlDirtyDrains = pg_query($dbcon,"SELECT * FROM sidewalk_claims WHERE gid= $drain AND shoveled=false");
      if ($sqlCleanDrains) {
        $clean++;
      }
      if ($sqlDirtyDrains) {
        $dirty++;
      } 

     //} 

 /*else { 
    echo "Drains in this area have not been claimed yet";
 } 
}*/
$claims++;
} while ($sqlAllClaims);  
  $sqlHelpDrains = pg_query($dbcon, "SELECT * FROM mitaro_dar WHERE need_help = true");       
 
    $unClaimed = $AllDrains-$claims;
    
    //$DirtyDrains = pg_num_rows($sqlDirtyDrains);
    $HelpDrains = pg_num_rows($sqlHelpDrains);

echo "All Drains ".$AllDrains;
echo " - All Claims ".$claims;
echo " - unClaimed ".$unClaimed;
echo " - Dirty Claims ".$dirty;
echo " - Clean Claims ".$clean; 

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
          ['Clean',    <?php echo $clean; ?> ],
          ['Dirty',     <?php echo $dirty; ?>],
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
          ['Claimed',    <?php echo $claims; ?> ],
          ['Not Claimed',     <?php echo $unClaimed; ?>]
        ]);
        var options = {
          title: 'Claimed vs Unclaimed Drains'
        };
        var chart = new google.visualization.PieChart(document.getElementById('claimschart'));
        chart.draw(data, options);
      }
    </script>

</head>  
  <div class="w3-row-padding">
   <div class="w3-half s12">
     <div id="statuschart" style="width: 800px; height: 500px; margin: 0px; padding: 0;"></div>
   </div>
   <div class="w3-half s12">
     <div id="claimschart" style="width: 800px; height: 500px; margin: 0px; padding: 0;"></div>
   </div>
  </div>
    

    


