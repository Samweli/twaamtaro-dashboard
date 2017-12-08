import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

import {AuthService} from "./../../../core/auth.service";
import { DrainsService } from './../../../core/drains.service';
import { PagerService } from './../../../core/paging.service';

import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'help-drains',
  templateUrl: './help-drain.component.html',
  styleUrls: ['./help-drain.component.css'],
  providers: []
})
export class HelpDrainComponent implements OnInit {
  title = 'Drains In Need of Help';
  created: any;
  daysGone: any;
  dateCreated: any;
  drains: any = [];
  errMsg: any; // Error Message
  helpCategory : any;
  helpNeeded : any;
  loggedIn: any;
  need_help = true;
  pager: any = {}; // pager object
  pagedDrains: any[]; // paged drains
  thedrain: any;
  today: any;
  searchKey: any;

  constructor(
    private drainService: DrainsService,
    public authService: AuthService,
    private pagerService: PagerService,
    public ngProgress: NgProgress,
  ) { }

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
//Fetches all drains in need of help and their details
  getFilteredDrains(status?): any {
    this.ngProgress.start();
    this.drainService
      .getFilteredHelp(status)
      .subscribe(
        drains => {
          this.drains = this.drainService.helpDrains;
    this.setPage(1);
    this.ngProgress.done();
    });
  }

// filters need help drains based on their regions(stree,ward, municipal)
  drainFilter(data:any,key?):any{

    console.log("inside parent component");

    console.log(key);

     this.pagedDrains = this.drains.filter(drain => drain.user.street[key.level] == key.event);
    console.log(this.drains);
  }


// filters need help drains based on their status
  statusFilter(pagedDrains,key):any{
    
        console.log("inside parent component, status filter");
    
        console.log(key);
    
        // this.pagedDrains = this.drains.filter(drain => drain.status[key.level] == key.event);
        //console.log(this.drains);
      }

  updateStatus(data){
console.log("update status button clicked");
console.log(data);
  }    

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
        return;
    }

    // Get pager object from service
    this.pager = this.pagerService.getPager(this.drains.length, page, 50);

    // Get current page of items
    this.pagedDrains = this.drains.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  //Get extra details of the requested help


  helpmodal(gid,category,help)
  {
    this.thedrain = gid;
    this.helpCategory = category;
    this.helpNeeded = help;
    document.getElementById('helpdetails').style.display='block'
  }

  //Close the helpmodal by clicking anywhere else in the page
  closedetails()
  {
    var modal = document.getElementById('helpdetails');
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
  }

  //Close helpmodal by clicking the close button
  closemodal()
  {
    document.getElementById('helpdetails').style.display='none';
  }
  showFilters()
  {
    var x = document.getElementById("mobileFilters");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
  }

  isLoggedIn()
  {
      this.loggedIn = this.authService.isLoggedIn();
      console.log(this.loggedIn)
  }
  ngOnInit(): void {
    this.getFilteredDrains();
    this.closedetails();
    this.closemodal();
  }
}
