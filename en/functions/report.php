<?php 
  include 'dbcon.php';


    $sqlAllDrains = pg_query($dbcon,"SELECT * FROM sidewalk_claims");
    $sqlCleanDrains = pg_query($dbcon,"SELECT * FROM sidewalk_claims WHERE shoveled=true");
    $sqlDirtyDrains = pg_query($dbcon,"SELECT * FROM sidewalk_claims WHERE shoveled=false");
    $sqlHelpDrains = pg_query($dbcon, "SELECT * FROM mitaroKigogo WHERE need_help = true");
              
    $AllDrains = pg_num_rows($sqlAllDrains);
    $CleanDrains = pg_num_rows($sqlCleanDrains);
    $DirtyDrains = pg_num_rows($sqlDirtyDrains);
    $HelpDrains = pg_num_rows($sqlHelpDrains);

?>  

    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
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

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }
    </script>
 
    <div id="piechart" style="width: 280px; height: 280px; margin: 0px; padding: 0;"></div>
