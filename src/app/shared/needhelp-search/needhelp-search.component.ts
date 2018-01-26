import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-needhelp-search',
  templateUrl: './needhelp-search.component.html',
  styleUrls: ['./needhelp-search.component.css']
})
export class NeedhelpSearchComponent implements OnInit {

  @Output()
  searchValueChanged: EventEmitter<any> = new EventEmitter();

  constructor(public http: Http) {}
  
  observableSource = (keyword: any): Observable<any[]> => {
    let url: string = 
      'http://localhost:3000/search?q='+keyword
    if (keyword) {
      return this.http.get(url)
        .map(res => {
          let json = res.json();
          return json.streets;
        })
    } else {
      return Observable.of([]);
    }
  }

  search(data){

    if(data.street_name){
      console.log('looking agin');
      console.log(data);
      this.searchValueChanged.emit(data);
    }
    
  }

  ngOnInit() {
  }

}
