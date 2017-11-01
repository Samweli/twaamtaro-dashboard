import { Component, OnInit, AfterViewInit } from '@angular/core';
import { User } from "./../../../core/user";
import { UserService } from "./../../../core/user.service";
import { StreetVEOPipe, UserStreetPipe } from "./../../../core/user.pipe";
import { Ng2GoogleChartsModule, ChartSelectEvent } from 'ng2-google-charts';
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent  {
  title = 'Citizens';
  users: User[];
  usercount: any;
  treeChart: any;

  constructor(
    private userService: UserService,
    public ngProgress: NgProgress
  ) { }
  
  getUsers(): void {
    this.ngProgress.start(); 
    this.userService
        .getUsers()
        .subscribe(user => {
          this.users = user;
          this.usercount = user.length;

          this.treeChart =  {
            chartType: 'TreeMap',
             dataTable: [
              ['Street', 'Ward', 'Citizens'],
              ['Hananasif Ward', null, this.usercount], 
              ['Kawawa', 'Hananasif Ward', 2],
              ['Hananasif', 'Hananasif Ward', 6],
              ['Mkunguni A', 'Hananasif Ward', 5],
              ['Mkunguni B', 'Hananasif Ward', 3],
              ['Kisutu', 'Hananasif Ward', 4],
              ],
              options: {
                'title': '',
                'minColor': '#b7fff8',
                'midColor': '#008578',
                'maxColor': '#00685d',
                'headerHeight': 40,
              }
            };

        });     
    this.ngProgress.done(); 
  }

  ngOnInit() {
    this.getUsers();
  }

}
