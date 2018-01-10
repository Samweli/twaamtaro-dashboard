import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import {Router} from "@angular/router";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class AuthService {

  private loginUrl = `http://localhost:3000/api/v1/sessions/`;
  private headers = new Headers({'Content-Type': 'application/json'});
  loggedIn: any;
  loginRes: any;
  userdata: any;
  loggedUser: any;
  userName: any;

  constructor(
        private http: Http,    
        private router: Router,
    ) { }

    login(user): any {
        return this.http.post(this.loginUrl, { user }, { headers: this.headers })
            .map(res => {
            this.userdata = res.json();
        })
        .catch(this.handleError);
    }

    isLoggedIn() {
        if (localStorage.getItem("currentUser") == null) {
            this.loggedIn == false;
            return this.loggedIn;            }
        else {
            return true;
        }
    }
    logout() {
        // remove user from local storage to log user out
        location.reload();
        localStorage.clear();
        this.loggedIn = false;
    }
    private handleError(error: any): any {
        this.loginRes = false;
        console.error('An error occurred', error);
    }


}
