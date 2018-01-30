import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-year-picker',
  templateUrl: './year-picker.component.html',
  styleUrls: ['./year-picker.component.css']
})
export class YearPickerComponent implements OnInit {

  @Output()
  selectedYear: EventEmitter<any> = new EventEmitter();
  private years: number[] =[];
  private yy : number;
  data:any = {};

  constructor() { }

  
      ngOnInit() { 
      this.getYear();
  
      }  

      onChange(year){
        this.data.year = year;

        this.selectedYear.emit(this.data);
      }
  
       getYear(){
          var today = new Date();
          this.yy = today.getFullYear();        
          for(var i = (this.yy-100); i <= this.yy; i++){
          this.years.unshift(i);}
      }

}
