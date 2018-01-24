import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-month-picker',
  templateUrl: './month-picker.component.html',
  styleUrls: ['./month-picker.component.css']
})
export class MonthPickerComponent implements OnInit {

  @Output()
  selectedMonth: EventEmitter<any> = new EventEmitter();

  private mm : any ;
  data: any ={};
  months = [
          { val: '0',  name: 'Jan' },
          { val: '1',  name: 'Feb' },
          { val: '2',  name: 'Mar' },
          { val: '3',  name: 'Apr' },
          { val: '4',  name: 'May' },
          { val: '5',  name: 'Jun' },
          { val: '6',  name: 'Jul' },
          { val: '7',  name: 'Aug' },
          { val: '8',  name: 'Sep' },
          { val: '9',  name: 'Oct' },
          { val: '10',  name: 'Nov' },
          { val: '11',  name: 'Dec' }
      ];
  
      ngOnInit() { 
         this.getMonth(); 
  
      } 
      
      onChange(month){
        this.data.month = month;
        this.selectedMonth.emit(this.data);
      }
  
      getMonth(){
      var today = new Date();
      this.mm = today.getMonth()+1;     
      if(this.mm<10) {
      this.mm='0'+this.mm        
          }
      }

}
