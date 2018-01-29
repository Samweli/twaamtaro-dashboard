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
  drains: Drain[];
  disableWardSelect: boolean = true;
  disableStreetSelect: boolean = true;
  ErrMsg: string;
  filterObject: any = {};
  pager: any = {}; // pager object
  pagedDrains: any[]; // paged drains
  
  
  constructor(
    private drainService: DrainsService,
    private pagerService: PagerService, 
    public ngProgress: NgProgress
  ) { }
  

  theSearch(query){
    return ((drain) => (drain.address.toString().toLowerCase().indexOf(query.toLowerCase()) > -1))
  }
  filterDrains(data){
    console.log(data)
    if(data.from == 'regional-filters'){
      if(data.municipal_name) this.disableWardSelect = false;
      if(data.ward_name) this.disableStreetSelect = false;

      this.filterObject.street = data.street_name;
      this.filterObject.ward = data.ward_name;
      this.filterObject.municipal = data.municipal_name;
      
    }
    this.getDrains(this.filterObject)
  }
  getDrains(data){
    this.ngProgress.start();
    this.drainService
      .filterDrains(data)
      .subscribe(drains => {
        this.drains = drains;
        this.setPage(1);
      this.ngProgress.done();
      });
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
    
  }
}
