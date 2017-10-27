import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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
  pagedItems: any[]; // paged items

  constructor(private drainService: DrainsService, private pagerService: PagerService) { }

  cleanDrains(): void {
    console.log('Comonent In');
    this.drainService
        .getCleanDrains()
        .subscribe(
          drains => { 
            this.drains = drains
            this.setPage(1);
            resError=> this.ErrMsg = resError
          }  
        );
  }
  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
        return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.drains.length, page, 10);

    // get current page of items
    this.pagedItems = this.drains.slice(this.pager.startIndex, this.pager.endIndex + 1);
  } 
  ngOnInit(): void {
    this.cleanDrains();
  }
}
