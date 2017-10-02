import { Component, OnInit } from '@angular/core';
import { User } from "./../users/user";
import { UserService } from "./../users/user.service";
import { DrainsService } from './../drains/drains.service';
import { Drain } from './../drains/drain';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component'

import { Headers, Http, Response } from '@angular/http';

import { ChartReadyEvent } from 'ng2-google-charts';

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
  dirtydrains:Drain[];
  unknowndrains:Drain[];

constructor(private drainService: DrainsService, private userService: UserService) { }
 getUsers(): void {
    this.userService
        .getUsers()
        .subscribe(users => this.users = users);     
  }
  getDrains(): any {
    this.drainService
        .getDrains()
        .subscribe(drains => this.alldrains = drains);
  }

  cleanDrains(): any {
    this.drainService
        .getCleanDrains()
        .subscribe(cleanDrains => this.cleandrains = cleanDrains);
  }
  dirtyDrains(): any {
    this.drainService
        .getDirtyDrains()
        .subscribe(dirtyDrains => this.dirtydrains = dirtyDrains);
  }
  helpDrains(): any {
    this.drainService
        .getHelpDrains()
        .subscribe(helpDrains => this.helpdrains = helpDrains);
  }
  unknownDrains(): any {
    this.drainService
        .getUnknownDrains()
        .subscribe(unknownDrains => this.unknowndrains = unknownDrains);
  }
  ngOnInit() {
    this.getUsers();
    this.getDrains();
    this.cleanDrains();
    this.dirtyDrains();
    this.helpDrains();
    this.unknownDrains();
  }

}
