import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable }    from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/filter';

import { Drain } from './drain';


@Injectable()
export class DrainsService {
  
  private headers = new Headers({'Content-Type': 'application/json'});
  private DrainsUrl = 'http://twaamtaro.org/api/v1/drains/?type=all';  // URL to web api
  private CleanDrainsUrl = 'http://twaamtaro.org/api/v1/drains/?type=cleaned'; 
  private DirtyDrainsUrl = 'http://twaamtaro.org/api/v1/drains/?type=uncleaned';
  private HelpDrainsUrl = 'http://twaamtaro.org/api/v1/drains/?type=need_help';
  constructor(private http: Http) { }

  getDrains(): Observable<Drain[]> {
    return this.http.get(this.DrainsUrl)
           .map((response: Response) => <Drain[]>response.json().drains)
           .catch(this.errorHandler);
          } 
  getCleanDrains(): Observable<Drain[]> {
    return this.http.get(this.CleanDrainsUrl)
           .map((response: Response) => <Drain[]>response.json().drains)
           .catch(this.errorHandler);
          } 
  getDirtyDrains(): Observable<Drain[]> {
    return this.http.get(this.DirtyDrainsUrl)
           .map((response: Response) => <Drain[]>response.json().drains)
           .catch(this.errorHandler);
          } 
  getHelpDrains(): Observable<Drain[]> {
    return this.http.get(this.HelpDrainsUrl)
           .map((response: Response) => <Drain[]>response.json().drains)
           .catch(this.errorHandler);
          } 
          
  getDrainAddress(address):Observable<Drain[]> {
            return this.getDrains()
            .map(drains => drains => drains.address === address)
            .catch(this.errorHandler);            
      }
  errorHandler(error: Response) {
             console.error(error);
             return Observable.throw(error || 'Sorry, something went wrong');
 
  }
  



}


