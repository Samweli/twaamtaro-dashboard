import { Component, OnInit} from '@angular/core';
import {AuthService} from "./../../core/auth.service";

@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.css']
})
export class LeftSideComponent implements OnInit {
  constructor(public authService: AuthService) { }
  notifyCitizens() {
    
  }
  loggedIn: any;
  loggedUser: any;
  
  isLoggedIn()
  {
    this.authService.isLoggedIn();
    this.loggedUser = localStorage.getItem("user");
  }

  ngOnInit() {
  }

}
