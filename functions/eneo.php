
  <select id="eneo" class="w3-padding w3-select" onchange="filterEneo(this.value)">
  <option > --Chagua Eneo-- </option>
   	<?php
      include 'dbcon.php';
      $drain = pg_query($dbcon, "SELECT DISTINCT address FROM mitaro_dar");
       
      while($address_row=pg_fetch_assoc($drain)) {
         $drainAddress=$address_row['address'];
    ?>
    <option  value="<?php echo $drainAddress; ?>" ><?php echo $drainAddress; ?></option>

    <?php } ?>
  </select>
<!--button class="btn w3-blue"  >FILTER</button-->

<!--span id="serverResult" ></span-->