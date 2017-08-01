<!DOCTYPE html>
<head>
  <title>Tafuta</title>
  <link rel="stylesheet" type="text/css" href="styles/w3.css">
  <!--link rel="stylesheet" type="text/css" href="styles/application.css" -->
  <link rel="stylesheet" type="text/css" href="styles/drains.css">
</head>
<body class="w3-center w3-container">
  <div class="w3-row w3-margin" style="padding-bottom:10px">
    
  <?php

   include 'dbcon.php';
  // Escape user inputs for security
  $search = pg_escape_string($_GET['searchword']);
  //$search = $_GET['search'];
  //if(isset($_GET['searchbtn'])){
      // Attempt select query execution
      $usersql = "SELECT * FROM users WHERE first_name LIKE '%".$search."%'
      UNION 
      SELECT * FROM users WHERE email LIKE '%".$search."%'
      UNION
      SELECT * FROM users WHERE last_name LIKE '%".$search."%'
      UNION
      SELECT * FROM users WHERE organization LIKE '%".$search."%'
      UNION
      SELECT * FROM users WHERE sms_number LIKE '%".$search."%'";

    $searchuser = pg_query($dbcon,$usersql);
 //var_dump($searchdrain);
 //var_dump(pg_last_error());
if ($searchuser ) {
  ?>
  <h3 class="w3-center">MAJIBU</h3>
<table class="w3-table w3-hoverable w3-responsive" border="0">
<tr class="w3-light-grey"><th class="w3-center" colspan="4">WANANCHI</th></tr>
      <tr class="w3-light-grey " >
        <th>Namba ya Mkazi</th>
        <th>Jina la Mkazi</th>
        <th>Simu</th>
        <th>Mitaro</th>
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
        echo "Hakuna taarifa yoyote inayohusu ".$search;
        }//End Else  

        //}// End Submit
        ?>

      </div> <!--End Column -->
    </div> <!-- End Row -->
</body>

  <!-- AJAX Scrits for Button Actions -->
