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

  setCurrentLoggedUser(user){
    console.log("user we make");
    console.log(user)
    console.log("setting current user");
    console.log(user.users)
    localStorage.setItem('currentLoggedUser', JSON.stringify(user));
  }

  getCurrentLoggedUser(){
    return JSON.parse(localStorage.getItem('currentLoggedUser'));
  }

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

  hasRole(roleName: string): boolean{
    let boolValue: boolean;
    if(this.getUserRole()){

      let roleArray: any = JSON.parse(this.getUserRole());
      boolValue = roleArray.some((data) => data.name == roleName );
    }
    else{
      boolValue = false;
    }

    return boolValue;

  }

}
