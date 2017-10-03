import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable }    from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/filter';

import { Drain } from './drain';


@Injectable()
export class DrainsService {
  
  private headers = new Headers({'Content-Type': 'application/json'});
  private ApiUrl = 'http://twaamtaro.org/api/v1/'; 
  private DrainsUrl = 'drains/?type=all';  // URL to web api
  private CleanDrainsUrl = 'drains/?type=cleaned'; 
  private DirtyDrainsUrl = 'drains/?type=uncleaned';
  private HelpDrainsUrl = 'drains/?type=need_help';
  private UnknownDrainsUrl = 'drains/?type=unknown';
  private drainDataUrl = 'http://localhost:3000/api/v1/drains/data';
  
  constructor(private http: Http) { }
  drainData: any;
  getDrains(): Observable<Drain[]> {
    return this.http.get(this.ApiUrl+this.DrainsUrl)
           .map((response: Response) => <Drain[]>response.json().drains)
           .catch(this.errorHandler);
          } 
  getCleanDrains(): any {
    return this.http.get(this.ApiUrl+this.CleanDrainsUrl)
           .map((response: Response) => response.json().drains)
           .catch(this.errorHandler);
          } 
  getDirtyDrains(): Observable<Drain[]> {
    return this.http.get(this.ApiUrl+this.DirtyDrainsUrl)
           .map((response: Response) => <Drain[]>response.json().drains)
           .catch(this.errorHandler);
          } 
  getHelpDrains(): Observable<Drain[]> {
    return this.http.get(this.ApiUrl+this.HelpDrainsUrl)
           .map((response: Response) => <Drain[]>response.json().drains)
           .catch(this.errorHandler);
          } 
  getUnknownDrains():Observable<Drain[]> {
    return this.http.get(this.ApiUrl+this.UnknownDrainsUrl)
          .map((response: Response) => <Drain[]>response.json().drains)
          .catch(this.errorHandler);           
  }
  getDrainData():Observable<any> {
    return this.http.get(this.drainDataUrl)
          .map((response: Response) => {
              this.drainData = response.json();  
          })                           
          .catch(this.errorHandler); 
                
  }
  errorHandler(error: Response) {
             console.error(error);
             return Observable.throw(error || 'Sorry, something went wrong');
 
  }
  



}


