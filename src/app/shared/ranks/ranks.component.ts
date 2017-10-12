import { Component, OnInit } from '@angular/core';
import { Drain } from "./../drains/drain";
import { DrainsService } from './../../core/drains.service';
import {AuthService} from "./../../core/auth.service";
import { ChartSelectEvent } from 'ng2-google-charts';

@Component({
  selector: 'app-ranks',
  templateUrl: './ranks.component.html',
  styleUrls: ['./ranks.component.css']
})
export class RanksComponent implements OnInit {
  title = 'Cleanness Ranks Based on Streets';
  ranksdata: any;
  street: any;
  ErrMsg: string;
  tableChartData: any;
  cssClassNames = {headerCell: 'w3-teal w3-padding', hoverTableRow: 'w3-grey', tableRow: 'w3-striped'};

  constructor(private drainService: DrainsService, public authService: AuthService) { }
  loggedIn: any;
  isLoggedIn()
  {
      this.loggedIn = this.authService.isLoggedIn();
  }
  public select(event: ChartSelectEvent) {
    
  }

  ranksData(): void {
    this.drainService
        .getRanksData()
        .subscribe(
          data => { 

          this.tableChartData =  {
            chartType: 'Table',
            dataTable: [
              ['Street',  'Adopted','Clean', 'Dirty', 'Need Help'],
            ],
            
              options: {
                title: 'Cleanness Ranks',
                width: '100%', 
                height: '100%',
                allowHtml: true,
                alternatingRowStyle: true,
                cssClassNames: this.cssClassNames,
                page: 'enable',
                pageSize: 20,
                sort: 'enable',
                
              }
            };
            this.ranksdata = this.drainService.ranksData;
             this.ranksdata.forEach( rank => {
              this.tableChartData.dataTable.push(
                [rank.street.street_name ,
                rank.details.adopted,
                rank.details.cleaned,
                rank.details.uncleaned,
                rank.details.need_help
              ]);
            }); 
          

          } 
        );
  }
/*alertVEO(street) {
  console.log(street);
  console.log('Got the Street');
}*/


  ngOnInit() {
    this.ranksData();
  }
}
