//Citizen is cllicked
document.getElementById('allcitizen').style.boxShadow='0 8px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)';
document.getElementById("clearbtn").style.boxShadow="0 0 0 0 rgba(0,0,0,0),0 0 0 0 rgba(0,0,0,0)";
document.getElementById("dirtybtn").style.boxShadow="0 0 0 0 rgba(0,0,0,0),0 0 0 0 rgba(0,0,0,0)";
document.getElementById("alldrain").style.boxShadow="0 0 0 0 rgba(0,0,0,0),0 0 0 0 rgba(0,0,0,0)";
document.getElementById('helpbtn').style.boxShadow='0 0 0 0 rgba(0,0,0,0),0 0 0 0 rgba(0,0,0,0)';

//All Drains is clicked 
document.getElementById('alldrain').style.boxShadow='0 8px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)';
document.getElementById("clearbtn").style.boxShadow="0 0 0 0 rgba(0,0,0,0),0 0 0 0 rgba(0,0,0,0)";
document.getElementById("dirtybtn").style.boxShadow="0 0 0 0 rgba(0,0,0,0),0 0 0 0 rgba(0,0,0,0)";
document.getElementById('allcitizen').style.boxShadow='0 0 0 0 rgba(0,0,0,0),0 0 0 0 rgba(0,0,0,0)';
document.getElementById('helpbtn').style.boxShadow='0 0 0 0 rgba(0,0,0,0),0 0 0 0 rgba(0,0,0,0)';


if (btnvalue == "clearbtn") {
        document.getElementById("clearbtn").style.boxShadow="0 8px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)";
        document.getElementById("dirtybtn").style.boxShadow="0 0 0 0 rgba(0,0,0,0),0 0 0 0 rgba(0,0,0,0)";
        document.getElementById("alldrain").style.boxShadow="0 0 0 0 rgba(0,0,0,0),0 0 0 0 rgba(0,0,0,0)";
        document.getElementById('allcitizen').style.boxShadow='0 0 0 0 rgba(0,0,0,0),0 0 0 0 rgba(0,0,0,0)';
        document.getElementById('helpbtn').style.boxShadow='0 0 0 0 rgba(0,0,0,0),0 0 0 0 rgba(0,0,0,0)';
      }
      else
        if (btnvalue == "dirtybtn") {
        document.getElementById("dirtybtn").style.boxShadow="0 8px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)";
        document.getElementById("clearbtn").style.boxShadow="0 0 0 0 rgba(0,0,0,0),0 0 0 0 rgba(0,0,0,0)";
        document.getElementById("alldrain").style.boxShadow="0 0 0 0 rgba(0,0,0,0),0 0 0 0 rgba(0,0,0,0)";
        document.getElementById('allcitizen').style.boxShadow='0 0 0 0 rgba(0,0,0,0),0 0 0 0 rgba(0,0,0,0)';
        document.getElementById('helpbtn').style.boxShadow='0 0 0 0 rgba(0,0,0,0),0 0 0 0 rgba(0,0,0,0)';
      }