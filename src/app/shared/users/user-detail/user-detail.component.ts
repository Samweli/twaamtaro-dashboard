import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { User } from "./../../../core/user";
import { UserService } from "./../../../core/user.service";
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  title = 'User Details';
  user: any;
  errMsg: any;
  
    constructor(
      private userService: UserService,
      private route: ActivatedRoute,
      private location: Location
    ) {}
  
   getUser(): void {
      this.route.paramMap
        .switchMap((params: ParamMap) => this.userService.getUser(+params.get('id')))
        .subscribe(user => this.user = user);
    }
    goBack(): void {
      this.location.back();
    }

  ngOnInit() {
    this.getUser();
    this.goBack;
  }

}
