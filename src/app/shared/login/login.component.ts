import { Component, OnInit } from '@angular/core';
import { AuthService } from "./../../core/auth.service";
import { Router } from "@angular/router";
import { SessionService } from "./../../core/session.service";
import { FormErrorsService } from "./../../core/form-errors.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor (
        private authService: AuthService,
        private router: Router,
        private sessionService: SessionService,
        private formErrorsService: FormErrorsService) { }
  
  loading = false;
  userData: any;
  loginStatus: any;
  theUser: any;
  user: any = { 'sms_number': '','password': '' };
  login() {
    this.authService.login(this.user)
    .subscribe(res => {
      this.userData = this.authService.userdata;
      console.log(this.userData)           
     },
     error => {
         this.formErrorsService.error(error);
         this.loading = false;
     });

    }

  logout() { 
   this.authService.logout();
   this.router.navigateByUrl('/');
  }
  
  closemodal() 
  {
    var modal = document.getElementById('loginmodal');
    window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
    }
  }

  closelogin(){ 
    document.getElementById('loginmodal').style.display='none';
  }

  ngOnInit() {
    this.closemodal();
  }
}