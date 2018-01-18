import { DashboardComponent } from './../shared/dashboard/dashboard.component';
import { AppComponent } from "./../app.component";
import { AdminComponent } from './../shared/admin/admin.component';
import { LoginComponent } from "./../shared/login/login.component";
import { ReportComponent } from './../shared/reports/general/reports.component';
import { DrainListComponent } from './../shared/drains/all-drains/all-drains.component';
import { DirtyDrainComponent } from './../shared/drains/dirty-drain/dirty-drain.component';
import { CleanDrainComponent } from './../shared/drains/clean-drain/clean-drain.component';
import { HelpDrainComponent } from './../shared/drains/help-drain/help-drain.component';
import { FilterDrainsComponent } from './../shared/drains/filter-drains/filter-drains.component';
import { RanksComponent } from "./../shared/ranks/ranks.component";
import { SharedComponent } from "./../shared/shared.component";
import { UnknownDrainsComponent } from './../shared/drains/unknown-drains/unknown-drains.component';

import { NotFoundComponent } from './../shared/not-found/not-found.component';
import { UsersComponent } from './../shared/users/users-list/users.component';
import { UserDetailComponent } from './../shared/users/user-detail/user-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthGuard } from "./../core/auth.guard";
@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'dashboard/home', pathMatch: 'full' },
      { path: 'dashboard', component: SharedComponent },
      { path: '*', component: NotFoundComponent },
    ],{ useHash: true })
  ],
  declarations: [],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
