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
  ranksArray='';
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
            
              options: {title: 'Cleanness Ranks', allowHtml: true}
            };
            this.ranksdata = this.drainService.ranksData;
            //console.log(this.ranksdata);
             this.ranksdata.forEach( rank => {
              this.ranksArray ='['+ 
              rank.street.city_name +', '+
              rank.details.adopted+', '+
              rank.details.cleaned+', '+
              rank.details.uncleaned+', '+
              rank.details.need_help+'], ';
              this.tableChartData.dataTable.push(this.ranksArray);
              console.log(this.ranksArray);
            }); //console.log(this.ranksArray);
          

          } 
        );
  }
initilizeTable() {

}


  ngOnInit() {
    this.ranksData();
  }
}
/*this.ranksdata.forEach( rank => {
  this.ranksArray +='['+ 
  rank.street.city_name +', '+
  rank.details.adopted+', '+
  rank.details.cleaned+', '+
  rank.details.uncleaned+', '+
  rank.details.need_help+'], '; 

              ['Kisutu', 52, 6, 4, 9],
              ['Kisutu', 52, 6, 4, 9],
              ['Hananasif', 27,52, 16, 9],
              ['Mkunguni A', 52, 26, 4, 19],
              ['Mkunguni B',  5, 23, 21, 8]
})*/