import { Component, OnInit } from '@angular/core';


// Variable in assets/js/scripts.js file
declare var AdminLTE: any;
declare var w3: any;
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor() { }
  cleanDrains() 
  {
      var resText =  "<clean-drain></clean-drain>";
           
   }
  allDrains() {
    alert('All');
  }
  helpDrains()
  { 
    alert('Help');
   }

  ngOnInit() {
     //AdminLTE.init();
     this.cleanDrains();
     w3.hide('#clean');
  }
}
