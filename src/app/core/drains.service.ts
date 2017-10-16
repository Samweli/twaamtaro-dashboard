import { Injectable }    from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable }    from 'rxjs/Observable';
import { DrainsUrlService } from "./drains-url.service";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/filter';

import { Drain } from './../shared/drains/drain';


@Injectable()
export class DrainsService {
  
  private headers = new Headers({'Accept': 'application/json', 'charset': 'utf-8'});
  private options: RequestOptions = new RequestOptions({ headers: this.headers });
  
  constructor(private http: Http, private urlService: DrainsUrlService) { }
  drainData: any;
  ranksData: any;
  helpDrains: any;
  getDrains(): Observable<Drain[]> {
    return this.http.get(this.urlService.apiUrl+this.urlService.drainsUrl)
           .map((response: Response) => <Drain[]>response.json().drains)
           .catch(this.errorHandler);
          } 
  getCleanDrains():Observable<Drain[]>  {
    return this.http.get(this.urlService.apiUrl+this.urlService.cleanDrainsUrl)
           .map((response: Response) =>  <Drain[]>response.json().drains)
           .catch(this.errorHandler);
          } 
  getDirtyDrains(): Observable<Drain[]> {
    return this.http.get(this.urlService.apiUrl+this.urlService.dirtyDrainsUrl)
           .map((response: Response) => <Drain[]>response.json().drains)
           .catch(this.errorHandler);
          } 
  getHelpDetails(): Observable<any[]> {
    return this.http.get(this.urlService.localUrl+this.urlService.helpDetailsUrl, this.options)
           .map((response: Response) => { 
            this.helpDrains = response.json();
        })
           .catch(this.errorHandler);
          } 
  getHelpDrains(): Observable<any[]> {
    return this.http.get(this.urlService.apiUrl+this.urlService.helpDrainsUrl, this.options)
      .map((response: Response) => <Drain[]>response.json().drains)
      .catch(this.errorHandler);    
  } 
  getUnknownDrains():Observable<Drain[]> {
    return this.http.get(this.urlService.apiUrl+this.urlService.unknownDrainsUrl)
          .map((response: Response) => <Drain[]>response.json().drains)
          .catch(this.errorHandler);           
  }
  getDrainData():Observable<any> {
    return this.http.get(this.urlService.localUrl+this.urlService.drainDataUrl)
          .map((response: Response) => {
              this.drainData = response.json();  
          })                           
          .catch(this.errorHandler); 
                
  }
  getRanksData():Observable<any[]> {
    return this.http.get(this.urlService.localUrl+this.urlService.ranksDataUrl)
          .map((response: Response) => {this.ranksData = response.json().ranking;
          })                           
          .catch(this.errorHandler); 
                
  }
  alertVEO(street): any {
    return this.http.post(street, {headers: this.headers})
        .subscribe(res => {
            let alertData = res.json();
        });
    }
  errorHandler(error: Response) {
             console.error(error);
             return Observable.throw(error || 'Sorry, something went wrong');
 
  }
  



}


