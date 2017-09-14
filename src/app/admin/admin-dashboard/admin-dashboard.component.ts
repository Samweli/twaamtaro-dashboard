import { Component, OnInit } from '@angular/core';


// Variable in assets/js/scripts.js file
declare var AdminLTE: any;

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  pieChartData =  {
    chartType: 'PieChart',
    dataTable: [
      ['Task', 'Cleanness Feedback'],
      ['Clean Drains',     71],
      ['Dirty Drains',    8820  ],
    ],
    options: {'title': 'General Cleanness Report for Drains'},
  };

  constructor() { }
  ngOnInit() {}
}
