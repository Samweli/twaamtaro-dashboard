

<h4 class="w3-center"> Ripoti ya Usafi</h4>
  <?php 
  include 'dbcon.php';


    $sqlAllDrains = pg_query($dbcon,"SELECT * FROM sidewalk_claims");
    $sqlCleanDrains = pg_query($dbcon,"SELECT * FROM sidewalk_claims WHERE shoveled=true");
    $sqlDirtyDrains = pg_query($dbcon,"SELECT * FROM sidewalk_claims WHERE shoveled=false");
          
    $AllDrains = pg_num_rows($sqlAllDrains);
    $CleanDrains = pg_num_rows($sqlCleanDrains);
    $DirtyDrains = pg_num_rows($sqlDirtyDrains);


    $ratioClean = ($CleanDrains/$AllDrains)*100;
    $ratioDirty = ($DirtyDrains/$AllDrains)*100;
   
    ?>
    <h5>Maeneo ya mitaro</h5>
    <div class="w3-light-grey">
    <?php  echo '<div class="w3-green w3-center" style="width:'.$ratioClean.'%">Safi - '.$ratioClean.'%</div>';
    ?>
    
    </div>

    <div class="w3-light-grey">
    <?php 
      echo '<div class="w3-red w3-center" style="width:'.$ratioDirty.'%">Chafu - '.$ratioDirty.'%</div>';
    ?> 
    
    </div>
