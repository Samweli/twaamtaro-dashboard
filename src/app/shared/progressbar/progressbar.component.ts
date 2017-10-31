import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'progress-bar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressBarComponent implements OnInit {

  constructor() { }
  @Input()
  value = 0;

  @Input()
  max = 100;

  @Input()
  title: string;

  getProgress() {
      if (this.max === 0)
          return 0;

      return this.value / this.max * 100;
  }
  ngOnInit() {
  }

}
