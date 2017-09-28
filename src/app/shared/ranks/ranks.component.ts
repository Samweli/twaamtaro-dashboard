import { Component, OnInit } from '@angular/core';
import { Drain } from "./../drains/drain";

@Component({
  selector: 'app-ranks',
  templateUrl: './ranks.component.html',
  styleUrls: ['./ranks.component.css']
})
export class RanksComponent implements OnInit {
  title = 'Cleanness Ranks Based on Wards';
  drains: Drain[];

  constructor() { }

  ngOnInit() {
  }

}
