import { Component, OnInit } from '@angular/core';
import {AuthService} from "./../../core/auth.service";
import {Router} from "@angular/router";
import {SessionService} from "../../core/session.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor (
        private authService: AuthService,
        private router: Router,
        private sessionService: SessionService ) { }
  
  closelogin(){ 
    document.getElementById('loginmodal').style.display='none';
  }

  userData: any;
  loginStatus: any;
  theUser: any;
  user: any = { 'sms_number': '','password': '' };
  login() {
    this.authService.login(this.user)
    .subscribe(res => {
      this.userData = this.authService.userdata;           
     });

    }

  logout() { 
   this.authService.logout();
   this.router.navigateByUrl('/');
  }
  
  ngOnInit() {
  }
}