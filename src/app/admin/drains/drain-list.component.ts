import { Component, OnInit } from '@angular/core';
import { Directive } from '@angular/core';
import { DrainsService } from './drains.service';
import { Drain } from './drain';

@Component({
  selector: 'drain-list',
  templateUrl: './drain-list.component.html',
  styleUrls: ['./drains.component.css'],
  providers: [],
})
export class DrainListComponent implements OnInit {
  title = 'List!';
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
