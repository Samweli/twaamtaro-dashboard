import { Component, OnInit } from '@angular/core';
import { Directive } from '@angular/core';
import { DrainsService } from './../../../core/drains.service';
import { PagerService } from './../../../core/paging.service';
import { Drain } from './../drain';
import * as _ from 'underscore';
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'drain-list',
  templateUrl: './all-drains.component.html',
  styleUrls: ['./all-drains.component.css'],
  providers: [],
})
export class DrainListComponent implements OnInit {
  title = 'All Drains';
  private drains: any[];
  errMsg: any; // pager object
  pager: any = {}; // pager object
  pagedDrains: any[]; // paged drains

  constructor(private drainService: DrainsService, private pagerService: PagerService, public ngProgress: NgProgress) { }

    getDrains(): void {

      this.ngProgress.start();
      this.drainService
          .getDrains()
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
      this.pager = this.pagerService.getPager(this.drains.length, page, 20);

      // get current page of items
      this.pagedDrains = this.drains.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  ngOnInit(): void {
    this.getDrains();
  }
}
