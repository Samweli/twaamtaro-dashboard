import { Component, OnInit, OnDestroy } from '@angular/core';
import { DrainsService } from './../drains/drains.service';
import { ChartErrorEvent } from 'ng2-google-charts';

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
  reportChart: any;
  adoptedReportChart: any;
  constructor(private drainService: DrainsService) { }

  public error(event: ChartErrorEvent) {
    event.id = 'PieChartError';
    event.message = 'There is no suffiecient data to build a pie chart';
    event.detailedMessage = 'Details about the error';
  }

  streetData(): void {
    this.drainService
        .getRanksData()
        .subscribe( data => { 
          this.streets = this.drainService.ranksData;
          });

      }

  buildReport() {
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
            };
    
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
            };
        } 
    });  
  }
  ngOnInit() {
    this.streetData();
  }

}

