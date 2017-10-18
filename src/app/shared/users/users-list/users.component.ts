import { Component, OnInit } from '@angular/core';
import { User } from "./../user";
import { UserService } from "./../../../core/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  title = 'Citizens';
  users: User[];

  constructor(private userService: UserService) { }
  getUsers(): void {
    this.userService
        .getUsers()
        .subscribe(user => this.users = user);     
  }

  ngOnInit() {
    this.getUsers();
    
  }

}
