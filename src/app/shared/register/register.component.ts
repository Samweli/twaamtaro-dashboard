import { Component, OnInit } from '@angular/core';
import { NgProgress } from 'ngx-progressbar';
import { Router } from "@angular/router";

import { AuthService } from "./../../core/auth.service";
import { DrainsService } from './../../core/drains.service';
import { SessionService } from "../../core/session.service";
import { UserService } from "./../../core/user.service";
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { FormErrorsService } from "./../../core/form-errors.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private drainService: DrainsService,
    public ngProgress: NgProgress,
    private router: Router,
    private userService: UserService,
    private formErrorsService: FormErrorsService
  ) { }

  regStatus: any;
  regUser: any;
  streets: any;
  isCalled: any = false;
  inputsToFormat: any = { 'password': '' };
  user: any = { 'first_name': '', 'last_name': '', 'email': '', 'street_id': '', 'sms_number': '', 'password': '' };

  register() {
    
    this.ngProgress.start();
    this.userService.createUser(this.user)
      .subscribe(res => {
        this.regUser = this.userService.regRes; 
        this.regStatus = true;
        this.isCalled = true;
        this.ngProgress.done();
      }, error => {
        this.formErrorsService.error(error);
        this.ngProgress.done();
      });
  }

  getStreet(): void {
    this.drainService
      .getRanksData()
      .subscribe(data => {
        this.streets = this.drainService.ranksData;
      });

  }

  closemodal() {
    var modal = document.getElementById('registermodal');
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }
  closeregister() {
    document.getElementById('registermodal').style.display = 'none';
  }
  ngOnInit() {
    this.closemodal();
    this.getStreet();
  }

}
