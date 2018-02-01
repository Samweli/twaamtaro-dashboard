import { Component, OnInit } from '@angular/core';
import { DrainsService } from './../../../core/drains.service';
import { Drain } from './../drain';

import { PagerService } from './../../../core/paging.service';
import * as _ from 'underscore';
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-unknown-drains',
  templateUrl: './unknown-drains.component.html',
  styleUrls: ['./unknown-drains.component.css']
})
export class UnknownDrainsComponent implements OnInit {

  title = 'Unknown Drains';
  drains: Drain[];
  ErrMsg: string;
  pager: any = {}; // pager object
  pagedDrains: any[]; // paged drains
  sErr: any;

  constructor(private drainService: DrainsService, private pagerService: PagerService, public ngProgress: NgProgress) { }
  unkownDrains(): void {
    this.ngProgress.start(); 
    this.drainService
        .getUnknownDrains()
        .subscribe(
          drains => {
            this.drains = drains;
          this.setPage(1);
          this.ngProgress.done(); 
        });
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
    this.pager = this.pagerService.getPager(this.drains.length, page, 20);

    // get current page of items
    this.pagedDrains = this.drains.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
  ngOnInit() {
    this.unkownDrains();
    this.sErr;
  }

}
