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

  user: any = { 'sms_number': '','password': '' };
  login() {
    console.log(this.user);
    this.authService.login(this.user)
    .subscribe(res => {
      if(res.success){
        //this.router.navigateByUrl('admin');
        this.router.navigate(['admin']);
      }
     });

    }

  logout() { 
   this.authService.logout();
   this.router.navigateByUrl('/');
  }
  
  ngOnInit() {
  }
}
/*if(res.user.role === 2){
           this.router.navigateByUrl('admin');
         }
         else if(res.user.role === 1) {
           this.router.navigateByUrl('/dashboard/ranks');
         }*/