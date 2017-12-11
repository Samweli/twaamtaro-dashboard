import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable }    from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { User } from './user';
import { UsersUrlService } from "./users-url.service";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserService {
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http, private urlService: UsersUrlService) { }
  users: User[];
  verifyResponse: any;
  totalRequests: any;
  leaderRequests: any;
  regRes: any;
  regStatus: any;

  getUsers(): any {
    return this.http.get(this.urlService.localUrl+this.urlService.usersUrl,
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
    return this.http.post(this.urlService.localUrl+this.urlService.registerUserUrl, {user})
    .map((response: Response) =>
      {
       this.regRes = response.json();
      })
    .catch(this.errorHandler);
  }

  alertLeader(street_id): any {
    return this.http.post(this.urlService.localUrl+this.urlService.alertUrl, {street_id}, {headers: this.headers})
    .map(res =>  res.json())
    .catch(this.errorHandler);
  }

  getLeaderRequests(): any {
    return this.http.post(this.urlService.localUrl+this.urlService.leaderRequestsUrl,
      {headers: this.headers})
    .map(res =>  {
      this.leaderRequests = res.json().leaders ;
      this.totalRequests = this.leaderRequests.length

    })
    .catch(this.errorHandler);
  }
 verifyLeader(data: any) :any {
  return this.http.post(this.urlService.localUrl + this.urlService.verifyUrl, JSON.stringify(data), {headers: this.headers})
    .map(res => {
      res.json().data as any
      }
    )
    .catch(this.errorHandler)
}
denyLeader(denyRequest: any) : Observable <void> {
    return this.http.post(this.urlService.localUrl + this.urlService.denyUrl,JSON.stringify(denyRequest), {headers: this.headers})
      .map(res => { res.json().data as any
      })
      .catch(this.errorHandler);

}
  errorHandler(error: Response) {
    console.error(error);
    return Observable.throw(error || 'Sorry, something went wrong');

 }
}
