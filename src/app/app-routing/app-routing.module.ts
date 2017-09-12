import { AdminDashboardComponent } from './../admin/admin-dashboard/admin-dashboard.component';
import { StarterComponent } from './../starter/starter.component';
import { AdminComponent } from './../admin/admin.component';
import { ReportComponent } from './../admin/reports/reports.component';
import { DrainListComponent } from './../admin/drains/drain-list.component';
import { DirtyDrainComponent } from './../admin/drains/dirty-drain.component';
import { CleanDrainComponent } from './../admin/drains/clean-drain.component';
import { HelpDrainComponent } from './../admin/drains/help-drain.component';
import { FilterDrainsComponent } from './../admin/drains/filter-drains.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'admin', pathMatch: 'full' },
      { path: '', component: AdminDashboardComponent },
      //{ path: 'admin/dashboard', component: AdminDashboardComponent },
      { path: 'reports', component: ReportComponent },
      { path: 'starter', component: StarterComponent },
      { path: 'drains', component: DrainListComponent },
      { path: 'dirty-drains', component: DirtyDrainComponent },
      { path: 'clean-drains', component: CleanDrainComponent },
      { path: 'help-drains', component: HelpDrainComponent },
    ])
  ],
  declarations: [],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
