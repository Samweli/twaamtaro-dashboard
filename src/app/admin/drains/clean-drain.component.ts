import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { CleanDrainsPipe } from './drains.pipe';
import { DrainsService } from './drains.service';
import { Drain } from './drain';

@Component({
  selector: 'clean-drain',
  templateUrl: './clean-drain.component.html',
  styleUrls: ['./drains.component.css'],
  providers: [],
})
export class CleanDrainComponent implements OnInit {
  title = 'Clean Drains';
  drains: Drain[];
  cleared = true;
  ErrMsg: string;

  constructor(private drainService: DrainsService) { }
  getDrains(): void {
    this.drainService
        .getDrains()
        .subscribe(
          drains => this.drains = drains, 
          resError=> this.ErrMsg = resError
        );
  }
   /*@Output() cleanDrains = new EventEmitter();
  
     eventEmitClick(event) {
         this.cleanDrains.emit(event);
     }
*/
  ngOnInit(): void {
    this.getDrains();
  }
}
