import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Drain } from "./../drains/drain";
import { DrainsService } from './../../core/drains.service';
import { AuthService} from "./../../core/auth.service";
import { ChartSelectEvent } from 'ng2-google-charts';
import { UserService } from "./../../core/user.service";
import { TranslateService } from "../../translate/translate.service";
import { NgProgress } from 'ngx-progressbar';
import { StreetService } from "../../core/streets.service";

@Component({
  selector: 'app-ranks',
  templateUrl: './ranks.component.html',
  styleUrls: ['./ranks.component.css']
})
export class RanksComponent implements OnInit, AfterViewInit {
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
  streets: any;
  areaCount: any =[];
  citizens: any;

  cssClassNames = {headerCell: 'w3-teal w3-padding', hoverTableRow: 'w3-grey', tableRow: 'w3-striped'};

  constructor(
    private drainService: DrainsService,
    public authService: AuthService,
    private userService: UserService,
    private _translate: TranslateService,
    public ngProgress: NgProgress,
    private streetService: StreetService
 ) { }


  loggedIn: any;

  //Checks if a user is loggen in
  isLoggedIn()
  {
      this.loggedIn = this.authService.isLoggedIn();
  }

  //Get data from selected table row
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

  //Close the modal box by clicking anywhere in the document
  closestreet()
  {
    var modal = document.getElementById('alert');
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
  }

  //Open the Message Box
  openMsgBox() {
    document.getElementById('msgBox').style.display='block';
  }

  //Close any open div
  close(id) {
    document.getElementById(id).style.display='none';
  }
   //Get the population of users in a particular street
   getStreetsPopulation(users) {
    this.streetService.getStreets()
    .subscribe(res => {
      this.streets = res
      //this.countUsers(this.streets.id,users)
        this.streets.forEach(street => {
        var userCount = 0;
     for (let i = 0; i < users.length; i++) {       
      if(street.id == users[i].street.id) {
       userCount++
      }
    } 
    this.areaCount.push({'"ward"':street.ward_name, '"street"':street.street_name, '"population"':userCount})
      });
     console.log("In Ranks " + this.areaCount);
     var p = JSON.parse(this.areaCount);
     return p;

    })
  }
  //Fetch Ranking Data and generate ranking table.
  ranksData(): void {
    this.ngProgress.start();
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
                showRowNumber: true
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
        this.userService.getUsers().subscribe(res =>{
          this.citizens = res; 
          this.getStreetsPopulation(this.citizens);
        });
        
    this.ngProgress.done();
  }
  refreshText (){
    this.ranksData();
  }
  subscribeToLangChanged() {
    return this._translate.onLangChanged.subscribe(x => this.refreshText());
  }

  //Send The Alert Message
  alert: any = {
    'message':'',
    'street':'',
  };
  alertRes: any;
  alertErrMsg: any;
  alertVEO() {
    this.alert.street = this.streetId;
    console.log(this.alert);
    this.userService.alertLeader(this.alert)
      .subscribe(
        res => {
          this.alertRes = res;
          console.log(this.alertRes );
          if (this.alertRes.success) {
            this.alertErrMsg = this._translate.instant('message');
          } else {
            this.alertErrMsg = 'Message sending failed';
          }
      });

  }
  printRanks(){
    document.getElementById("ranks").classList.remove("box", "w3-border", "w3-card-2", "w3-padding");
    document.getElementById("content-wrapper").classList.remove("content-wrapper")
    window.print();
  }
  ngAfterViewInit() {
    document.getElementById('msgBox').style.display='none';
  }
  ngOnInit() {
    this.subscribeToLangChanged();
    this.closestreet();
    this.refreshText();
  //Restore Styles after printing  
    window.onafterprint = function restoreStyles(){
      document.getElementById("ranks").classList.add("box", "w3-border", "w3-card-2", "w3-padding");
      document.getElementById("content-wrapper").classList.add("content-wrapper")
      }
  }
}
