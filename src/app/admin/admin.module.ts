import { AdminControlSidebarComponent } from './admin-control-sidebar/admin-control-sidebar.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminContentComponent } from './admin-content/admin-content.component';
import { AdminLeftSideComponent } from './admin-left-side/admin-left-side.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminComponent } from './admin.component';
import { AdminDashboard2Component } from './admin-dashboard2/admin-dashboard2.component';

import { CleanDrainComponent } from './drains/clean-drain.component';
import { DirtyDrainComponent } from './drains/dirty-drain.component';
import { HelpDrainComponent } from './drains/help-drain.component';
import { DrainListComponent } from './drains/drain-list.component';
import { DirtyDrainsPipe, CleanDrainsPipe, HelpDrainsPipe } from './drains/drains.pipe';

import { Directive } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import { CleanDrainModule } from './drains/clean-drain.module';
import { DirtyDrainModule } from './drains/dirty-drain.module';
import { HelpDrainModule } from './drains/help-drain.module';
import { DrainListModule } from './drains/drains.module';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { ReportModule } from './reports/reports.module';

import { DrainsService } from './drains/drains.service';

import { ReportComponent } from './reports/reports.component';


@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    Ng2GoogleChartsModule,
    DrainListModule,
    DirtyDrainModule,
    CleanDrainModule,
    HelpDrainModule,
    ReportModule,
  ],
  declarations: [
    AdminComponent,
    AdminHeaderComponent,
    AdminLeftSideComponent,
    AdminContentComponent,
    AdminFooterComponent,
    AdminControlSidebarComponent,
    AdminDashboard2Component,
    DrainListComponent,
    CleanDrainComponent,
    DirtyDrainComponent,
    HelpDrainComponent,
    DirtyDrainsPipe,
    CleanDrainsPipe,
    HelpDrainsPipe,
    ReportComponent,
  ],
  exports: [AdminComponent],
  providers: [
    DrainsService
  ],
})
export class AdminModule { 
  
}
