import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {

  loggedIn = false;
  currentUser:any;

  constructor() { }
  setCurrentUser(user){
    console.log('user is set');
    localStorage.setItem("currentUserToken",JSON.stringify(user.authentication_token));
    localStorage.setItem('loggedUser', JSON.stringify(user));
    localStorage.setItem('roles', JSON.stringify(user.roles));
    localStorage.setItem('street', JSON.stringify(user.street));
  }

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