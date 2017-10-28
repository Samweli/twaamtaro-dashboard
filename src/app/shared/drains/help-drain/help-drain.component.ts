import { Component, OnInit } from '@angular/core';
import { HelpDrainsPipe } from './../drains.pipe';

import {AuthService} from "./../../../core/auth.service";
import { DrainsService } from './../../../core/drains.service';
import { PagerService } from './../../../core/paging.service';

import * as _ from 'underscore';
import { Drain } from './../drain';

@Component({
  selector: 'help-drains',
  templateUrl: './help-drain.component.html',
  styleUrls: ['./help-drain.component.css'],
  providers: []
})
export class HelpDrainComponent implements OnInit {
  title = 'Drains In Need of Help';
  drains: any;
  need_help = true;
  loggedIn: any;
  dateCreated: any;
  today: any;
  created: any;
  daysGone: any;
  pager: any = {}; // pager object
  pagedDrains: any[]; // paged drains

  constructor(private drainService: DrainsService, public authService: AuthService, private pagerService: PagerService) { }

  getDuration(d)
  { 
    var minutes = 1000 * 60;
    var hours = minutes * 60;
    var days = hours * 24;
    var years = days * 365;

    console.log (d);
    this.dateCreated = new Date("d");

    console.log (this.dateCreated);
    this.daysGone = Math.floor((this.today - this.dateCreated) / days);
    console.log (this.daysGone);
  }

  getDrainDetails(): void {
    this.drainService
      .getHelpDetails()
      .subscribe(
        drains => {
          this.drains = this.drainService.helpDrains;
          this.created = this.drains.created_at;
    this.today = Date.now();
    this.setPage(1);
    //this.getDuration(this.created);
      });
  }
  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
        return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.drains.length, page, 50);

    // get current page of items
    this.pagedDrains = this.drains.slice(this.pager.startIndex, this.pager.endIndex + 1);
  } 
 
  helpmodal()
  { 
    document.getElementById('helpdetails').style.display='block'
  }
  closedetails()
  { 
    var modal = document.getElementById('helpdetails');
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
  }
  closemodal()
  { 
    document.getElementById('helpdetails').style.display='none';
  }
  isLoggedIn()
  {
      this.loggedIn = this.authService.isLoggedIn();
      console.log(this.loggedIn)
  }
  ngOnInit(): void {
    this.getDrainDetails();
    this.closedetails();
    this.closemodal();
  }
}
