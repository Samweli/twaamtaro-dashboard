import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';
import { DrainListComponent } from './drains/drain-list.component';
import { DrainsService } from './drains/drains.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {

  bodyClasses = 'skin-blue sidebar-mini';
  body: HTMLBodyElement = document.getElementsByTagName('body')[0];

  ngOnInit() {
    // add the the body classes
    this.body.classList.add('skin-blue');
    this.body.classList.add('sidebar-mini');
  }
  
   ngOnDestroy() {
    //remove the the body classes
    this.body.classList.remove('skin-blue');
    this.body.classList.remove('sidebar-mini');
  }
  pieChartData =  {
  chartType: 'PieChart',
  dataTable: [
    ['Task', 'Cleanness Feedback'],
    ['Clean',     121],
    ['Dirty',    8362  ],
  ],
  options: {'title': 'Cleanness'},
};

}
