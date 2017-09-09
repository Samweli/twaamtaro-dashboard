import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable }    from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
//import 'rxjs/add/operator/toPromise';

import { Drain } from './drain';


@Injectable()

export class DrainsService {
  
  private headers = new Headers({'Content-Type': 'application/json'});
  private DrainsUrl = 'http://localhost:3000/drains';  // URL to web api
  constructor(private http: Http) { }

  getDrains(): Observable<Drain[]> {
    return this.http.get(this.DrainsUrl)
           .map((response: Response) => <Drain[]>response.json())
           .catch(this.errorHandler);
          } 
           errorHandler(error: Response) {
             console.error(error);
             return Observable.throw(error || 'Sorry, something went wrong');
           
  }
/*private handleError(error: any): Promise<any> {
    console.error('You failed to fetch data', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }  */


}


