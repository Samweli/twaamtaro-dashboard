import { Component, OnInit } from '@angular/core';
import { Drain } from "./../drains/drain";
import { DrainsService } from './../drains/drains.service';

@Component({
  selector: 'app-ranks',
  templateUrl: './ranks.component.html',
  styleUrls: ['./ranks.component.css']
})
export class RanksComponent implements OnInit {
  title = 'Cleanness Ranks Based on Streets';
  //drains: Drain[];
  draindata: any;
  ErrMsg: string;
  constructor(private drainService: DrainsService) { }
  drainData(): void {
    this.drainService
        .getDrainData()
        .subscribe(
          data => this.draindata = data, 
        );
  }

   public tableChartData =  {
    chartType: 'Table',
    dataTable: [
      ['Street', 'All','Clean', 'Dirty', 'Need Help', 'Unknown'],
      ['Kisutu', 17, 52, 6, 4, 9],
      ['Hananasif', 27, 52, 16, 14, 9],
      ['Mkunguni A', 17, 52, 26, 4, 19],
      ['Mkunguni B', 34, 5, 23, 21, 8]
    ],
    
    options: {title: 'Cleanness Ranks', allowHtml: true}
  };

  ngOnInit() {
    this.drainData;
  }
}
