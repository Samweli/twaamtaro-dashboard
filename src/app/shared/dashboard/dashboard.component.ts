import { Component, OnInit } from '@angular/core';
import { DrainsService } from './../drains/drains.service';
import { Drain } from './../drains/drain';

// Variable in assets/js/scripts.js file
declare var AdminLTE: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'General Cleanness Report for Drains';
  alldrains: Drain[];
  cleandrains: any[];
  helpdrains: any[];
  dirtydrains:Drain[];
  unknowndrains:Drain[];
  draindata: any;
  //pieChartData:any;

constructor(private drainService: DrainsService) { }
 /* cleanDrains(): any {
   this.drainService
        .getCleanDrains()
        .subscribe(clean => this.cleandrains)
        .do(this.cleandrains.length);
  }
  dirtyDrains(): void {
    this.drainService
        .getDirtyDrains()
        .subscribe(dirty => this.dirtydrains = dirty);
  }
  helpDrains(): void {
    this.drainService
        .getHelpDrains()
        .subscribe(help => this.helpdrains = help);
  }
  unknownDrains(): any {
     this.drainService
        .getUnknownDrains()
        .subscribe(unknown => this.unknowndrains = unknown);
  }*/
  drainData(): void {

    
    this.drainService
        .getDrainData()
        .subscribe(data => { console.log('Inside comoooo');console.log(data);  this.draindata = data});
        
  }
 
  
  pieChartData =  {
    chartType: 'PieChart',
    dataTable: [
      ['Cleanness Feedback', 'Ratio'],
      ['Clean Drains', 65  ],['Dirty Drains', 165  ],
    ],
    options: {
          'title': 'General Cleanness Report ',
          pieHole: 0.4,
          'height':500 ,
          },
  };

  ngOnInit() {  
    this.drainData();
   }
  
}
