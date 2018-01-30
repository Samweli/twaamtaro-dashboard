import { DashboardComponent } from './../../dashboard/dashboard.component';

import { DrainListComponent } from './../../drains/all-drains/all-drains.component';
import { CleanDrainComponent } from './../../drains/clean-drain/clean-drain.component';
import { DirtyDrainComponent } from './../../drains/dirty-drain/dirty-drain.component';
import { FilterDrainsComponent } from './../../drains/filter-drains/filter-drains.component';
import { HelpDrainComponent } from './../../drains/help-drain/help-drain.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ReportComponent } from './../../reports/general/reports.component';
import { RanksComponent } from './../../ranks/ranks.component';
import { NotFoundComponent } from './../../not-found/not-found.component';
import { UsersComponent } from './../../users/users/users.component';
import { UsersListComponent } from './../../users/users-list/users-list.component';
import { UserDetailComponent } from './../../users/user-detail/user-detail.component';
import { StreetReportComponent } from './../../reports/street-report/street-report.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'home',
        component:DashboardComponent,
        children: [
          {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full'
          },
          {
            path: '',
            component: DashboardComponent
          },
 
          { path: 'reports', component: ReportComponent },
          { path: 'clean-drains', component: CleanDrainComponent },
          { path: 'dirty-drains', component: DirtyDrainComponent },
          { path: 'drain-list', component: DrainListComponent },
          { path: 'help-drains', component: HelpDrainComponent },
          { path: 'users', component: UsersComponent }, 
          { path: 'users-list/:id', component: UsersListComponent }, 
          { path: 'ranks', component: RanksComponent }, 
          { path: 'user-details/:id', component: UserDetailComponent }, 
          { path: 'reports/street-report/:id', component: StreetReportComponent }, 
          { path: '*', component: NotFoundComponent },
          { path: 'filter-drains', component: FilterDrainsComponent }, 
        ] ,    
      }, 
    ]),

  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule { }
