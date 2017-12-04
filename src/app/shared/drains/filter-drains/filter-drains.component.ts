import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, } from '@angular/forms';
import { DrainsService } from './../../../core/drains.service';
import { Drain } from './../drain';

@Component({
  selector: 'clean-drain',
  templateUrl: './filter-drains.component.html',
  styleUrls: ['./filter-drains.component.css'],
  providers: [],
})

export class FilterDrainsComponent implements OnInit {
  title = 'Choose Address';
  drains: Drain[];
  ErrMsg: string;
  filterForm;
  
  constructor(private drainService: DrainsService) { }
     
  ngOnInit(): void {
    this.filterForm  = new FormGroup({
      address: new FormControl()
    });
  }
  onSubmit(){
    console.log(this.filterForm.value);
  }
}
