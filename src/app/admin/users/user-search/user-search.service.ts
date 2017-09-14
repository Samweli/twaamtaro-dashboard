import { Injectable } from '@angular/core';
import { Http, Headers }       from '@angular/http';
//import { Headers } from "module";

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from './../user';

@Injectable()
export class UserSearchService {

  constructor(private http: Http) {}
  searchedUser : User[];
  search(term: string): Observable<User[]> {
    let headers = new Headers();
    headers.append("Authorization","Token token='gM7TM10gfRFZBlkNNcqg9A', email='example-2@twaamtaro.org'");
    return this.http
               .get(`http://twaamtaro.org/api/v1/users/?first_name=${term}`)
               .map(response => response.json().users.data as User[]);
  }
}
