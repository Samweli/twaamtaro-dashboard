import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable }    from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { UsersUrlService } from "./users-url.service";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserService {

  private headers = new Headers({'Authorization': '', 'Content-Type': '' });

  constructor(private http: Http, private urlService: UsersUrlService) { }
  users: User[];
  verifyResponse: any;
  totalRequests: any;
  leaderRequests: any;
  regRes: any;
  regStatus: any;

  getUsers(): any {
    return this.http.get(this.urlService.apiUrl+this.urlService.usersUrl,
      {headers: this.headers})
    .map((response: Response) => response.json().users)
    .catch(this.errorHandler);
  }

  getUser(id): any {
    return this.getUsers()
    .map(users => users.find(user => user.id === id))
    .catch(this.errorHandler);
  }

  createUser(user) {
    return this.http.post(this.urlService.apiUrl+this.urlService.registerUserUrl, {user})

    .map((response: Response) => this.regRes = response.json())
    .catch(this.errorHandler);
  }

  alertLeader(street_id): any {
    return this.http.post(this.urlService.apiUrl+this.urlService.alertUrl, {street_id}, {headers: this.headers})
    .map(res =>  res.json())
    .catch(this.errorHandler);
  }

  getLeaderRequests(): any {
    return this.http.post(this.urlService.apiUrl+this.urlService.leaderRequestsUrl,
      {headers: this.headers})
    .map(res =>  {
      this.leaderRequests = res.json().leaders
      this.totalRequests = this.leaderRequests.length
    })
    .catch(this.errorHandler);
  }

  verifyLeader(roleRequest): any {
    console.log("Service");
    console.log(roleRequest);
    return this.http.post(this.urlService.apiUrl+this.urlService.verifyUrl, roleRequest, {headers: this.headers})
    .map(res => {
      this.verifyResponse = res.json()
    })
    .catch(this.errorHandler);
  }

  errorHandler(error: Response) {
    console.error(error);
    return Observable.throw(error || 'Sorry, something went wrong');

 }
}
