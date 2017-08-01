

<!--a class="" href="#"><img class="img-responsive" src="assets/images/twaa-mtaro-logo.jpeg"></a-->

<ul class="w3-ul">
	<a class="w3-bar-item w3-button" href="#">Home</a>
    <li class="w3-bar-item w3-button w3-padding"><form action="search.php" method="post">
            <input type="text" name="search" ><button class="btn  w3-blue" name="searchbtn">TAFUTA</button>
          </form></li>
    <li class="w3-bar-item w3-button ">
    <form action="filter.php" method="post">
        <select class="w3-padding" name="filter">
          <option >--Filter--</option>
          <option value="clear">Misafi</option>
          <option value="notclear">Michafu</option>
        </select>
        <button class="btn w3-blue" name="filterbtn">FILTER</button>
      </form>
    </li>
    <li class="w3-bar-item w3-button ">
          <a href="#" class="w3-bar-item w3-button"><button class="btn  w3-blue" onclick="notify()">TUMA TAARIFA</button></a>
    </li>
</ul>


 <script>
   function notify() { 
    var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
         document.getElementById("serverResult").innerHTML = this.responseText;
        }
      };
      xhttp.open("GET", "notify.php", true);
      xhttp.send();
    }
  </script>