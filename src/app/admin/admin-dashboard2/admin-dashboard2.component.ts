import { Component, OnInit } from '@angular/core';


// Variable in assets/js/scripts.js file
declare var AdminLTE: any;

@Component({
  selector: 'app-admin-dashboard2',
  templateUrl: './admin-dashboard2.component.html',
  styleUrls: ['./admin-dashboard2.component.css']
})
export class AdminDashboard2Component implements OnInit {

  constructor() { }

  ngOnInit() {
     AdminLTE.init();
  }

  /*constructor(private drainService: DrainsService) { }

  ngOnInit(): void {
    this.drainService.getDrains()
      .then(drains => this.drains = drains.slice(1, 5));
  }*/
}
