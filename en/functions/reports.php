<?php 
  include 'dbcon.php';

    $sqlAllDrains = pg_query($dbcon,"SELECT * FROM mitaroKigogo");
    $sqlAllClaims = pg_query($dbcon,"SELECT * FROM sidewalk_claims");
    $sqlCleanDrains = pg_query($dbcon,"SELECT * FROM sidewalk_claims WHERE shoveled=true");
    $sqlDirtyDrains = pg_query($dbcon,"SELECT * FROM sidewalk_claims WHERE shoveled=false");
    $sqlHelpDrains = pg_query($dbcon, "SELECT * FROM mitaroKigogo WHERE need_help = true");
              
    $AllDrains = pg_num_rows($sqlAllDrains);
    $AllClaims = pg_num_rows($sqlAllClaims);
    $unClaimed = $AllDrains-$AllClaims;
    $CleanDrains = pg_num_rows($sqlCleanDrains);
    $DirtyDrains = pg_num_rows($sqlDirtyDrains);
    $HelpDrains = pg_num_rows($sqlHelpDrains);

?>  

    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(statusChart);
      google.charts.setOnLoadCallback(claimsChart);

      function statusChart() {
        //var clean =
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
        //var clean =
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
 
    <div id="statuschart" style="width: 500px; height: 500px; margin: 0px; padding: 0;"></div>
    <br>
    <div id="claimschart" style="width: 500px; height: 500px; margin: 0px; padding: 0;"></div>
