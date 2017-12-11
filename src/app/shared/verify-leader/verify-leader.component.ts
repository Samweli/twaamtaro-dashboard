import { Component, OnInit } from '@angular/core';
import { UserService } from "./../../core/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-verify-leader',
  templateUrl: './verify-leader.component.html',
  styleUrls: ['./verify-leader.component.css']
})
export class VerifyLeaderComponent implements OnInit {
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  errMsg: any;
  verifyRes: any ={};
  leaderRequests : any;
  allRequests : any;

  //Getting Street leader requests
  getRequests() {
    this.userService.getLeaderRequests()
      .subscribe(res => {
        this.leaderRequests = this.userService.leaderRequests.filter(rq => this.filterCondition(rq));
        this.allRequests = this.userService.totalRequests
        console.log(this.leaderRequests);
        console.log(this.userService.leaderRequests)
        }
      )

  }
  postRequest(data) {
    this.verifyRes.role_id = data.role_requested;
    this.verifyRes.user_id = data.id;
    this.userService.verifyLeader({role_id: data.role_requested, user_id: data.id})
      .subscribe(
        res => {
          this.leaderRequests = this.leaderRequests.filter(d => d !== data);
        },
        err => {
          console.log('error in verify')
        }
      )
  }



  denyRequest(data: any): void {
    this.verifyRes.user_id = data.id;
    this.userService.denyLeader({user_id: data.id})
      .subscribe(() => {
        this.leaderRequests = this.leaderRequests.filter(u => u !== data);
      });
  }

  filterCondition(data):boolean{
    let bool = data.street.street_name == "Kisutu" && data.role_requested == 2;
    return bool;

  }


  ngOnInit() {
    this.getRequests()
  }

}
