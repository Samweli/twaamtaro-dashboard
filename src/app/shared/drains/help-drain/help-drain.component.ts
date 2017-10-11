import { Component, OnInit } from '@angular/core';
import {AuthService} from "./../../../core/auth.service";

import { HelpDrainsPipe } from './../drains.pipe';
import { DrainsService } from './../drains.service';
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
  getDrains(): void {
    this.drainService
        .getHelpDrains()
        .subscribe(
          drains => {
             this.drains = this.drainService.helpDrains;

  console.log(this.drains);
  console.log('Got the Drains');

            });
  }
  helpmodal()
  { 
    document.getElementById('heldetails').style.display='block'
  }
  closedetails()
  { 
    var modal = document.getElementById('heldetails');
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
  }
  closemodal()
  { 
    document.getElementById('heldetails').style.display='none';
  }
  isLoggedIn()
  {
      this.loggedIn = this.authService.isLoggedIn();
      console.log(this.loggedIn)
  }
  ngOnInit(): void {
    this.getDrains();
    this.closedetails();
    this.closemodal();
  }
}
