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

  getUserStreet() {
    var userStreet = JSON.parse(localStorage.getItem("street"));
    return userStreet;
  }

}
