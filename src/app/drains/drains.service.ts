import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Drain } from './drain';


@Injectable()

export class DrainsService {
  constructor(private http: Http) { }

  private headers = new Headers({'Content-Type': 'application/json'});
  private DrainsUrl = 'http://localhost:3000/drains';  // URL to web api

  getDrains(): Promise<Drain> {
    return this.http.get(this.DrainsUrl)
           .toPromise()
           .then(response => response.json().data as Drain[])
           .catch(this.handleError);
  }
private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }  


}


