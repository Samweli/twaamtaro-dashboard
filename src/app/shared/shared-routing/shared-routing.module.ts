import { DashboardComponent } from './../../shared/dashboard/dashboard.component';

import { DrainListComponent } from './../../shared/drains/all-drains/all-drains.component';
import { CleanDrainComponent } from './../../shared/drains/clean-drain/clean-drain.component';
import { DirtyDrainComponent } from './../../shared/drains/dirty-drain/dirty-drain.component';
import { FilterDrainsComponent } from './../../shared/drains/filter-drains/filter-drains.component';
import { HelpDrainComponent } from './../../shared/drains/help-drain/help-drain.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedComponent } from "./../../shared/shared.component";
import { ReportComponent } from './../../shared/reports/reports.component';
import { RanksComponent } from './../../shared/ranks/ranks.component';
import { NotFoundComponent } from './../../shared/not-found/not-found.component';
import { UsersComponent } from './../../shared/users/users-list/users.component';
import { UserDetailComponent } from './../../shared/users/user-detail/user-detail.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'dashboard',
        component: SharedComponent,
        children: [
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
          //{ path: 'dashboard', component: DashboardComponent },
          { path: 'reports', component: ReportComponent },
          { path: 'clean-drains', component: CleanDrainComponent },
          { path: 'dirty-drains', component: DirtyDrainComponent },
          { path: 'drain-list', component: DrainListComponent },
          { path: 'help-drains', component: HelpDrainComponent },
          { path: 'users', component: UsersComponent }, 
          { path: 'ranks', component: RanksComponent }, 
          { path: 'user-details/:id', component: UserDetailComponent }, 
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
export class SharedRoutingModule { }
