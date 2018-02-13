import { DrainsService } from './../../core/drains.service';
import { NgProgress } from 'ngx-progressbar';
import { Component, OnInit, Output, Input,  EventEmitter } from '@angular/core';
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
  @Input() query: any;
  @Output() searchQuery = new EventEmitter<any>()
  
  constructor(
    private ngProgress: NgProgress,
    private drainService: DrainsService
  ) { }

  streets: any;
  q: any = {'value': '' };
  thedrains: any; 

  //This function emits the input value to be used in another component
  emitValue($event)
  {
    this.query = this.q.value;
    this.searchQuery.emit(this.query);
  }

  ngOnInit() {
  }

}
