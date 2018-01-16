import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "./../../core/auth.service";
import { FormErrorsService } from "./../../core/form-errors.service";
import { NgProgress } from 'ngx-progressbar';
import { SessionService } from "./../../core/session.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor (
        private authService: AuthService,
        private formErrorsService: FormErrorsService,
        private router: Router,
        private sessionService: SessionService,
        private ngProgress: NgProgress
      ) { }

  countryCode = "255";
  err: any;
  loading = false;
  userData: any;
  loginStatus: any;
  theUser: any;
  userEmail: any;
  userName: any;
  userRoles: any;
  userStreet: any;
  user: any = { 'sms_number': '','password': '' };
  loginCalled = false;
  inputsToFormat = {'phone':''};

  formatPhoneNumber(phoneNumber) {
    var formattedNumber: any;
    if(phoneNumber.startsWith("0")) {
      formattedNumber = this.countryCode.concat(phoneNumber.slice(1))
      return formattedNumber;
    }
    else if(phoneNumber.startsWith("+")) {
      formattedNumber = phoneNumber.replace("+","");
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

      if (this.userData && this.userData.users.authentication_token) {
          localStorage.setItem('currentUser', JSON.stringify(this.userData.users.authentication_token));

          /* New localStorage Data */
          localStorage.setItem('loggedUser', JSON.stringify(this.userData.users));
          localStorage.setItem('roles', JSON.stringify(this.userData.users.roles));
          localStorage.setItem('street', JSON.stringify(this.userData.users.street));

          location.reload();
          this.router.navigate(['dashboard/admin']);

      }
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

  closemodal()
  {
    // document.getElementById("errors").innerHTML = " ";
    var theForm = <HTMLFormElement>document.getElementById("loginForm");
    theForm.reset();
    var modal = document.getElementById('loginmodal');
    window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
    }
  }

  closelogin(){
    document.getElementById("errors").innerHTML = " ";
    var theForm = <HTMLFormElement>document.getElementById("loginForm");
    theForm.reset();
    document.getElementById('loginmodal').style.display='none';
  }

  ngOnInit() {
    this.closemodal();
  }
}
