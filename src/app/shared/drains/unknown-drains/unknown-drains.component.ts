import { Component, OnInit } from '@angular/core';
import { DrainsService } from './../drains.service';
import { Drain } from './../drain';

@Component({
  selector: 'app-unknown-drains',
  templateUrl: './unknown-drains.component.html',
  styleUrls: ['./unknown-drains.component.css']
})
export class UnknownDrainsComponent implements OnInit {

  title = 'Unknown Drains';
  drains: Drain[];
  ErrMsg: string;

  constructor(private drainService: DrainsService) { }
  unkownDrains(): void {
    this.drainService
        .getUnknownDrains()
        .subscribe(
          drains => this.drains = drains
        );
  }

  ngOnInit() {
    this.unkownDrains
  }

}
