import { Component, OnInit } from '@angular/core';
import { Directive } from '@angular/core';
import { DrainsService } from './../../../core/drains.service';
import { Drain } from './../drain';

@Component({
  selector: 'drain-list',
  templateUrl: './all-drains.component.html',
  styleUrls: ['./all-drains.component.css'],
  providers: [],
})
export class DrainListComponent implements OnInit {
  title = 'All Drains';
  drains: Drain[];

  constructor(private drainService: DrainsService) { }

    getDrains(): void {
      this.drainService
          .getDrains()
          .subscribe(drains => this.drains = drains);
    }

  ngOnInit(): void {
    this.getDrains();
  }
}
