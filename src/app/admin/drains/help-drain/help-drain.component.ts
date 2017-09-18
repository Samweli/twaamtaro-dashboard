import { Component, OnInit } from '@angular/core';

import { HelpDrainsPipe } from './../drains.pipe';
import { DrainsService } from './../drains.service';
import { Drain } from './../drain';

@Component({
  selector: 'help-drains',
  templateUrl: './help-drain.component.html',
  styleUrls: ['./help-drain.component.css'],
  providers: []
})
export class HelpDrainComponent implements OnInit {
  title = 'Drains In Need of Help';
  drains: Drain[];
  need_help = true;

  constructor(private drainService: DrainsService) { }
  getDrains(): void {
    this.drainService
        .getHelpDrains()
        .subscribe(drains => this.drains = drains);
  }

  ngOnInit(): void {
    this.getDrains();
  }
}
