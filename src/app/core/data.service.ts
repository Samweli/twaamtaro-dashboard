import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class DataService {

  public onSearchResultsReady: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  storeNeedHelpRequests(data: any){
    localStorage.setItem('allNeedHelpRequests', JSON.stringify(data));
  }

  getNeedHelpRequests(){
    return JSON.parse(localStorage.getItem('allNeedHelpRequests'));
  }

  // searches need helps based on supplied 
  // parameter
  searchNeedHelpRequests(searchParam){
    this.onSearchResultsReady.emit(searchParam);
  }



}
