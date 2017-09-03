import { Component, OnInit } from '@angular/core';
import { DrainsService } from './drains.service';

@Component({
  selector: 'drain-list',
  templateUrl: './drain-list.component.html',
  styleUrls: ['./drain-list.component.css']
})
export class DrainListComponent implements OnInit {
  title = 'Drains List!';
  drains;

  constructor() { }

  ngOnInit() {
  }

}
