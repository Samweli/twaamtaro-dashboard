import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-status-filters',
  templateUrl: './status-filters.component.html',
  styleUrls: ['./status-filters.component.css']
})
export class StatusFiltersComponent implements OnInit {
  @Output()
  statusValueChaged: EventEmitter<any> = new EventEmitter();
  status: any = ['umewasilishwa','umethibitishwa','umeshugulikiwa'];
  selectedStatus: any;

  constructor() { }

  onChange($event){
    console.log('inside child component');
    console.log($event);
    let data: any = {
                      from: 'status-filters',
                      status: $event
                    }
    this.statusValueChaged.emit(data);

  }

  ngOnInit() {
  }

}
