<?php
include 'dbcon.php';

    //Check if user is registered 
$sessionId = "+255755923102";
	$sqlCitizen = pg_query($dbcon,"SELECT * FROM users WHERE sms_number='$sessionId'");
    $citizenName=pg_fetch_assoc($sqlCitizen);
    $userId=$citizenName['id'];
 
    if(pg_num_rows($sqlCitizen) > 0) {
    	
        
    	$drainClaim = pg_query($dbcon,"SELECT * FROM sidewalk_claims WHERE user_id=$userId");

    while ($claimInfo=pg_fetch_assoc($drainClaim)) {

            $drain =$claimInfo["gid"];

            $drainsql= pg_query($dbcon,"SELECT * FROM mitaroKigogo WHERE gid=$drain");
    		$drainInfo= pg_fetch_assoc($drainsql);   
//var_dump($drainInfo);
            //Drain Info
            $drainName=$drainInfo['name'];
            $drainStreet=$drainInfo['address'];
            $infoDrain = " Namba ya mtaro: ".$drain." <br />Jina: ".$drainName." <br />Mtaa: ".$drainStreet." <br />";
            return $infoDrain;

            //Get Status of the drain

            if ($claimInfo["shoveled"] = true) {
                $drainLocalStatus="safi";
            } elseif ($claimInfo["shoveled"] = false){
                 $drainLocalStatus="chafu";
            }
            
            if ($drainInfo["cleared"] = true) {
                $drainGlobalStatus="msafi";
            } elseif($drainInfo["cleared"] = false) {
                $drainGlobalStatus="mchafu";
            }
            return $drainLocalStatus;
            return $drainGlobalStatus;

            //Collaborators
            $collaboratorsql = pg_query($dbcon,"SELECT * FROM sidewalk_claims WHERE gid=$drain");
            
            while ($collaboratorsInfo = pg_fetch_assoc($collaboratorsql)) {
            $collaboratorId = $collaboratorsInfo['user_id'];
             
            $sqlCollaborator = pg_query($dbcon,"SELECT * FROM users WHERE id=$collaboratorId");
            $collaborator = pg_fetch_assoc($sqlCollaborator);
            
            $collaboratorName = $collaborator['first_name']." ".$collaborator['last_name']."<br /> ";
            return $collaboratorName;
            }
           
            //return $collaborators;         
        //Help Needed
            $help = pg_query($dbcon,"UPDATE mitaroKigogo SET need_help = true WHERE gid=$drain");
            if ($help) {
                echo "Help is coming";
            } else {
                echo "Help failed";
            } 

        }//End While
        
    } //End if registered
        else {
        	echo "Namba yako ya simu haitambuliki na Twaa Mtaro. Nenda kwa kiongozi wako wa mtaa akuandikishe kwanza";
        }

?>