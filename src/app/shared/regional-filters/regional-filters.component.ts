import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {StreetService} from "../../core/streets.service";

@Component({
  selector: 'app-regional-filters',
  templateUrl: './regional-filters.component.html',
  styleUrls: ['./regional-filters.component.css']
})
export class RegionalFiltersComponent implements OnInit {

  @Output()
    selectValueChaged: EventEmitter<any> = new EventEmitter();
  streets: any = [];
  selectedStreet: any ={};

  constructor(private streetService: StreetService) { }

  onChange($event,level?){
    console.log("inside child component");
    console.log($event);
    this.selectValueChaged.emit({event: $event, level: level});

  }
  getStreets(){
    this.streetService.getStreets()
      .subscribe(res => {
        this.streets = res;
        console.log('streets');
        console.log(res);
      })
  }

  ngOnInit() {
    this.getStreets()
  }

}
