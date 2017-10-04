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
  ranksdata: any;
  ErrMsg: string;
  tableChartData: any;
  cssClassNames = {headerRow: 'w3-black', hoverTableRow: 'w3-grey', tableRow: 'w3-striped'};
 // ranksArray: any;
  constructor(private drainService: DrainsService) { }

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
                [rank.street.city_name ,
                rank.details.adopted,
                rank.details.cleaned,
                rank.details.uncleaned,
                rank.details.need_help]);
            }); 
          

          } 
        );
  }
initilizeTable() {

}


  ngOnInit() {
    this.ranksData();
  }
}