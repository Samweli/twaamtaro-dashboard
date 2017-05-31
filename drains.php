<?php
    include 'dbcon.php';

    $sqlClaim = "SELECT * FROM drain_claims";

    $drainClaim = pg_query($dbcon,"SELECT * FROM sidewalk_claims");

    if ($drainClaim) {
        while ($drain_row = pg_fetch_array($drainClaim)) {
        $citizenId = $drain_row["id"]; //Consider a citizen with more than one mtaro
        $drainId = $drain_row["gid"];

    //Chagua taarifa za Mtaro
        $sqlCitizen = "SELECT * FROM mitaroKigogo WHERE gid ='$drainId'";

        $drainResult = pg_query($dbcon,$sqlCitizen) or die(pg_error('$dbcon'));

        $drainInfo = pg_fetch_array($drainResult); 
        $drain_name = $drainInfo["name"];
        $drain_address = $drainInfo["address"];


    //Chagua Mhusika
        $sqlCitizen = "SELECT * FROM users WHERE id ='$citizenId'";

        $result = pg_query($dbcon,$sqlCitizen) or die(pg_error('$dbcon'));

        $citizen = pg_fetch_array($result); 
        $mobile = $citizen['sms_number'];
        $name = $citizen['first_name']." ".$citizen['last_name'];
            
    } //End while
}//End If
    else {
        echo "There are no assigned drains";
    }

    
//" "" "" "" "" "___    

?>
