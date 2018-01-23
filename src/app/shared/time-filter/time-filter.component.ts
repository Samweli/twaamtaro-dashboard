import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-time-filter',
  templateUrl: './time-filter.component.html',
  styleUrls: ['./time-filter.component.css']
})
export class TimeFilterComponent implements OnInit {

  @Output()
  selectedTime: EventEmitter<any> = new EventEmitter();
  time:any ={};

  constructor() { }

  // collects year and month for the graph
  graphTime($event){
    if($event.year){
      this.time.year = $event.year;
    }
    else if($event.month){
      this.time.month = $event.month;
    }
    if(this.time.year && this.time.month){
      this.selectedTime.emit(this.time);
    }


  }

  ngOnInit() {
  }

}
 