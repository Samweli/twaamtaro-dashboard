import { Component, OnInit } from '@angular/core';
import { DrainsService } from './drains.service';
import { Directive } from '@angular/core';


@Directive({
  selector: 'drain'
})


@Component({
  selector: 'drain-list',
  templateUrl: './drain-list.component.html',
  styleUrls: ['./drain-list.component.css']
})
export class DrainListComponent {
  title = 'Drains List!';
  drains;

  constructor() { }

  ngOnInit() {
  }

}
