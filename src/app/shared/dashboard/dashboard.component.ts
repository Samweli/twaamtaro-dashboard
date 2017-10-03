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
  draindata: any;
  pieChartData:any;
  adoptedPieChart:any;

constructor(private drainService: DrainsService) { }
  drainData(): void {
    this.drainService
        .getDrainData()
        .subscribe(data => {  
          this.draindata = this.drainService.drainData

          this.pieChartData =  {
          chartType: 'PieChart',
          dataTable: [
            ['Cleanness Feedback', 'Ratio'],
            ['Clean Drains', this.draindata.cleaned ],
            ['Dirty Drains', this.draindata.uncleaned ],
            ['Need Help', this.draindata.need_help],
          ],
          options: {
                'title': 'General Cleanness Report ',
                pieHole: 0.3,
                height: 500,
                },
        };

        this.adoptedPieChart =  {
          chartType: 'PieChart',
          dataTable: [
            ['Drain Adoption', 'Ratio'],
            ['Adopted', this.draindata.adopted ],
            ['Not Adopted', this.draindata.not_adopted],
          ],
          options: {
                'title': 'Drain Adoption in Dar es salaam  ',
                pieHole: 0.3,
                height: 500,
                },
        };
      
      });   
  }
 
  ngOnInit() {  
    this.drainData();
   }
  
}
