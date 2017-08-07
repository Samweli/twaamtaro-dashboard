<?php

$dbcon = pg_connect("host=127.0.0.1 port=5432 dbname=mitaro user=postgres password=nancy");

  //For Checking if the connection has been established
   /*if(!$dbcon) {
      echo "Error : Unable to open database\n";
   } else {
      echo "Opened database successfully\n";
   }*/

?>