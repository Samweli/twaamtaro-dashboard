import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, } from '@angular/forms';
import { Router }            from '@angular/router';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { UserSearchService } from './user-search.service';
import { User } from './../user';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css'],
  providers: [UserSearchService]
})
export class UserSearchComponent implements OnInit {
  users: Observable<User[]>;
  private searchTerms = new Subject<string>();

  searchForm  = new FormGroup({
    q: new FormControl()
  }); 

  constructor(
    private userSearchService: UserSearchService,
    private router: Router) {}

  // Push a search term into the observable stream.
  searchQuery(searchkey: string): void {
    searchkey = this.searchForm.value.q;
    console.log(searchkey);
    this.searchTerms.next(searchkey);
  }

  ngOnInit(): void {
    this.users = this.searchTerms
    .switchMap(searchkey => searchkey?this.userSearchService.search(searchkey): Observable.of<User[]>([]))
    .catch(error => { 
      console.log(error);
      return Observable.of<User[]>([]);
    });
    
  }
  gotoDetail(user: User): void {
    let link = ['/user-details/', user.id];
    this.router.navigate(link);
  }
}
