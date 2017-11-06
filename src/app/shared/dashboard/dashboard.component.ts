import { Component, OnInit } from '@angular/core';
import {DrainsService} from "../../core/drains.service";
import {TranslateService} from "../../transilate/translate.service";

// Variable in assets/js/scripts.js file
declare var AdminLTE: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  draindata: any;
  pieChartData:any;
  adoptedPieChart:any;
  public translatedText: string;
  chartTitle: string;

constructor(private drainService: DrainsService, private _translate: TranslateService) { }
  drainData(): void {
    this.drainService
        .getDrainData()
        .subscribe(data => {
          this.draindata = this.drainService.drainData

          this.pieChartData =  {
          chartType: 'PieChart',
          dataTable: [
            ['Cleanness Feedback', 'Ratio'],
            [this._translate.instant('clean'), this.draindata.cleaned ],
            [this._translate.instant('dirty'), this.draindata.uncleaned ],
            [this._translate.instant('need_help'), this.draindata.need_help],
          ],
          options: {
                'title': this._translate.instant('title_dashboard'),
                pieHole: 0.3,
                height: 500,
                colors:['#5cb85c','#eea236','#6495ed']
                },
        };

        this.adoptedPieChart =  {
          chartType: 'PieChart',
          dataTable: [
            ['Drain Adoption', 'Ratio'],
            [this._translate.instant('adopted'), this.draindata.adopted ],
            [this._translate.instant('not_adopted'), this.draindata.not_adopted],
          ],
          options: {
                'title': this._translate.instant('title_drains'),
                pieHole: 0.3,
                height: 500,
                colors:['#964f8e','grey']
                },
        };

      });
  }

  refreshText() {
    this.drainData();

  }

  subscribeToLangChanged() {
    return this._translate.onLangChanged.subscribe(x => this.refreshText());
  }

  ngOnInit() {
    this.subscribeToLangChanged();
    this.drainData();
   }


}
