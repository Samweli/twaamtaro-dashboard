
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DrainsService } from './../../core/drains.service';
import { ChartErrorEvent } from 'ng2-google-charts';
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportComponent implements OnInit{
  title = 'Cleanness Reports';
  streets: any;
  region: any = {'name': '' };
  district: any = {'name': '' };
  ward: any = {'name': '' };
  streetname: any = {'name': '' };
  reportBuild = false;
  reportChart: any;
  adoptedReportChart: any;
  constructor(
    private drainService: DrainsService, 
    public ngProgress: NgProgress
  ) { }

  public error(event: ChartErrorEvent) {
    event.id = 'PieChartError';
    event.message = 'There is no suffiecient data to build a pie chart';
    event.detailedMessage = 'Details about the error';
  }

  streetData(): void {
    this.ngProgress.start(); 
    this.drainService
      .getRanksData()
      .subscribe( data => {
        this.streets = this.drainService.ranksData;
        this.ngProgress.done(); 
      });

  }

  buildReport() {
    this.reportBuild = true;
    if(this.streetname.name == "all") {
      var clean = 0;
      var unclean = 0; 
      var needHelp = 0;
      
       for (let i = 0; i < this.streets.length; i++) {
        unclean += this.streets[i].details.uncleaned;
      }

       for (let i = 0; i < this.streets.length; i++) {
        needHelp += this.streets[i].details.need_help;
      }

      for (let i = 0; i < this.streets.length; i++) {
        clean += this.streets[i].details.cleaned;
      }
      this.reportChart =  {
        chartType: 'PieChart',
        dataTable: [
          ['Cleanness Feedback', 'Ratio'],
          ['Clean Drains', clean ],
          ['Dirty Drains', unclean ],
          ['Need Help', needHelp],
        ],
        options: {
          'title': 'General Cleanness Report in all Strets',
          pieHole: 0.3,
    
          height: 500,
          colors:['#5cb85c','#eea236','#6495ed']
        },
      };

      //Get Data about drain adoption
      var adopted = 0; 
      var allDrains; 
      var notAdopted;
      
      for (let i = 0; i < this.streets.length; i++) {
        adopted += this.streets[i].details.adopted;
      }
      
      this.adoptedReportChart =  {
        chartType: 'PieChart',
        dataTable: [
          ['Drain Adoption', 'Ratio'],
          ['Adopted', adopted ],
          ['Not Adopted', notAdopted],
        ],
        options: {
          'title': 'Drain Adoption in All streets' ,
          pieHole: 0.3,
          height: 500,
          colors:['#964f8e','grey']
        },
      };
    }
    else {

    this.streets.forEach( street => {


      if(street.street.street_name == this.streetname.name) {
        this.reportChart =  {
          chartType: 'PieChart',
          dataTable: [
            ['Cleanness Feedback', 'Ratio'],
            ['Clean Drains', street.details.cleaned ],
            ['Dirty Drains', street.details.uncleaned ],
            ['Need Help', street.details.need_help],
          ],
          options: {
            'title': 'General Cleanness Report in '+ street.street.street_name,
            pieHole: 0.3,
      
            height: 500,
            colors:['#5cb85c','#eea236','#6495ed']
          },
        }; //End Cleanness ratio chart

        this.adoptedReportChart =  {
          chartType: 'PieChart',
          dataTable: [
            ['Drain Adoption', 'Ratio'],
            ['Adopted', street.details.adopted ],
            ['Not Adopted', street.details.not_adopted],
          ],
          options: {
            'title': 'Drain Adoption in '+ street.street.street_name,
            pieHole: 0.3,
            height: 500,
            colors:['#964f8e','grey']
          },
        }; //End adoption chart
      }
    });
   } //End Else
  } //End Build Report Function
  calcPercentage(value,total){
    var percent = (value/total) * 100;
    return percent;
  }
  displayDiv(id,value)
  {
    var element = document.getElementById(id);
    if (value == "hide") {
      element.style.display = "none";
      }
      else if (value == "show") {
        element.style.display = "block";
        }
  }
  tableReport(){
    this.displayDiv("tablecanvas","show");
  }
  printReport(){
    console.log("We are about to print you");
    window.print();
  }

  ngOnInit() {
    this.displayDiv("tablecanvas","hide");
    this.streetData();
  }

}
