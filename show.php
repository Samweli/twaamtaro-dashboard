
<!DOCTYPE html>
<head>
	<title>SMS</title>
	<link rel="stylesheet" type="text/css" href="styles/w3.css">
  <!--link rel="stylesheet" type="text/css" href="styles/application.css" -->
  <link rel="stylesheet" type="text/css" href="styles/drains.css">
</head>
<body class="w3-center w3-container">
<table class="w3-table w3-bordered w3-hoverable">
    <tr>
      <th>Namba ya Mtaro</th>
      <th>Jina la Mtaro</th>
      <th>Mtaa</th>
    </tr>

<?php
    
    include 'dbcon.php';
  
    $drain = pg_query($dbcon, "SELECT * FROM mitaroKigogo");

    if (!$drain) {
    	echo "Table is empty ";
    }

    while($drain_row=pg_fetch_assoc($drain)) {
?>

	<tr>
      <td><?php echo $drain_row["gid"]; ?></td>
      <td><?php echo $drain_row["name"]; ?></td>
      <td><?php echo $drain_row["address"]; ?></td>
      <?php }  ?>
    </tr>

    </table> 

</body>
</html>