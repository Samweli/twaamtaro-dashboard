import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import {Router} from "@angular/router";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class AuthService {

  private loginUrl = `http://localhost:3000/api/v1/sessions/`;
  private headers = new Headers({'Content-Type': 'application/json'});
  

  constructor(
        private http: Http,    
        private router: Router,
    ) { }

  login(user): any {
    return this.http.post(this.loginUrl, {user}, {headers: this.headers})
        .subscribe(res => {
            let userdata = res.json();
            if (userdata && userdata.data.auth_token) {

                console.log(userdata);
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));

        this.router.navigate(['admin']);
            }
        return userdata;
        });
}
logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
}
  private handleError(error: any): any {
    console.error('An error occurred', error);
  }


}
