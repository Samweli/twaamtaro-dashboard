import { Injectable } from '@angular/core';

import { Drain } from './../drains/drain';
import { DrainsService } from './../drains/drains.service';

@Injectable()
export class AdminDashboardService {

	cleandrains: number = 0;

  constructor(private drainsService: DrainsService) { }


  cleanDrains(): any {
    this.drainsService
        .getCleanDrains()
        .subscribe(cleanDrains => this.cleandrains = cleanDrains.length);
  }


    dataTable = [
        ['Cleanness Feedback', 'Ratio'],
        ['Clean Drains', this.cleandrains ],]
  
	pieChartData = { 
	      chartType: 'PieChart',
	      dataTable: this.dataTable,
	      options: {
	            'title': 'General Cleanness Report for Drains',
	            pieHole: 0.4,
	            'height':500 ,
	            },
	};



}
