import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {

  loggedIn = false;
  currentUser:any;

  constructor() { }

  setCurrentUser(data:any){
    localStorage.setItem('currentUser',JSON.stringify(this.currentUser))

  }

/*  destroySession(){
    this.loggedIn = false;
    localStorage.removeItem('currentUser');
  }*/

}