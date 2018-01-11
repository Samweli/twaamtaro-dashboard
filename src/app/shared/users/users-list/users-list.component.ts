import { Component, OnInit } from '@angular/core';
import { NgProgress } from 'ngx-progressbar';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { UserService } from "./../../../core/user.service";
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'user-detail',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  title = 'User Details';
  users: any;
  
    constructor(
      private userService: UserService,
      private route: ActivatedRoute,
      private location: Location
    ) {}
    //+params.get('street.id'))
   getUsers(): void {
      this.route.paramMap
      .switchMap((params: ParamMap) => this.userService.getUser(+params.get('id')))
      .subscribe(user => this.users = user);
   }   

  ngOnInit() {
    this.getUsers();
  }

}