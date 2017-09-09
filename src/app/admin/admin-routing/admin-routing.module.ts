import { AdminDashboard2Component } from './../admin-dashboard2/admin-dashboard2.component';
import { AdminComponent } from './../admin.component';
import { DrainListComponent } from './../drains/drain-list.component';
import { CleanDrainComponent } from './../drains/clean-drain.component';
import { DirtyDrainComponent } from './../drains/dirty-drain.component';
import { HelpDrainComponent } from './../drains/help-drain.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { StarterComponent } from './../../starter/starter.component';
import { ReportComponent } from './../reports/reports.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'admin',
        component: AdminComponent,
        children: [
          {
            path: '',
            redirectTo: 'dashboard2',
            pathMatch: 'full'
          },
          {
            path: 'dashboard2',
            component: AdminDashboard2Component
          },
          { path: 'reports', component: ReportComponent },
          { path: 'clean-drains', component: CleanDrainComponent },
          { path: 'dirty-drains', component: DirtyDrainComponent },
          { path: 'drain-list', component: DrainListComponent },
          { path: 'help-drains', component: HelpDrainComponent },
        ]        
      },
      
      { path: 'starter', component: StarterComponent },
    ]),

  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
