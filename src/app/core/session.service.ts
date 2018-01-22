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

  hasRole(roleName: string): boolean{
    let boolValue: boolean;
    if(this.getUserRole()){
      console.log('the roles');

      let roleArray: any = JSON.parse(this.getUserRole());
      boolValue = roleArray.some((data) => data.name == roleName );
      console.log(roleArray);
    }
    else{
      boolValue = false;
    }

    return boolValue;

  }

}
