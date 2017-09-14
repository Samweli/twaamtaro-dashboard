import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, } from '@angular/forms';
import { DrainsService } from './drains.service';
import { Drain } from './drain';

@Component({
  selector: 'clean-drain',
  templateUrl: './filter-drains.component.html',
  styleUrls: ['./drains.component.css'],
  providers: [],
})

export class FilterDrainsComponent implements OnInit {
  title = 'Choose Address';
  drains: Drain[];
  ErrMsg: string;
  filterForm;
  
  constructor(private drainService: DrainsService) { }
     getDrainAddress(address) : void {
      this.drainService
      .getDrainAddress(address)
      .subscribe(drains => this.drains = drains);
     }

    
    
  ngOnInit(): void {
    this.filterForm  = new FormGroup({
      address: new FormControl()
    });
  }
  onSubmit(){
    console.log(this.filterForm.value);
  }
}
