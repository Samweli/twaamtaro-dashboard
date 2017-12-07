import { Component, OnInit, AfterViewInit } from '@angular/core';
import { User } from "./../../../core/user";
import { UserService } from "./../../../core/user.service";
import { StreetVEOPipe, UserStreetPipe } from "./../../../core/user.pipe";
import { Ng2GoogleChartsModule, ChartSelectEvent } from 'ng2-google-charts';

import { NgProgress } from 'ngx-progressbar';
import { TranslateService } from "../../../transilate/translate.service";
import { StreetService } from "./../../../core/streets.service";
import { DrainsService } from "./../../../core/drains.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, AfterViewInit {
  title = 'Citizens';
  errMsg: any;
  error: any;
  street: any[];
  streets: any;
  streetCount: any = 0;
  streetLeadersCount: any = 0;
  streetId: any;streetName: any;
  treeChart: any;
  users: User[];
  usercount: any;
  usersCount: any = 0;
  wardLeadersCount: any = 0;



  constructor(
    private userService: UserService,
    public ngProgress: NgProgress,
    public drainService: DrainsService,
    public streetService: StreetService,
    private _translate: TranslateService
  ) { }

  countStreetUsers(street, users) {
    for (var index = 0; index < users.length; index++) {
      console.log(users[index].street_id)
      if(street == users[index].street_id) {
        this.streetCount++
      }
    }   
    //console.log(this.streetCount)
    return this.streetCount
  }
  getStreetsPopulation(users) {
    this.streetService.getStreets()
    .subscribe(res => {
      this.streets = res
      this.countStreetUsers(this.streets.id,users)
      /*this.streets.forEach(street => {
        console.log('Street Id '+ street.id)
        this.countStreetUsers(street.id,users)
      });*/
     
    })
  }
  getUsers(): any {
    this.ngProgress.start();
    this.userService
        .getUsers()
        .subscribe(user => {
          this.users = user;
     //this.countStreetUsers(1,this.users) ; 
     this.getStreetsPopulation(this.users) 

    //Get Number of registered users based on roles
          for (var i = 0; i < this.users.length; i++) {
            this.getStreetName(user[i].street_id);
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
    //Count Number of Users in every street



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

    //Get Street Name
    getStreetName(street) {
      this.streetService.getStreetName(street)
      .subscribe(street => {
        this.streetName = this.streetService.streetName;
      })

    }
  refreshText(){
    this.getUsers();
  }
  subscribeToLangChanged() {
    return this._translate.onLangChanged.subscribe(x => this.refreshText());
  }
  ngAfterViewInit() {

  }
  ngOnInit() {
    this.getUsers();
    this.subscribeToLangChanged();
  }

}

