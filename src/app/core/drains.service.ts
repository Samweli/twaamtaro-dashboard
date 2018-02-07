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
  private headersCustom = new Headers({'Content-Type': 'application/json'});
  private options: RequestOptions = new RequestOptions({ headers: this.headers });

  constructor(private http: Http, private urlService: DrainsUrlService) { }
  drainData: any;
  ranksData: any;
  helpDrains: any;
  err: any;
  
  getDrains(page?: number, count?: number): Observable<any> {

    // initilizing variables for paginating drain data
    let urlparams = `&&page=${page}&&count=${count}`
    return this.http.get(this.urlService.allDrains+urlparams)
      .map((response: Response) => response.json())
      .catch(this.errorHandler);
  }
  getCleanDrains():Observable<any[]>  {
    return this.http.get(this.urlService.cleanDrains)
      .map((response: Response) =>  response.json().drains)
      .catch(this.errorHandler);
  }
  getDirtyDrains(): Observable<any[]> {
    return this.http.get(this.urlService.uncleanDrains)
      .map((response: Response) => response.json().drains)
      .catch(this.errorHandler);
  }
  getHelpDetails(): any {
    return this.http.get(this.urlService.needHelps, this.options)
      .map((response: Response) => {
        this.helpDrains = response.json();
      })
      .catch(this.errorHandler);
  }
  getHelpDrains(): Observable<any[]> {
    return this.http.get(this.urlService.needHelpDrains, this.options)
      .map((response: Response) => response.json().drains)
      .catch(this.errorHandler);
  }

  getFilteredHelp(status?) {
    if (status == null ) {
      
      return this.getHelpDetails();
    }
    else {
     
      return this.getHelpDetails()
        .map(drains => drains.find(drain => drain.status === status))
        .catch(this.errorHandler);
    }

  }
  getUnknownDrains():Observable<any[]> {
    return this.http.get(this.urlService.unkonwnDrains)
      .map((response: Response) => response.json().drains)
      .catch(this.errorHandler);
  }
  getDrainData():Observable<any> {
    return this.http.get(this.urlService.dataForDrains)
      .map((response: Response) => this.drainData = response.json() )
      .catch(this.errorHandler);

  }
  getRanksData():Observable<any[]> {
    return this.http.get(this.urlService.drainRanks)
      .map((response: Response) => {
        this.ranksData = response.json().ranking;
      })
      .catch(this.errorHandler);

  }
  alertVEO(street): any {
    return this.http.post(street, {headers: this.headers})
      .subscribe(res => {
        let alertData = res.json();
      });
  }


  status(roleRequest): any {

    return this.http.post(this.urlService.verifyUser, roleRequest, {headers: this.headers})
      .map(res => {

      })
      .catch(this.errorHandler);
  }

  update_status(data): any {
    return this.http.post(this.urlService.needHelpStatus, JSON.stringify(data), {headers: this.headersCustom})
      .map(res => { res.json();
      })
      .catch(this.errorHandler);
  }

  searchNeedHelps(data): Observable<any[]>{

    return this.http.post(this.urlService.needHelpSearch, JSON.stringify(data), {headers: this.headersCustom})
      .map(res => res.json())
      .catch(this.errorHandler);
  }

  filterDrains(data):any{
    //To be worked on after API updates.
  }

  errorHandler(error: Response) {
    console.error(error);
    return Observable.throw(error || 'Sorry, something went wrong');

  }




}


