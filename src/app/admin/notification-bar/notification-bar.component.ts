import { Component, OnInit } from '@angular/core';
import { User } from "./../users/user";
import { UserService } from "./../users/user.service";
import { DrainsService } from './../drains/drains.service';
import { Drain } from './../drains/drain';

@Component({
  selector: 'app-notification-bar',
  templateUrl: './notification-bar.component.html',
  styleUrls: ['./notification-bar.component.css']
})
export class NotificationBarComponent implements OnInit {
  users: User[];
  alldrains: Drain[];
  cleandrains: Drain[];
  helpdrains: Drain[];
  dirtydrains: Drain[];

constructor(private drainService: DrainsService, private userService: UserService) { }
 getUsers(): void {
    this.userService
        .getUsers()
        .subscribe(users => this.users = users);     
  }
  getDrains(): void {
    this.drainService
        .getDrains()
        .subscribe(drains => this.alldrains = drains);
  }

  cleanDrains(): void {
    this.drainService
        .getCleanDrains()
        .subscribe(cleanDrains => this.cleandrains = cleanDrains);
  }
  dirtyDrains(): void {
    this.drainService
        .getDirtyDrains()
        .subscribe(dirtyDrains => this.dirtydrains = dirtyDrains);
  }
  helpDrains(): void {
    this.drainService
        .getHelpDrains()
        .subscribe(helpDrains => this.helpdrains = helpDrains);
  }
  ngOnInit() {
    this.getUsers();
    this.getDrains();
    this.cleanDrains();
    this.dirtyDrains();
    this.helpDrains();
  }

}
