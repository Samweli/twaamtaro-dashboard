import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

import {AuthService} from "./../../../core/auth.service";
import { DrainsService } from './../../../core/drains.service';
import { PagerService } from './../../../core/paging.service';
import { SessionService } from '../../../core/session.service'

import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'help-drains',
  templateUrl: './help-drain.component.html',
  styleUrls: ['./help-drain.component.css'],
  providers: []
})
export class HelpDrainComponent implements OnInit {
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
  weoStatusColumn: boolean = false;
  veoStatusColumn: boolean = false;
  disableWardSelect: boolean = true;
  disableStreetSelect: boolean = true;

  constructor(
    private drainService: DrainsService,
    public authService: AuthService,
    private pagerService: PagerService,
    public ngProgress: NgProgress,
    private sessionService: SessionService
  ) { }

  getDuration(d)
  {
    var minutes = 1000 * 60;
    var hours = minutes * 60;
    var days = hours * 24;
    var years = days * 365;

    this.dateCreated = new Date("d");

    this.daysGone = Math.floor((this.today - this.dateCreated) / days);
    
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
    if(key.level == "municipal_name"){
      console.log('inside municipal level')
      this.pagedDrains = this.drains.filter(drain => drain.user.street[key.level] == key.event);
      this.disableWardSelect = false;
    }
    else if(key.level == "ward_name"){
      this.pagedDrains = this.pagedDrains.filter(drain => drain.user.street[key.level] == key.event);
      this.disableStreetSelect = false; 
      
    }
    else if(key.level == "street_name"){
      this.pagedDrains = this.pagedDrains.filter(drain => drain.user.street[key.level] == key.event); 
    }
  }


// filters need help drains based on their status
  statusFilter(pagedDrains,key):any{
        this.pagedDrains = this.drains.filter(drain => drain.status == key);
      }

  updateStatus(data: any, statusValue: string){
    this.drainService.update_status({need_help_id: data.id, status: statusValue})
    .subscribe( res => {
    }, err => {
    })
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
  }

  conditionalInitializer(){
    if(this.sessionService.hasRole("weo")){
      this.weoStatusColumn = this.sessionService.hasRole("weo")
    }
    else if(this.sessionService.hasRole("veo")){
      this.veoStatusColumn = this.sessionService.hasRole("veo")
    }

  }

  onChange(data){
    console.log('on change called');
    console.log(data);
  }

  ngOnInit(): void {
    this.getFilteredDrains();
    this.closedetails();
    this.closemodal();
    this.conditionalInitializer();
  }
}
