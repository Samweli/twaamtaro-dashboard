import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable }    from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';
import { User } from './user'; 

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserService {
  private headers = new Headers({'Authorization': 'Token token="gM7TM10gfRFZBlkNNcqg9A", email="example-2@twaamtaro.org"'});
  private UsersUrl = 'http://twaamtaro.org/api/v1/users/3';  // URL to web api

  constructor(private http: Http) { }
  users: User[];

 /* THis is useful for post requests
  authHeader(headers: Headers) {
    headers.append("Authorization", "Token token='gM7TM10gfRFZBlkNNcqg9A', email='example-2@twaamtaro.org'");
  }*/
  
  getUsers(): Observable<User[]> {
    return this.http.get(this.UsersUrl,
      {headers: this.headers})
           .map((response: Response) => <User[]>response.json().user)
           .catch(this.errorHandler);
          } 
           
    getUser(id):Observable<User[]> {
        
            return this.getUsers()
            .map(users => users.find(user => user.id === id))
            .catch(this.errorHandler);
                       
      }
  errorHandler(error: Response) {
    console.error(error);
    return Observable.throw(error || 'Sorry, something went wrong');
          
 }
}
