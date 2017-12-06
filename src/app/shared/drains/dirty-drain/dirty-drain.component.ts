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
  }
}
