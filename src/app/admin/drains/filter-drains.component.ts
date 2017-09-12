import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SelectControlValueAccessor } from '@angular/forms';
import { DrainsService } from './drains.service';
import { Drain } from './drain';

@Component({
  selector: 'clean-drain',
  templateUrl: './filter-drains.component.html',
  styleUrls: ['./drains.component.css'],
  providers: [],
})
export class FilterDrainsComponent implements OnInit {
  title = 'Choose Your Drains ';
  drains: Drain[];
  ErrMsg: string;

  constructor(private drainService: DrainsService) { }
     getDrainAddress(address) : void {
      this.drainService
      .getDrainAddress(address)
      .subscribe(drains => this.drains = drains);
     }
  ngOnInit(): void {
  }
}
