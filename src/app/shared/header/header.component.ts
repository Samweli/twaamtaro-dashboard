import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

import {AuthService} from "./../../core/auth.service";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router,public authService: AuthService) { }

  loginbox() {
    document.getElementById('loginmodal').style.display='block';
  }
  registerbox() {
    document.getElementById('registermodal').style.display='block';
  }
  logout() {
    // remove user from local storage to log user out
    this.authService.logout();
    this.router.navigateByUrl('/');
  }
  loggedIn: any;
  isLoggedIn()
  {

      this.loggedIn = this.authService.isLoggedIn();
      return this.loggedIn;
  }
  
  ngOnInit() {
    this.isLoggedIn();
  }


}
