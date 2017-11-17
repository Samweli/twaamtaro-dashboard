import { Component, OnInit } from '@angular/core';
import { UserService } from "./../../core/user.service";

@Component({
  selector: 'app-verify-leader',
  templateUrl: './verify-leader.component.html',
  styleUrls: ['./verify-leader.component.css']
})
export class VerifyLeaderComponent implements OnInit {
  constructor(
    private userService: UserService,
  ) { }

  title = 'Citizens';
  errMsg: any;
  verifyRes: any;
  leaderRequests : any;

  //Getting Street leader requests 
  getRequests() {
    this.userService.getLeaderRequests()
      .subscribe(res => { 
        this.leaderRequests = this.userService.leaderRequests; 
      })
  }

  verifyLeader(userId): any {
    this. userService.verifyLeader(userId)
    .subscribe(res => {
      this.verifyRes = this.userService.verifyResponse;         
     }
    )
  }

  ngOnInit() {
    this.getRequests()
  }

}
