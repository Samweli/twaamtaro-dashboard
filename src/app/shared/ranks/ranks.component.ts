import { Component, OnInit } from '@angular/core';
import { Drain } from "./../drains/drain";
import { DrainsService } from './../../core/drains.service';
import { AuthService} from "./../../core/auth.service";
import { ChartSelectEvent } from 'ng2-google-charts';
import { UserService } from "./../../core/user.service";
import {TranslateService} from "../../transilate/translate.service";

@Component({
  selector: 'app-ranks',
  templateUrl: './ranks.component.html',
  styleUrls: ['./ranks.component.css']
})
export class RanksComponent implements OnInit {
  title = 'Cleanness Ranks Based on Streets';
  ranksdata: any;
  streetName: any;
  streetId: any;
  ErrMsg: string;
  tableChartData: any;
  row: any;
  clean: any;
  dirty: any;
  adopted
  help : any;
  message: string;
  column: number ;
  selectedRowValues: any[];
  //street: any = {'street_id': ''};

  cssClassNames = {headerCell: 'w3-teal w3-padding', hoverTableRow: 'w3-grey', tableRow: 'w3-striped'};

  constructor(
    private drainService: DrainsService,
    public authService: AuthService,
    private userService: UserService,
    private _translate: TranslateService
  ) { }
  loggedIn: any;
  isLoggedIn()
  {
      this.loggedIn = this.authService.isLoggedIn();
  }
  public select(event: ChartSelectEvent) {
    document.getElementById('alert').style.display='block';
    this.streetId = event.selectedRowValues[0];
    this.streetName = event.selectedRowValues[1];
    this.adopted = event.selectedRowValues[2];
    this.clean = event.selectedRowValues[3];
    this.dirty = event.selectedRowValues[4];
    this.help = event.selectedRowValues[5];
    this.row = 1 + event.row;

    this.column = 1 + event.column;
  }
  closestreet()
  {
    var modal = document.getElementById('alert');
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
  }
  closemodal() {
    document.getElementById('alert').style.display='none';
  }
  ranksData(): void {
    this.drainService
        .getRanksData()
        .subscribe(
          data => {

          this.tableChartData =  {
            chartType: 'Table',
            dataTable: [
              ['Street ID',
                this._translate.instant('street'),
                this._translate.instant('adopted'),
                this._translate.instant('clean'),
                this._translate.instant('dirty'),
                this._translate.instant('need_help')],
            ],

              options: {
                title: 'Cleanness Ranks',
                width: '100%',
                height: '100%',
                allowHtml: true,
                alternatingRowStyle: true,
                cssClassNames: this.cssClassNames,
                page: 'enable',
                pageSize: 20,
                sort: 'enable',

              },
              view: {
                'columns': [1,2,3,4,5]
              }
            };
            this.ranksdata = this.drainService.ranksData;
             this.ranksdata.forEach( rank => {
              this.tableChartData.dataTable.push(
                [rank.street.id,
                rank.street.street_name ,
                rank.details.adopted,
                rank.details.cleaned,
                rank.details.uncleaned,
                rank.details.need_help
              ]);
            });

          }
        );
  }
  refreshText (){
    this.ranksData();
  }
  subscribeToLangChanged() {
    return this._translate.onLangChanged.subscribe(x => this.refreshText());
  }
  alertRes: any;
  alertMsg: any;
  alertVEO() {
    this.userService.alertLeader(this.streetId)
      .subscribe(
        res => {
          this.alertRes = res;
          console.log(this.alertRes );
          if (this.alertRes.success) {
            this.alertMsg = 'A message has been sent';
          } else {
            this.alertMsg = 'Message sending failed';
          }
      });

}


  ngOnInit() {
    this.subscribeToLangChanged();
    this.closestreet();
    this.refreshText();
  }
}
