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

  title = 'Citizens Leadership Requests';
  errMsg: any = "";
  verifyRes: any;
  leaderRequests : any;
  allRequests : any;
  theRequest : any;

  //Getting Street leader requests 
  getRequests() {
    this.userService.getLeaderRequests()
      .subscribe(res => { 
        this.leaderRequests = this.userService.leaderRequests; 
        this.allRequests = this.userService.totalRequests
      })
  }

  verifyLeader(userId,roleId): any {
    this.theRequest = {
      "user_id": userId, 
      "role_id": roleId
<<<<<<< HEAD
    };
    this.userService.verifyLeader(JSON.stringify(this.theRequest))
=======
    }
    this.userService.verifyLeader(this.theRequest)
>>>>>>> parent of 7a55478... new setup
    .subscribe(res => {
      this.verifyRes = this.userService.verifyResponse;         
     }
    )
  }

  ngOnInit() {
    this.getRequests()
  }

}
