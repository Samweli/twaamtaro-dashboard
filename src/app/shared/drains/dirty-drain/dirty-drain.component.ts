import { Component, OnInit } from '@angular/core';

import { DrainsService } from './../../../core/drains.service';
import { PagerService } from './../../../core/paging.service';
import * as _ from 'underscore';

import { Drain } from './../drain';
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'dirty-drain',
  templateUrl: './dirty-drain.component.html',
  styleUrls: ['./dirty-drain.component.css'],
  providers: [],
})
export class DirtyDrainComponent implements OnInit {
  title = 'Dirty Drains';
  drains: any[];
  cleared = true;
  pager: any = {}; // pager object
  pagedDrains: any[]; // paged drains
  errMsg: any; // Error Message
  sErr: any; //Search Error

  constructor(private drainService: DrainsService, private pagerService: PagerService, public ngProgress: NgProgress) { }
  
  getDrains(): void {
    this.ngProgress.start();    
    this.drainService
        .getDirtyDrains()
        .subscribe(drains => 
          { 
            this.drains = drains
            this.setPage(1);
            this.ngProgress.done();            
          }
        );
  }
  theSearch(query){
    return ((drain) => ((drain.gid.toString().toLowerCase().indexOf(query.toLowerCase()) > -1)||(drain.address.toString().toLowerCase().indexOf(query.toLowerCase()) > -1)))
  }

  //Searches for a drain in the list of clean drains
  searchDrain(query){
    this.ngProgress.start()
    let result = this.drains.filter(this.theSearch(query));
    if (result.length > 0) {
      this.sErr = false;
      this.pagedDrains = result;
    }
    else {
      this.sErr = true;
    }
    this.ngProgress.done()
  }
  
  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
        return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.drains.length, page, 50);

    // get current page of drains
    this.pagedDrains = this.drains.slice(this.pager.startIndex, this.pager.endIndex + 1);
  } 
  ngOnInit(): void {
    this.getDrains();
    this.sErr = false;
  }
}
