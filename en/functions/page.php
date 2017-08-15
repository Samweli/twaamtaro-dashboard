
  <?php
      include 'dbcon.php';
      //$drain = pg_query($dbcon, "SELECT * FROM mitaroKigogo");  // find out how many rows are in the table 
$drainrows = pg_query($dbcon, "SELECT COUNT(*) FROM mitaro_dar");
$r = pg_fetch_assoc($drainrows);
$numrows = $r['count'];

//echo $numrows;

// number of rows to show per page
$rowsperpage = 200;
// find out total pages
$totalpages = ceil($numrows / $rowsperpage);

// get the current page or set a default
if (isset($_GET['currentpage']) && is_numeric($_GET['currentpage'])) {
   // cast var as int
   $currentpage = (int) $_GET['currentpage'];
} else {
   // default page num
   $currentpage = 1;
} // end if

// if current page is greater than total pages...
if ($currentpage > $totalpages) {
   // set current page to last page
   $currentpage = $totalpages;
} // end if
// if current page is less than first page...
if ($currentpage < 1) {
   // set current page to first page
   $currentpage = 1;
} // end if

// the offset of the list, based on current page 
$offset = ($currentpage - 1) * $rowsperpage;

$dardrain = pg_query($dbcon, "SELECT * 
	FROM mitaro_dar 
	LIMIT  $rowsperpage OFFSET $offset");



/******  build the pagination links ******/
// range of num links to show

      ?>
      <table class="w3-table w3-hoverable w3-responsive w3-white" border="0">
    <tr class="w3-light-grey w3-border-bottom">
      <th>GID</th>
      <th>DRAIN NAME</th>
      <th>ADDRESS</th>
      <th>CITIZEN</th>
      <th>SEND SMS</th> 
      
    </tr>
  
    <?php
      
      //All Drains in Dar
      //$drain = pg_query($dbcon, "SELECT * FROM mitaro_dar");

      if (!$dardrain) {
        echo "Table is empty ";
      }
      while($drain_row=pg_fetch_assoc($dardrain)) {
         $drainId=$drain_row['gid'];

    ?>
    <tr><?php  ?>
      <td><?php echo $drainId; ?></td>
      <td><?php echo $drain_row['name'];  ?></td>
      <td><?php echo $drain_row['address']; ?></td>
      <td>
        <?php 
          
          $sqlCitizen = pg_query($dbcon,"SELECT * FROM sidewalk_claims WHERE gid=$drainId");
          
          if(pg_num_rows($sqlCitizen) > 0) {
            //echo "Claimed";
            while ($citizenInfo=pg_fetch_assoc($sqlCitizen)) {
              $citizenId=$citizenInfo['user_id'];
              $citizen = pg_query($dbcon,"SELECT * FROM users WHERE id=$citizenId");
              $citizenName=pg_fetch_assoc($citizen);
              $mhusika = $citizenName['first_name']." ".$citizenName["last_name"];
              $number = $citizenName['sms_number'];
              echo $mhusika."<br /> ";

            }
          } else {
            echo "Not Claimed";
          }
          
         ?>
          
      </td>
      <td>
        <?php //; ?>
        <a href="<?php echo 'notClear.php?thedrain='.$drainId; ?>"><button id="siomsafi" name="" class="btn warning" >DIRTY</button></a>
        <a href="<?php echo 'clear.php?thedrain='.$drainId; ?>"><button id="msafi" name="" class="btn success">CLEAN</button></a> 
        
         <!-- a href="<?php //echo 'inform.php?thedrain='.$drainId; ?>"><button id="taarifu" name="" class="btn w3-blue">NOTIFY</button></a-->
      </td>
       <!-- AJAX Scrits for Button Actions -->
    
    </tr>
<?php } //End While ?>  
    </table>
    <div class="w3-center">
<?php
$range = 3;

// if not on page 1, don't show back links
if ($currentpage > 1) {
   // show << link to go back to page 1
   echo " <a href='{$_SERVER['PHP_SELF']}?currentpage=1'><button class=\"w3-btn w3-blue w3-round-xxlarge\"><< First Page </button></a> ";
   // get previous page num
   $prevpage = $currentpage - 1;
   // show < link to go back to 1 page
   echo " <a href='{$_SERVER['PHP_SELF']}?currentpage=$prevpage'><button class=\"w3-btn w3-blue w3-round-xxlarge w3-margin-right\">< PreviousPage</button></a> ";
} // end if 

// loop to show links to range of pages around current page
for ($x = ($currentpage - $range); $x < (($currentpage + $range) + 1); $x++) {
   // if it's a valid page number...
   if (($x > 0) && ($x <= $totalpages)) {
      // if we're on current page...
      if ($x == $currentpage) {
         // 'highlight' it but don't make a link
         echo " <button class=\"w3-button w3-blue w3-circle\"><b>$x</b></button> ";
      // if not current page...
      } else {
         // make it a link
         echo " <a href='{$_SERVER['PHP_SELF']}?currentpage=$x'><button class=\"w3-btn w3-grey w3-circle\">$x</button></a> ";
      } // end else
   } // end if 
} // end for
                 
// if not on last page, show forward and last page links        
if ($currentpage != $totalpages) {
   // get next page
   $nextpage = $currentpage + 1;
    // echo forward link for next page 
   echo " <a href='{$_SERVER['PHP_SELF']}?currentpage=$nextpage'><button class=\"w3-btn w3-blue w3-round-xxlarge w3-margin-left\">Next Page ></button></a> ";
   // echo forward link for lastpage
   echo " <a href='{$_SERVER['PHP_SELF']}?currentpage=$totalpages'><button class=\"w3-btn w3-blue w3-round-xxlarge\">Last Page >></button></a> ";
} // end if
/****** end build pagination links ******/
 
?>
</div>
