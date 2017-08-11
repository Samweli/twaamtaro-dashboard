<?php
  include 'dbcon.php';
  //$filtervalue = $_GET['filterarea'];

  $filtervalue = 'Tandale';
  $filterAreaDrains = pg_query($dbcon,"SELECT * FROM mitaro_dar WHERE address = '".$filtervalue."'");
  $AreaAllDrains = pg_num_rows($filterAreaDrains);

  $areaclaimsql = "SELECT mitaro_dar.gid, mitaro_dar.address 
      FROM mitaro_dar
      INNER JOIN sidewalk_claims on sidewalk_claims.gid = mitaro_dar.gid AND mitaro_dar.address = '".$filtervalue."'";
  $filterclaims = pg_query($dbcon,$areaclaimsql);
  $AreaAllClaims = pg_num_rows($filterclaims); //All drains from a particular area


  $sqlAreaDirty = "SELECT mitaro_dar.gid, mitaro_dar.address 
      FROM mitaro_dar
      INNER JOIN sidewalk_claims on 
      sidewalk_claims.gid = mitaro_dar.gid AND sidewalk_claims.shoveled=false AND mitaro_dar.address = '".$filtervalue."'";

  $sqlAreaClean = "SELECT mitaro_dar.gid, mitaro_dar.address 
      FROM mitaro_dar
      INNER JOIN sidewalk_claims on 
      sidewalk_claims.gid = mitaro_dar.gid AND sidewalk_claims.shoveled=true AND mitaro_dar.address = '".$filtervalue."'";
 
  $sqlAreaHelp = "SELECT mitaro_dar.gid, mitaro_dar.address 
      FROM mitaro_dar
      INNER JOIN sidewalk_claims on 
      sidewalk_claims.gid = mitaro_dar.gid AND sidewalk_claims.shoveled=true AND mitaro_dar.need_help = true AND mitaro_dar.address = '".$filtervalue."'";

  $sqlAreaDirtyDrains = pg_query($dbcon, $sqlAreaDirty);
  $sqlAreaCleanDrains = pg_query($dbcon, $sqlAreaClean);
  $sqlAreaHelpDrains = pg_query($dbcon, $sqlAreaHelp);

  $AreaCleanDrains = pg_num_rows($sqlAreaCleanDrains);
  $AreaDirtyDrains = pg_num_rows($sqlAreaDirtyDrains);
  $AreaHelpDrains = pg_num_rows($sqlAreaHelpDrains);
 
  $AreaunClaimed = $AreaAllDrains-$AreaAllClaims;
    

echo "All Drains ".$AreaAllDrains;
echo " - All Claims ".$AreaAllClaims;
echo " - unClaimed ".$AreaunClaimed;
echo " - Dirty Claims ".$AreaDirtyDrains;
echo " - Clean Claims ".$AreaCleanDrains; 

?>  

  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" type="text/css" href="../../styles/w3.css">
    <link rel="stylesheet" type="text/css" href="../../styles/style.css">

  <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(AreaStatusChart);
      google.charts.setOnLoadCallback(AreaClaimsChart);

      function AreaStatusChart() {
        var data = google.visualization.arrayToDataTable([
          ['Drain', 'Status'],
          ['Clean',    <?php echo $AreaCleanDrains; ?> ],
          ['Dirty',     <?php echo $AreaDirtyDrains; ?>],
          ['Help',  <?php echo $AreaHelpDrains; ?>]
        ]);
        var options = {
          title: 'Cleanness Report for Claimed Drains'
        };
        //Error Handling
        var errContainer = document.getElementById('areastatuschart');
        var errMsg = 'Both Graph Data has zero values';

        google.visualization.errors.addError(errCcontainer, errMsg,
        response.getDetailedMessage(), {'showInTooltip': false});
        var chart = new google.visualization.PieChart(document.getElementById('areastatuschart'));
        chart.draw(data, options);

      }

      function AreaClaimsChart() {
        var data = google.visualization.arrayToDataTable([
          ['Drain', 'Claims'],
          ['Claimed',    <?php echo $AreaAllClaims; ?> ],
          ['Not Claimed',     <?php echo $AreaunClaimed; ?>]
        ]);
        var options = {
          title: 'Claimed vs Unclaimed Drains'
        };
        var errContainer = document.getElementById('areaclaimschart');
        var chart = new google.visualization.PieChart(document.getElementById('areaclaimschart'));
        chart.draw(data, options);
      }
    </script>

</head>  
  <div class="w3-row-padding w3-center">
  <h2><?php echo $filtervalue; ?></h2>
   <div class="w3-half s12">
     <div id="areastatuschart" style="width: 100%; height: 500px; margin: 0px; padding: 0;"></div>
   </div>
   <div class="w3-half s12">
     <div id="areaclaimschart" style="width: 100%; height: 500px; margin: 0px; padding: 0;"></div>
   </div>
  </div>
    

    


