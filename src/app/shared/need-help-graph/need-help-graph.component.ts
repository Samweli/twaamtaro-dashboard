import {  Component, Input, OnChanges, OnInit, SimpleChanges  } from '@angular/core';
import {TranslateService} from "../../translate/translate.service";
import { ChartReadyEvent } from 'ng2-google-charts';
import { ChartErrorEvent } from 'ng2-google-charts';
import { ChartSelectEvent } from 'ng2-google-charts';
import { ChartMouseOverEvent, ChartMouseOutEvent } from 'ng2-google-charts';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-need-help-graph',
  templateUrl: './need-help-graph.component.html',
  styleUrls: ['./need-help-graph.component.css']
})
export class NeedHelpGraphComponent implements OnInit {

  private _needHelpData = new BehaviorSubject<any[]>([]);

  @Input()
  set needHelpData(value) {
    // set the latest value for _needHelpData BehaviorSubject
    this._needHelpData.next(value);
};

get needHelpData() {
    // get the latest value from _needHelpData BehaviorSubject
    return this._needHelpData.getValue();
}


  public lineChartData:any =  {};
  needHelpGraph: any = {};
  startDate: any;
  endDate: any;
  public selectEvent: ChartSelectEvent;

  constructor( private _translate: TranslateService, private datePipe: DatePipe) { }

  public ready(event: ChartReadyEvent) {
    console.log(event.message);
  }

  public error(event: ChartErrorEvent) {
    console.error(event);
  }

  public select(event: ChartSelectEvent) {
    this.selectEvent = event;
  }

  initilizeGraph(){
    this.startDate = new Date(2017,11,1);
    this.endDate = new Date(2018,0,20);
    let dateRage:any = {start: this.startDate, end: this.endDate};
    let dataHolder = this.needHelpData;
    if(this.needHelpData){
      dataHolder.filter( data => this.graphDataFilter(data))
      this.lineChartData = {
        chartType: 'LineChart',
        dataTable:this.prepareChartData(this.needHelpData, 'some data'),
        options: {title: this._translate.instant('graph_title')}
      };
    }
   

    // this.lineChartData = {
    //   chartType: 'LineChart',
    //   dataTable: [
    //     ['Year', 'Submitted', 'Approved', 'Resolved'],
    //     ['2004',  1000,      400,200],
    //     ['2005',  1170,      460,300],
    //     ['2006',  660,       1120,130],
    //     ['2007',  1030,      540,1400]
    //   ],
    //   options: {title: this._translate.instant('graph_title')}
    // };

  
   
  }

  // prepares data that  will be displayed on chart
  private prepareChartData(filteredData:any, rangeDates:any): any[]{

    let submittedCounter:any = 0;
    let approvedCounter:any = 0;
    let resolvedCounter:any = 0;
    let dataTable: any[] = [['Week','Submitted', 'Approved', 'Resolved']];
   let rangeDateArray: any[] = this.getRangeDates(rangeDates);
   rangeDateArray.forEach(element => {
     filteredData.forEach(el => {
     if(el.status == 'submitted'){
      if(this.dateFilter(el, element,'submitted')){
        submittedCounter++;
      }
     } else if(el.status == 'pending'){
      if(this.dateFilter(el, element,'pending')){
        approvedCounter++;
      }
     } else if(el.status == 'resolved'){
      if(this.dateFilter(el, element,'resolved')){
        resolvedCounter++;
      }
     }

     });
     dataTable.push([this.datePipe.transform(element.end),submittedCounter,approvedCounter,resolvedCounter]);
     submittedCounter = 0;
     approvedCounter = 0;
     resolvedCounter = 0;
   });

    return dataTable;

  }

  // filters data based on a specified date
  private dateFilter(suppliedData: any, date: any, status:any){
    let dateObj = new Date(suppliedData.created_at)
    let  bool: any = dateObj.getDate() >= date.start.getDate() && dateObj.getDate() <= date.end.getDate() && suppliedData.status == status;
    return bool;
  }

// returns array of dates falling in specified range
  private getRangeDates(dateRange:any): any[]{
    let data = this.getWeeksInMonth(0,2018);
    return data;
  }


  // returns all weeks of a particular month
  getWeeksInMonth(month, year): any [] {
    var weeks=[],
        firstDate=new Date(year, month, 1),
        lastDate=new Date(year, month+1, 0), 
        numDays= lastDate.getDate();
    
    var start=1;
    var end=7-firstDate.getDay();
    while(start<=numDays){
        weeks.push({start: new Date(year, month, start),end: new Date(year, month, end)});
        start = end + 1;
        end = end + 7;
        if(end>numDays)
            end=numDays;    
    }        
     return weeks;
 }

 // filters data before is sent to the graph
 private graphDataFilter(data:any):any{
   
    let objDate = new Date(data.created_at);
  

    return true;
  }


  ngOnInit() {
    this._needHelpData
    .subscribe(x => {
       if(x){
        this.initilizeGraph();
       }
    });   
}
     
  

}
