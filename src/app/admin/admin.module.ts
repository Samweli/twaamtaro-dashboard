import { AdminControlSidebarComponent } from './admin-control-sidebar/admin-control-sidebar.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminContentComponent } from './admin-content/admin-content.component';
import { AdminLeftSideComponent } from './admin-left-side/admin-left-side.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { NotificationBarComponent } from "./notification-bar/notification-bar.component";

import { CleanDrainComponent } from './drains/clean-drain.component';
import { DirtyDrainComponent } from './drains/dirty-drain.component';
import { HelpDrainComponent } from './drains/help-drain.component';
import { DrainListComponent } from './drains/drain-list.component';
import { DirtyDrainsPipe, CleanDrainsPipe, HelpDrainsPipe } from './drains/drains.pipe';
import { FilterDrainsComponent } from './drains/filter-drains.component';

import { Directive } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import { CleanDrainModule } from './drains/clean-drain.module';
import { DirtyDrainModule } from './drains/dirty-drain.module';
import { HelpDrainModule } from './drains/help-drain.module';
import { DrainListModule } from './drains/drains.module';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { ReportModule } from './reports/reports.module';
import { UserModule } from "./users/users-list/users.module";
import { FilterDrainsModule } from './drains/filter-drains.module';

import { DrainsService } from './drains/drains.service';
import { UserService } from './users/user.service';

import { ReportComponent } from './reports/reports.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UsersComponent } from './users/users-list/users.component';

import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserDetailModule } from "./users/user-detail/user-detail.module";
import { RanksComponent } from './ranks/ranks.component';


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
    UserModule,
    UserDetailModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AdminComponent,
    AdminHeaderComponent,
    AdminLeftSideComponent,
    AdminContentComponent,
    AdminFooterComponent,
    AdminControlSidebarComponent,
    AdminDashboardComponent,
    DrainListComponent,
    CleanDrainComponent,
    DirtyDrainComponent,
    HelpDrainComponent,
    DirtyDrainsPipe,
    CleanDrainsPipe,
    HelpDrainsPipe,
    ReportComponent,
    NotFoundComponent,
    UsersComponent,
    UserDetailComponent,
    NotificationBarComponent,
    FilterDrainsComponent,
    RanksComponent
  ],
  exports: [AdminComponent],
  providers: [
    DrainsService,
    UserService,
    ReactiveFormsModule
  ],
})
export class AdminModule { 
  
}
