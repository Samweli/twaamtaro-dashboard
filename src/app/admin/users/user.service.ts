import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable }    from 'rxjs/Observable';
import { User } from './user'; 

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserService {

  private UsersUrl = 'http://localhost:3000/users';  // URL to web api

  constructor(private http: Http) { }
  users: User[];
  
  getUsers(): Observable<User[]> {
    return this.http.get(this.UsersUrl)
           .map((response: Response) => <User[]>response.json())
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
