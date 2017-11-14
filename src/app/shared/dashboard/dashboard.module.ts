import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { DashboardRoutingModule } from './dashboard-routing/dashboard-routing.module';

import { AdminContentComponent } from './../admin/admin-content/admin-content.component';

@NgModule({
  imports: [
    CommonModule,
    Ng2GoogleChartsModule,
  ],
  declarations: [
    AdminContentComponent,
    
  ]
})
export class DashboardModule { }
