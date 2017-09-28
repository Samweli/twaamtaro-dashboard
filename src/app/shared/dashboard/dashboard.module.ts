import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { DashboardRoutingModule } from './dashboard-routing/dashboard-routing.module';

import { FooterComponent } from './../footer/footer.component';
import { AdminContentComponent } from './../../admin/admin-content/admin-content.component';
import { LeftSideComponent } from './../left-side/left-side.component';
import { HeaderComponent } from './../header/header.component';
import { AdminComponent } from './../../admin/admin.component';
import { ReportComponent } from './../../shared/reports/reports.component';
import { NotificationBarComponent } from "./../notification-bar/notification-bar.component";


@NgModule({
  imports: [
    CommonModule,
    Ng2GoogleChartsModule,
  ],
  declarations: [
    AdminComponent,
    AdminContentComponent,
    FooterComponent,
    HeaderComponent,
    LeftSideComponent,
    ReportComponent
    
  ]
})
export class DashboardModule { }
