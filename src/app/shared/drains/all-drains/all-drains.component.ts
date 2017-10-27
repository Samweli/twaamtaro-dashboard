import { Component, OnInit } from '@angular/core';
import { Directive } from '@angular/core';
import { DrainsService } from './../../../core/drains.service';
import { PagerService } from './../../../core/paging.service';
import { Drain } from './../drain';
import * as _ from 'underscore';

@Component({
  selector: 'drain-list',
  templateUrl: './all-drains.component.html',
  styleUrls: ['./all-drains.component.css'],
  providers: [],
})
export class DrainListComponent implements OnInit {
  title = 'All Drains';
  private drains: any[];
  pager: any = {}; // pager object
  pagedItems: any[]; // paged items
  private allItems: any[];

  constructor(private drainService: DrainsService, private pagerService: PagerService) { }

    getDrains(): void {
      this.drainService
          .getDrains()
          .subscribe(drains => {
            this.drains = drains;
            this.setPage(1);
      });
    }
    setPage(page: number) {
      if (page < 1 || page > this.pager.totalPages) {
          return;
      }
  
      // get pager object from service
      this.pager = this.pagerService.getPager(this.drains.length, page, 100);
      
      // get current page of items
      this.pagedItems = this.drains.slice(this.pager.startIndex, this.pager.endIndex + 1);
  } 

  ngOnInit(): void {
    this.getDrains();
  }
}
