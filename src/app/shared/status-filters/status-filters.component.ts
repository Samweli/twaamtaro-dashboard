import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-status-filters',
  templateUrl: './status-filters.component.html',
  styleUrls: ['./status-filters.component.css']
})
export class StatusFiltersComponent implements OnInit {
  @Output()
  statusValueChaged: EventEmitter<any> = new EventEmitter();
  status: any = ['MUENDELEZO','KUFANYIKA','VIMEFANIKIWA'];
  selectedStatus: any;

  constructor() { }

  onChange($event){
    console.log('inside child component');
    console.log($event);
    this.statusValueChaged.emit($event);

  }

  ngOnInit() {
  }

}
