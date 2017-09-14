import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, } from '@angular/forms';

@Component({
  selector: 'app-admin-left-side',
  templateUrl: './admin-left-side.component.html',
  styleUrls: ['./admin-left-side.component.css']
})
export class AdminLeftSideComponent implements OnInit {

  constructor() { }
  searchForm  = new FormGroup({
    address: new FormControl()
});
  ngOnInit() {
  }

}
