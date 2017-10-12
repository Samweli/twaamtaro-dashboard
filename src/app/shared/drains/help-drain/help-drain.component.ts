import { Component, OnInit } from '@angular/core';
import {AuthService} from "./../../../core/auth.service";

import { HelpDrainsPipe } from './../drains.pipe';
import { DrainsService } from './../../../core/drains.service';
import { Drain } from './../drain';

@Component({
  selector: 'help-drains',
  templateUrl: './help-drain.component.html',
  styleUrls: ['./help-drain.component.css'],
  providers: []
})
export class HelpDrainComponent implements OnInit {
  title = 'Drains In Need of Help';
  drains: any[];
  need_help = true;
  loggedIn: any;

  constructor(private drainService: DrainsService, public authService: AuthService) { }
  getDrainDetails(): void {
    this.drainService
      .getHelpDetails()
      .subscribe(
        drains => {
          this.drains = this.drainService.helpDrains;
      });
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
