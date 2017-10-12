import { Injectable }    from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable }    from 'rxjs/Observable';

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

  private ApiUrl = 'http://twaamtaro.org/api/v1/'; 
  private localUrl = 'http://localhost:3000/api/v1/'; 
  private DrainsUrl = 'drains/?type=all'; 
  private CleanDrainsUrl = 'drains/?type=cleaned'; 
  private DirtyDrainsUrl = 'drains/?type=uncleaned';
  private HelpDrainsUrl = 'need_helps';
  private UnknownDrainsUrl = 'drains/?type=unknown';
  private drainDataUrl = 'drains/data';
  private ranksDataUrl = 'drains/ranking';
  
  constructor(private http: Http) { }
  drainData: any;
  ranksData: any;
  helpDrains: any;
  getDrains(): Observable<Drain[]> {
    return this.http.get(this.ApiUrl+this.DrainsUrl)
           .map((response: Response) => <Drain[]>response.json().drains)
           .catch(this.errorHandler);
          } 
  getCleanDrains():Observable<Drain[]>  {
    return this.http.get(this.ApiUrl+this.CleanDrainsUrl)
           .map((response: Response) =>  <Drain[]>response.json().drains)
           .catch(this.errorHandler);
          } 
  getDirtyDrains(): Observable<Drain[]> {
    return this.http.get(this.ApiUrl+this.DirtyDrainsUrl)
           .map((response: Response) => <Drain[]>response.json().drains)
           .catch(this.errorHandler);
          } 
  getHelpDrains(): Observable<any[]> {
    return this.http.get(this.localUrl+this.HelpDrainsUrl, this.options)
           .map((response: Response) => { 
            this.helpDrains = response.json();
        })
           .catch(this.errorHandler);
          } 
  getUnknownDrains():Observable<Drain[]> {
    return this.http.get(this.ApiUrl+this.UnknownDrainsUrl)
          .map((response: Response) => <Drain[]>response.json().drains)
          .catch(this.errorHandler);           
  }
  getDrainData():Observable<any> {
    return this.http.get(this.localUrl+this.drainDataUrl)
          .map((response: Response) => {
              this.drainData = response.json();  
          })                           
          .catch(this.errorHandler); 
                
  }
  getRanksData():Observable<any[]> {
    return this.http.get(this.localUrl+this.ranksDataUrl)
          .map((response: Response) => {this.ranksData = response.json().ranking;
            console.log('Service'); 
            console.log(this.ranksData); 
          })                           
          .catch(this.errorHandler); 
                
  }
  errorHandler(error: Response) {
             console.error(error);
             return Observable.throw(error || 'Sorry, something went wrong');
 
  }
  



}


