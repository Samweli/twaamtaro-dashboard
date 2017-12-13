import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgProgress } from 'ngx-progressbar';
import { AuthService } from "./../../core/auth.service";
import { FormErrorsService } from "./../../core/form-errors.service";
import { SessionService } from "../../core/session.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor (
        public authService: AuthService,
        public formErrorsService: FormErrorsService,
        public ngProgress: NgProgress,
        public router: Router,
        public sessionService: SessionService ) { }
  
  userData: any;
  loginStatus: any;
  theUser: any;
  user: any = { 'sms_number': '','password': '' };
  loginCalled: any = false;

  login() {
    this.ngProgress.start();
    
    this.authService.login(this.user)
      .subscribe(res => {

        this.loginCalled = true;
        this.userData = this.authService.userdata;

        
      }, error => {
        this.loginCalled = true;
        this.formErrorsService.error(error);
      });
    this.ngProgress.done();
  };

  logout() { 
   this.authService.logout();
   this.router.navigateByUrl('/');
  }

  closelogin() {
    document.getElementById('loginmodal').style.display = 'none';
  }

  closemodal() {
    var modal = document.getElementById('loginmodal');
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }
  ngOnInit() {
  }
}