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
  userName: any;
  userRole: any;
  user: any = { 'sms_number': '','password': '' };
  err: any;
  loginCalled = false;

  login() {
    this.loginCalled = true;
    this.authService.login(this.user)
    .subscribe(res => {
      this.userData = this.authService.userdata;
      this.userName = this.userData.data.user.first_name +" "+ this.userData.data.user.last_name;
      this.userRole = this.userData.data.user.role;
      
      if (this.userData && this.userData.data.auth_token) {
          localStorage.setItem('currentUser', JSON.stringify(this.userData.data.auth_token));
          localStorage.setItem('user', this.userName);
          localStorage.setItem('role', this.userRole);
  
        this.router.navigate(['dashboard/admin']);
        
        /*if ((localStorage.getItem("role")) == "3") {
            this.router.navigate(['dashboard/weo']);
            
        } else if (localStorage.getItem("role") == "4") {
            this.router.navigate(['dashboard/meo']);  
        }*/
      }
    }, error => {
      this.formErrorsService.error(error);
    });
  };
    
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