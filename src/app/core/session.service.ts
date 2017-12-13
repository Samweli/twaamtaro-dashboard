import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {

  loggedIn = false;
  currentUser:any;

  constructor() { }

  getLoggedUser() {
    var loggedInUser = JSON.parse(localStorage.getItem("loggedUser"));
    return loggedInUser;
  }

  getUserRole() {
    var userRoles = JSON.parse(localStorage.getItem("roles"));
    return userRoles;
  }

  getUserStreet() {
    var userStreet = JSON.parse(localStorage.getItem("street"));
    return userStreet;
  }   

}