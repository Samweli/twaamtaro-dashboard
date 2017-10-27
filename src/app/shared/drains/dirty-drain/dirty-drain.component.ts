import { Component, OnInit } from '@angular/core';

import { DirtyDrainsPipe } from './../drains.pipe';
import { DrainsService } from './../../../core/drains.service';
import { PagerService } from './../../../core/paging.service';
import * as _ from 'underscore';

import { Drain } from './../drain';

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
  pagedItems: any[]; // paged items

  constructor(private drainService: DrainsService, private pagerService: PagerService) { }
  getDrains(): void {
    this.drainService
        .getDirtyDrains()
        .subscribe(drains => 
          { 
            this.drains = drains
            //this.allItems = data;
            this.setPage(1);
          }
        );
  }
  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
        return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.drains.length, page, 20);

    // get current page of items
    this.pagedItems = this.drains.slice(this.pager.startIndex, this.pager.endIndex + 1);
  } 
  ngOnInit(): void {
    this.getDrains();
  }
}
