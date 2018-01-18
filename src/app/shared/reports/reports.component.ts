
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
  reportChart: any;

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
      }
    });
  }
  ngOnInit() {
    this.streetData();
  }

}
