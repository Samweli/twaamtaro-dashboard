import { Component, OnInit } from '@angular/core';
import { DrainsService } from './../../../core/drains.service';
import { Drain } from './../drain';

import { PagerService } from './../../../core/paging.service';
import * as _ from 'underscore';

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

  constructor(private drainService: DrainsService, private pagerService: PagerService) { }
  unkownDrains(): void {
    this.drainService
        .getUnknownDrains()
        .subscribe(
          drains => {
            this.drains = drains;
          this.setPage(1);
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
  ngOnInit() {
    this.unkownDrains()
  }

}
