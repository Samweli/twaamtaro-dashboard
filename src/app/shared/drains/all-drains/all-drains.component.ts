import { Component, OnInit, ViewChild } from '@angular/core';
import { Directive } from '@angular/core';
import { DrainsService } from './../../../core/drains.service';
import { PagerService } from './../../../core/paging.service';
import { Drain } from './../drain';
import * as _ from 'underscore';
import { NgProgress } from 'ngx-progressbar';
import { DrainsSearchComponent } from "../drains-search/drains-search.component";

@Component({
  selector: 'drain-list',
  templateUrl: './all-drains.component.html',
  styleUrls: ['./all-drains.component.css'],
  providers: [],
})
export class DrainListComponent implements OnInit {
  title = 'All Drains';

  @ViewChild(DrainsSearchComponent)
  private drainSearch: DrainsSearchComponent;
  
  private drains: any[];
  errMsg: any; // pager object
  pager: any = {}; // pager object
  pagedDrains: any[]; // paged drains
  sErr = false; //Search error

  constructor(
    private drainService: DrainsService, 
    private pagerService: PagerService, 
    public ngProgress: NgProgress
  ) { }
    
  getDrains(): any {
    this.ngProgress.start();
    this.drainService
      .getDrains()
      .subscribe(drains => {
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
      this.pager = this.pagerService.getPager(this.drains.length, page, 100);

      // get current page of items
      this.pagedDrains = this.drains.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  ngOnInit(): void {
    this.getDrains();
    this.sErr = false; 
  }
}
