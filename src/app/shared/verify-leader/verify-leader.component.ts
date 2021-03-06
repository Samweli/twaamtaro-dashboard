import { Component, OnInit } from '@angular/core';
import { UserService } from "../../core/user.service";
import {Router} from "@angular/router";
import {SessionService} from "../../core/session.service";

@Component({
  selector: 'app-verify-leader',
  templateUrl: './verify-leader.component.html',
  styleUrls: ['./verify-leader.component.css']
})
export class VerifyLeaderComponent implements OnInit {
  constructor(
    private userService: UserService,
    private router: Router,
    private sessionService: SessionService
  ) { }

  errMsg: any;
  verifyRes: any ={};
  leaderRequests : any;
  allRequests : any;

  //Getting Street leader requests
  getRequests(data) {
    this.userService.getLeaderRequests(data)
      .subscribe(res => {
          this.leaderRequests = res.filter(rq => this.filterCondition(rq));
          this.allRequests = res.length;
          console.log(this.leaderRequests);
          console.log(this.allRequests);
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
    if(this.sessionService.hasRole('weo')) {
      let user = this.sessionService.getCurrentLoggedUser();
       let bool = data.ward.ward_name == user.ward.ward_name;
      return bool;
    }
    else if(this.sessionService.hasRole('meo')){
      let user = this.sessionService.getCurrentLoggedUser();
      let bool = data.municipal.municipal_name == user.municipal.municipal_name;
      return bool;
    }

  }
  /*checking role request*/
  checkLoggedInUser(){

    if(this.sessionService.hasRole('weo' )){
      this.getRequests({role_name:'veo'});
    }
    else if(this.sessionService.hasRole('meo')){
      this.getRequests({role_name:'weo'});
    }
  }

  ngOnInit() {
    this.checkLoggedInUser();
  }

}
