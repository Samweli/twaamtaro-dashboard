import { Component, OnInit } from '@angular/core';
import { User } from "./../user";
import { UserService } from "./../user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  title = 'Citizens';
  user: User[];

  constructor(private userService: UserService) { }
  getUsers(): void {
    this.userService
        .getUsers()
        .subscribe(user => this.user = user);     
  }

  ngOnInit() {
    this.getUsers();
    
  }

}
