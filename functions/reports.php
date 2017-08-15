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
  
  <div class="w3-row-padding w3-margin w3-border-teal" >
    
  <form method="POST" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
      <select id="eneo" class="w3-padding" name="filterarea">
      <option > --- Chagua Eneo --- </option>
      <?php
      //onchange="filterEneo(this.value)"
        include 'dbcon.php';
        $drain = pg_query($dbcon, "SELECT DISTINCT address FROM mitaro_dar");
        while($address_row=pg_fetch_assoc($drain)) {
           $drainAddress=$address_row['address'];
      ?>
      <option  value="<?php echo $drainAddress; ?>" ><?php echo $drainAddress; ?></option>

      <?php } ?>
      </select>
      <button class="w3-btn btn w3-blue" name="graphbtn">TENGENEZA GRAFU</button>
  </form>
  </div>

  <!--div class="w3-row-padding" id="areabased"></div-->
<?php
  if (isset($_POST['graphbtn'])) {
      $filtervalue = $_POST['filterarea'];

      //$filtervalue = 'Tandale';
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

      

   
    ?>
    <div class="w3-row w3-center" >
      <h2><?php echo $filtervalue; ?></h2>
      <table>
        <tr>
        <?php if ($AreaAllClaims < 1 ) {
          echo "<p>Hakuna mtaro uliotwaliwa, Hivyo hauwezi kuata grafu yoyote</p>";
          }
        ?>
          <td><div id="areastatuschart" style="border: 1px; margin: 0px; padding: 0;"></div></td>
          <td><div id="areaclaimschart" style="border: 1px; margin: 0px; padding: 0;"></div></td>
          <?php  } ?>
        </tr>
      </table>
    
  <h2>Ripoti ya Jumla</h2>
    <table class="w3-responsive">
    <tr>
      <td><div id="statuschart" style="border: 1px; margin: 0px; padding: 0;"></div></td>
      <td><div id="claimschart" style="border: 1px; margin: 0px; padding: 0;"></div></td>

    </tr>
    </table>
  </div>
  


  
  <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(statusChart);
      google.charts.setOnLoadCallback(claimsChart);
      google.charts.setOnLoadCallback(AreaStatusChart);
      google.charts.setOnLoadCallback(AreaClaimsChart);

      function AreaStatusChart() {
        var data = google.visualization.arrayToDataTable([
          ['Mtaro', 'Hali'],
          ['Safi',   <?php echo $AreaCleanDrains; ?>],
          ['Chafu',    <?php echo $AreaDirtyDrains; ?>],
          ['Mssaada',  <?php echo $AreaHelpDrains; ?>]
        ]);
        var options = {
          title: 'Cleanness Report for Claimed Drains',
          'width':400,
          'height':300
        };
        var chart = new google.visualization.PieChart(document.getElementById('areastatuschart'));
        chart.draw(data, options);
      }

      function AreaClaimsChart() {
        var data = google.visualization.arrayToDataTable([
          ['Drain', 'Claims'],
          ['Imetwaliwa',    <?php echo $AreaAllClaims; ?> ],
          ['Haijatwaliwa',     <?php echo $AreaunClaimed; ?>]
        ]);
        var options = {
          title: 'Mitaro iliyotwaliwa na ambayo haijatwaliwa',
          'width':400,
          'height':300
        };
        //Error Handling
        var errContainer = document.getElementById('errclaims');
        var errMsg = 'Grafu haiwezi kutegenezwa';

        //google.visualization.errors.addError(errContainer, errMsg,response.getDetailedMessage(), {'showInTooltip': false});

        var chart = new google.visualization.PieChart(document.getElementById('areaclaimschart'));
        chart.draw(data, options);
      }

      function statusChart() {
        var data = google.visualization.arrayToDataTable([
          ['Drain', 'Status'],
          ['Safi',    <?php echo $CleanDrains; ?> ],
          ['Chafu',     <?php echo $DirtyDrains; ?>],
          ['Mssaada',  <?php echo $HelpDrains; ?>]
        ]);
        var options = {
          title: 'Ripoti ya Usafi kwa Mitaro ilitwaliwa',
          'width':400,
          'height':300
        };
        var chart = new google.visualization.PieChart(document.getElementById('statuschart'));
        chart.draw(data, options);
      }

      function claimsChart() {
        var data = google.visualization.arrayToDataTable([
          ['Drain', 'Claims'],
          ['Imetwaliwa',  <?php echo $AllClaims; ?> ],
          ['Haijatwaliwa',     <?php echo $unClaimed; ?>]
        ]);
        var options = {
          title: 'Mitaro iliyotwaliwa na ambayo haijatwaliwa',
          'width':400,
          'height':300
        };
        var chart = new google.visualization.PieChart(document.getElementById('claimschart'));
        chart.draw(data, options);
      }
    </script>
