import { Component, OnInit, AfterViewInit } from '@angular/core';
import { User } from "./../../../core/user";
import { UserService } from "./../../../core/user.service";
import { StreetVEOPipe, UserStreetPipe } from "./../../../core/user.pipe";
import { Ng2GoogleChartsModule, ChartSelectEvent } from 'ng2-google-charts';


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

  constructor(private userService: UserService) { }
  
  getUsers(): void {
    this.userService
        .getUsers()
        .subscribe(user => {
          this.users = user;
          this.usercount = user.length;

          this.treeChart =  {
            chartType: 'TreeMap',
             dataTable: [
              ['Street', 'Ward', 'Citizens'],
              ['Hananasif Street', null, this.usercount], 
              ['Kawawa', 'Hananasif Street', 2],
              ['Hananasif', 'Hananasif Street', 6],
              ['Mkunguni A', 'Hananasif Street', 5],
              ['Mkunguni B', 'Hananasif Street', 3],
              ['Kisutu', 'Hananasif Street', 4],
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
  }

  ngOnInit() {
    this.getUsers();
  }

}
