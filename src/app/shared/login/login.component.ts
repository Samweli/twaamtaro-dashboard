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

  countryCode = "255";
  inputsToFormat = { 'phone': '' };
  loginCalled: any = false;
  loginStatus: any;
  user: any = { 'sms_number': '','password': '' };
  userData: any;
  theUser: any;
  loading: any;

  formatPhoneNumber(phoneNumber) {
    var formattedNumber: any;
    if (phoneNumber.startsWith("0")) {
      formattedNumber = this.countryCode.concat(phoneNumber.slice(1))
      return formattedNumber;
    }
    else if (phoneNumber.startsWith("+")) {
      formattedNumber = phoneNumber.replace("+", "");
      return formattedNumber;
    }
    else {
      return phoneNumber;
    }
  }

  login() {
    this.ngProgress.start();
    this.user.sms_number = this.formatPhoneNumber(this.inputsToFormat.phone);
    this.authService.login(this.user)
      .subscribe(res => {
        this.loginCalled = true;


        this.userData = this.authService.userdata;
        this.sessionService.setCurrentUser(this.userData);
        this.sessionService.setCurrentLoggedUser(this.authService.userdata);
        if (this.authService.isLoggedIn()) {
          location.reload();
        }


        this.ngProgress.done();
      }, error => {
        this.loginCalled = true;
        this.formErrorsService.error(error);
        this.ngProgress.done();
      });
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
