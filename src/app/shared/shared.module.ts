
import { CleanDrainComponent } from './drains/clean-drain/clean-drain.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DirtyDrainComponent } from './drains/dirty-drain/dirty-drain.component';
import { DrainListComponent } from './drains/all-drains/all-drains.component';
import { FilterDrainsComponent } from './drains/filter-drains/filter-drains.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HelpDrainComponent } from './drains/help-drain/help-drain.component';
import { LeftSideComponent } from './left-side/left-side.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NotificationBarComponent } from "./notification-bar/notification-bar.component";
import { RanksComponent } from './ranks/ranks.component';
import { ReportComponent } from './reports/reports.component';
import { SharedComponent } from "./shared.component";
import { UnknownDrainsComponent } from './drains/unknown-drains/unknown-drains.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserSearchComponent } from './users/user-search/user-search.component';
import { UsersComponent } from './users/users-list/users.component';

import { Directive } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SharedRoutingModule } from './../shared/shared-routing/shared-routing.module';

import { AdminRoutingModule } from './admin/admin-routing/admin-routing.module';
import { CleanDrainModule } from './drains/clean-drain/clean-drain.module';
import { DirtyDrainModule } from './../shared/drains/dirty-drain/dirty-drain.module';
import { HelpDrainModule } from './../shared/drains/help-drain/help-drain.module';
import { DrainListModule } from './../shared/drains/all-drains/all-drains.module';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
<<<<<<< HEAD:src/app/admin/admin.module.ts
import { ReportModule } from './reports/reports.module';
import { UserModule } from "./users/users-list/users.module";
import { FilterDrainsModule } from './drains/filter-drains/filter-drains.module';

import { DrainsService } from './drains/drains.service';
import { UserService } from './users/user.service';
import { AdminDashboardService } from './admin-dashboard/admin-dashboard.service';

import { ReportComponent } from './reports/reports.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UsersComponent } from './users/users-list/users.component';

import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserDetailModule } from "./users/user-detail/user-detail.module";
import { RanksComponent } from './ranks/ranks.component';
import { UserSearchComponent } from './users/user-search/user-search.component';
=======
import { ReportModule } from './../shared/reports/reports.module';
import { UserModule } from "./../shared/users/users-list/users.module";
import { FilterDrainsModule } from './../shared/drains/filter-drains/filter-drains.module';
>>>>>>> f0f1b41bd874159b794f780e0d259a04bc4128cf:src/app/shared/shared.module.ts

import { DrainsService } from './../shared/drains/drains.service';
import { UserService } from './../shared/users/user.service';

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
  //UserDetailModule,
    ReactiveFormsModule,
    FormsModule,
    SharedRoutingModule,
  ],
  declarations: [
<<<<<<< HEAD:src/app/admin/admin.module.ts
    AdminComponent,
    AdminHeaderComponent,
    AdminLeftSideComponent,
    AdminContentComponent,
    AdminFooterComponent,
    AdminControlSidebarComponent,
=======
    //AdminComponent,
    LeftSideComponent,
   // ContentComponent,
    FooterComponent,
    //ControlSidebarComponent,
>>>>>>> f0f1b41bd874159b794f780e0d259a04bc4128cf:src/app/shared/shared.module.ts
    DrainListComponent,
    CleanDrainComponent,
    DirtyDrainComponent,
    HeaderComponent,
    HelpDrainComponent,
<<<<<<< HEAD:src/app/admin/admin.module.ts
    DirtyDrainsPipe,
    CleanDrainsPipe,
    HelpDrainsPipe,
    NotificationBarComponent,
    AdminDashboardComponent,
=======
>>>>>>> f0f1b41bd874159b794f780e0d259a04bc4128cf:src/app/shared/shared.module.ts
    ReportComponent,
    NotFoundComponent,
    UsersComponent,
    UserDetailComponent,
    FilterDrainsComponent,
    FooterComponent,
    RanksComponent,
    UserSearchComponent,
    DashboardComponent,
    LoginComponent,
    UnknownDrainsComponent,
    SharedComponent,
  ],
  exports: [SharedComponent],
  providers: [
    DrainsService,
    UserService,
    ReactiveFormsModule,
<<<<<<< HEAD:src/app/admin/admin.module.ts
    AdminDashboardService
=======
    //LoginModule
>>>>>>> f0f1b41bd874159b794f780e0d259a04bc4128cf:src/app/shared/shared.module.ts
  ],
})


export class SharedModule { }
