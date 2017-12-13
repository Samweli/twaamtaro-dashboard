import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
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
        public router: Router,
        public sessionService: SessionService ) { }
  
  userData: any;
  loginStatus: any;
  theUser: any;
  user: any = { 'sms_number': '','password': '' };
  
  login() {
    this.authService.login(this.user)
    .subscribe(res => {
      this.userData = this.authService.userdata;
      },
      error => {
         this.formErrorsService.error(error);
      });

    }

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