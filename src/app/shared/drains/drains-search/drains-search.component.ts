import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { DrainsService } from './../../../core/drains.service';
import { NgProgress } from 'ngx-progressbar';


@Component({
  selector: 'drains-search',
  templateUrl: './drains-search.component.html',
  styleUrls: ['./drains-search.component.css']
})
export class DrainsSearchComponent implements OnInit {
  @Input() query: any;
  @Output() searchQuery = new EventEmitter<any>()
  
  constructor(
    private ngProgress: NgProgress,
    private drainService: DrainsService
  ) { }

  streets: any;
  q: any = {'value': '' };
  thedrains: any; 

  //This function emits the input value to be used in another component
  emitValue($event)
  {
    this.query = this.q.value;
    this.searchQuery.emit(this.query);
  }

  ngOnInit() {
  }

}
