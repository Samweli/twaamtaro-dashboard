import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgProgress } from 'ngx-progressbar';

import { DrainsService } from './../../../core/drains.service';
import { PagerService } from './../../../core/paging.service';

import { Drain } from './../drain';
import * as _ from 'underscore';

@Component({
  selector: 'clean-drain',
  templateUrl: './clean-drain.component.html',
  styleUrls: ['./clean-drain.component.css'],
  providers: [],
})
export class CleanDrainComponent implements OnInit {
  title = 'Clean Drains';
  drains: any[];
  cleared = true;
  ErrMsg: string;
  pager: any = {}; // pager object
  pagedDrains: any[]; // paged drains

  constructor(private drainService: DrainsService, private pagerService: PagerService, public ngProgress: NgProgress) { }

  cleanDrains(): void {
    this.ngProgress.start();
    this.drainService
        .getCleanDrains()
        .subscribe(
          drains => { 
            this.drains = drains
            this.setPage(1);
            resError=> this.ErrMsg = resError
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
    this.cleanDrains();
    
  }
}
