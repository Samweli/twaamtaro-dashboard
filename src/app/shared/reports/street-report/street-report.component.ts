import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location }                 from '@angular/common';
import { User } from "./../../../core/user";
import { DrainsService } from "./../../../core/drains.service";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-street-report',
  templateUrl: './street-report.component.html',
  styleUrls: ['./street-report.component.css']
})
export class StreetReportComponent implements OnInit {

  title = 'User Details';
  street: any;
  streets: any;
  reportedstreet: any;
  //theRoute
    constructor(
      private drainService: DrainsService,
      private route: ActivatedRoute,
      private location: Location,
    ) {}
  
   getStreetReport(): any {
      this.route.params.subscribe(params => {
        this.street = +params['id']; 
      })

      this.drainService.getRanksData()
      .subscribe(res => {
        this.streets = this.drainService.ranksData;
        this.reportedstreet = this.streets.filter(report => report.street.id == this.street);
      })
      
    }
    
    goBack(): void {
      this.location.back();
    }


  ngOnInit() {
    this.getStreetReport()
  }

}
