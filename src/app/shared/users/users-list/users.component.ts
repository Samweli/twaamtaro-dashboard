import { Component, OnInit, AfterViewInit } from '@angular/core';
import { User } from "./../../../core/user";
import { UserService } from "./../../../core/user.service";
import { StreetVEOPipe, UserStreetPipe } from "./../../../core/user.pipe";
import { Ng2GoogleChartsModule, ChartSelectEvent } from 'ng2-google-charts';
import { NgProgress } from 'ngx-progressbar';
import {TranslateService} from "../../../transilate/translate.service";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent  {
  title = 'Citizens';
  users: User[];
  usercount: any;
  usersCount: any = 0;
  wardLeadersCount: any = 0;
  streetLeadersCount: any = 0;
  treeChart: any;

  constructor(
    private userService: UserService,
    public ngProgress: NgProgress,
    private _translate: TranslateService
  ) { }
  
  getUsers(): any {
    this.ngProgress.start(); 
    this.userService
        .getUsers()
        .subscribe(user => {
          this.users = user;
          this.usercount = user.length;

    //Get Number of registered users based on roles
          for (var i = 0; i < this.users.length; i++) {
            if (this.users[i].role === 1) {
              this.usersCount++;
            }
            else if (this.users[i].role === 2){
              this.streetLeadersCount++;
            }
            else if(this.users[i].role === 3)
              {
                this.wardLeadersCount++;
              }
            }

  //Get the number of citizens in each street
            
          this.treeChart =  {
            chartType: 'TreeMap',
             dataTable: [
              [this._translate.instant('street'), this._translate.instant('ward'), this._translate.instant('citizens')],
              ['Hananasif Ward', null, this.usercount], 
              ['Kawawa', 'Hananasif Ward', 2],
              ['Hananasif', 'Hananasif Ward', 6],
              ['Mkunguni A', 'Hananasif Ward', 5],
              ['Mkunguni B', 'Hananasif Ward', 0],
              ['Kisutu', 'Hananasif Ward', 0],
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

  refreshText(){
    //this.getUsers()
  }
  subscribeToLangChanged() {
    return this._translate.onLangChanged.subscribe(x => this.refreshText());
  }


  ngOnInit() {
    this.getUsers();
    this.subscribeToLangChanged();
  }

}

