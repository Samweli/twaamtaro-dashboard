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
  row: any;
  clean: any;
  dirty: any;
  adopted
  help : any;
  message: string;
  column: number ;
  selectedRowValues: any[];

  cssClassNames = {headerCell: 'w3-teal w3-padding', hoverTableRow: 'w3-grey', tableRow: 'w3-striped'};

  constructor(private drainService: DrainsService, public authService: AuthService) { }
  loggedIn: any;
  isLoggedIn()
  {
      this.loggedIn = this.authService.isLoggedIn();
  }
  public select(event: ChartSelectEvent) {
    document.getElementById('alert').style.display='block'
    this.street = event.selectedRowValues[0];
    this.adopted = event.selectedRowValues[1];
    this.clean = event.selectedRowValues[2];
    this.dirty = event.selectedRowValues[3];
    this.help = event.selectedRowValues[4];
    this.row = 1 + event.row;

    this.column = 1 + event.column;
  }
  closestreet() 
  {
    var modal = document.getElementById('alert');
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
  }
  closemodal() { 
    document.getElementById('alert').style.display='none';
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
alertVEO(street) {
  console.log(street);
  alert('You alerted ' + this.street);

}


  ngOnInit() {
    this.ranksData();
    this.closestreet();
  }
}
