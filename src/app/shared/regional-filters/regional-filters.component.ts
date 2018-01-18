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
  wards: any = []
  municipals: any = [];

  selectedStreet: any ={};
  selectedWard: any ={};
  selectedMunicipal: any ={};

  constructor(private streetService: StreetService) { }

  onChange($event){
    if($event.municipal_name){
      console.log($event)
      this.getMunicipalsWards($event.id);
    }
    else if($event.ward_name){
      this.getWardStreets($event.id);
    }


    let data: any = {
                from: 'regional-filters',
                street_name: $event.street_name,
                ward_name: $event.ward_name,
                municipal_name: $event.municipal_name
                };



    this.selectValueChaged.emit(data);

  }
  getStreets(){
    this.streetService.getStreets()
      .subscribe(res => {
        this.streets = res;
      })
  }

  // gets all municipals from a service
  getMunicipals(){
    this.streetService.getMunicipals()
    .subscribe(res => {
      this.municipals = res;
    }, err => {
    })
  }

  // gets all wards by municipal id from a service
  getMunicipalsWards(id){
    this.streetService.getMunicipalWards(id)
    .subscribe(res => {
      this.wards = res;
    }, err => {
    })
  }

  // gets all wards by municipal id from a service
  getWardStreets(id){
    this.streetService.getWardStreets(id)
    .subscribe(res => {
      this.streets = res;
    }, err => {
    })
  }





  ngOnInit() {
    this.getMunicipals()

  }

}
