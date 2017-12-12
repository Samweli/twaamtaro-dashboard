import {Component, EventEmitter, OnInit, Input, Output} from '@angular/core';
import {StreetService} from "../../core/streets.service";

@Component({
  selector: 'app-regional-filters',
  templateUrl: './regional-filters.component.html',
  styleUrls: ['./regional-filters.component.css']
})
export class RegionalFiltersComponent implements OnInit {

  @Input()
  disableWardSelect: boolean = true;

  @Input()
  disableStreetSelect: boolean = true;

  @Output()
    selectValueChaged: EventEmitter<any> = new EventEmitter();
  streets: any = [];
  selectedStreet: any ={};
  selectedWard: any ={};
  selectedMunicipal: any ={};

  constructor(private streetService: StreetService) { }

  onChange($event,level?){
    this.selectValueChaged.emit({event: $event, level: level});

  }
  getStreets(){
    this.streetService.getStreets()
      .subscribe(res => {
        this.streets = res;
      })
  }

  ngOnInit() {
    this.getStreets()
  }

}
