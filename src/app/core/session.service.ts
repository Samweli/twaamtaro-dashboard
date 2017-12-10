import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {

  loggedIn = false;
  currentUser:any;

  constructor() { }

  getLoggedUser() {
    var loggedInUser = localStorage.getItem("loggedUser");
    return loggedInUser;
  }

  getUserRole() {
    var userRoles = localStorage.getItem("roles");
    return userRoles;
  }
  
  getUserStreet() {
    var userStreet = localStorage.getItem("street");
    return userStreet;
  }    

}