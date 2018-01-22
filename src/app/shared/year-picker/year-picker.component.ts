import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-year-picker',
  templateUrl: './year-picker.component.html',
  styleUrls: ['./year-picker.component.css']
})
export class YearPickerComponent implements OnInit {
  private years: number[] =[];
  private yy : number;

  constructor() { }

  
      ngOnInit() { 
      this.getYear();
  
      }  

      onChange(year){
        console.log('year changed');
        console.log(year);
      }
  
       getYear(){
          var today = new Date();
          this.yy = today.getFullYear();        
          for(var i = (this.yy-100); i <= this.yy; i++){
          this.years.push(i);}
      }

}
