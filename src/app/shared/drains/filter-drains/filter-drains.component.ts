import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, } from '@angular/forms';
import { DrainsService } from './../../../core/drains.service';
import { Drain } from './../drain';
import { NgProgress } from 'ngx-progressbar';
import { PagerService } from './../../../core/paging.service';

@Component({
  selector: 'clean-drain',
  templateUrl: './filter-drains.component.html',
  styleUrls: ['./filter-drains.component.css'],
  providers: [],
})

export class FilterDrainsComponent implements OnInit {
  title = 'Choose Address';
  drains: any;
  alldrains: any;
  disableWardSelect: boolean = true;
  disableStreetSelect: boolean = true;
  ErrMsg: string;
  filteredDrains: any;
  filterObject: any = {};
  pager: any = {}; // pager object
  pagedDrains: any[]; // paged drains
  
  
  constructor(
    private drainService: DrainsService,
    private pagerService: PagerService, 
    public ngProgress: NgProgress
  ) { }
  
  //Checks for drains in municipals
  municipalDrains(municipals, locationName){
    return (municipals.some(location => location.municipal_name.toString() == locationName.toString())) 
  }
  //Checks for drains in wards
  wardDrains(wards, locationName){
    return (wards.some(location => location.ward_name.toString() == locationName.toString())) 
  }
  //Checks for drains in streets
  streetDrains(streets, locationName){
    return (streets.some(location => location.street_name.toString() == locationName.toString())) 
  }

  getDrains(){
    this.ngProgress.start();
    this.drainService
      .getDrains()
      .subscribe(res => {
        this.drains = res;
      this.ngProgress.done();
      });
  }
  getFilter(data){
    if(data.from == 'regional-filters'){
      if(data.municipal_name) this.disableWardSelect = false;
      if(data.ward_name) this.disableStreetSelect = false;

      this.filterObject.street = data.street_name;
      this.filterObject.ward = data.ward_name;
      this.filterObject.municipal = data.municipal_name;
      
    }
    this.filterDrains()
  }
  
  filterDrains(){
    this.ngProgress.start()
      if (this.filterObject.municipal != null) {
        this.filteredDrains = this.drains.filter((drain) => (this.municipalDrains(drain.municipals,this.filterObject.municipal)))
      }
      else if (this.filterObject.ward != null) {
        this.filteredDrains = this.drains.filter((drain) => (this.wardDrains(drain.wards,this.filterObject.ward)))
      }
      else if (this.filterObject.street != null) {
        this.filteredDrains = this.drains.filter((drain) => (this.streetDrains(drain.streets, this.filterObject.street)))
      }
    this.pagedDrains = this.filteredDrains;
    this.ngProgress.done()
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
        return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.drains.length, page, 100);

    // get current page of items
    this.pagedDrains = this.drains.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
  ngOnInit(){
    this.getDrains();
  }
}
