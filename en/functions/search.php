  
<head>
  <title>Search</title>
</head>

  <div class="w3-row w3-margin" style="padding-bottom:10px">
    
  <?php

   include 'dbcon.php';
  // Escape user inputs for security
  $searchkey = pg_escape_string($_GET['searchword']);
  $search = strtolower($searchkey);
  //$search = $_GET['search'];
  //if(isset($_GET['searchbtn'])){
      // Attempt select query execution
      $usersql = "SELECT * FROM users WHERE LOWER(first_name) LIKE '%".$search."%'
      UNION 
      SELECT * FROM users WHERE LOWER(email) LIKE '%".$search."%'
      UNION
      SELECT * FROM users WHERE LOWER(last_name) LIKE '%".$search."%'
      UNION
      SELECT * FROM users WHERE LOWER(organization) LIKE '%".$search."%'
      UNION
      SELECT * FROM users WHERE LOWER(sms_number) LIKE '%".$search."%'";

    $searchuser = pg_query($dbcon,$usersql);

if(pg_num_rows($searchuser) > 0){
  ?>
  <h3 class="w3-center w3-text-black">SEARCH RESULTS</h3>
  <table class="w3-table w3-hoverable w3-responsive w3-white" border="0">
  <tr class="w3-light-grey"><th class="w3-center" colspan="4">CITIZENS</th></tr>
      <tr class="w3-light-grey w3-border-bottom" >
        <th>Citizen ID</th>
        <th>Name</th>
        <th>Phone Number</th>
        <th>Drains</th>
      </tr>
    
      <?php

          //&& !$searchclaims
          while($user_row=pg_fetch_assoc($searchuser)) {
            $user = $user_row['id'];
            $mhusika = $user_row['first_name'].' '.$user_row['last_name'];
            $namba = $user_row['sms_number'];
            $mitaro = " ";

            $sqlClaims = pg_query($dbcon,"SELECT * FROM sidewalk_claims WHERE user_id='$user'");

            if(pg_num_rows($sqlClaims) > 0) {
              while ($claimsInfo=pg_fetch_assoc($sqlClaims)) {
                $mitaro .=$claimsInfo['gid'];
              }

            } else {
              echo $mitaro ="No Claims";
              
            }
      ?>
      <tr>
        <td><?php echo $user; ?></td>
        <td><?php echo $mhusika; ?></td>
        <td><?php echo $namba; ?></td>
        <td><?php echo $mitaro; ?></td>
         <?php } //End While
           ?>
      </tr>

      </table>

      <?php 
        } //End if*/
        else
         { 
        echo "<span class=\"w3-center\">There is no any information related to ".$search."</span>"
;
        }//End Else  

        //}// End Submit
        ?>
      </div> <!--End Column -->
    </div> <!-- End Row -->


  <!-- AJAX Scrits for Button Actions -->
