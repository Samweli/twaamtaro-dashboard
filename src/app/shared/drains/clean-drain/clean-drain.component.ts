import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { DrainsService } from './../drains.service';
import { Drain } from './../drain';

@Component({
  selector: 'clean-drain',
  templateUrl: './clean-drain.component.html',
  styleUrls: ['./clean-drain.component.css'],
  providers: [],
})
export class CleanDrainComponent implements OnInit {
  title = 'Clean Drains';
  drains: Drain[];
  cleared = true;
  ErrMsg: string;

  constructor(private drainService: DrainsService) { }
  cleanDrains(): void {
    this.drainService
        .getCleanDrains()
        .subscribe(
          drains => this.drains = drains, 
          resError=> this.ErrMsg = resError
        );
  }
   
  ngOnInit(): void {
    this.cleanDrains;
  }
}
