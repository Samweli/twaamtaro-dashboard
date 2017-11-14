
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
import { ReportModule } from './../shared/reports/reports.module';
import { UserModule } from "./../shared/users/users-list/users.module";
import { FilterDrainsModule } from './../shared/drains/filter-drains/filter-drains.module';


import { NotificationBarModule } from "./notification-bar/notification-bar.module";
import { TranslateService } from "../transilate/translate.service";
import { HeaderModule } from "./header/header.module";
import { TransilateModule } from "../transilate/transilate.module";
import { TranslatePipe } from "../transilate/translate.pipe";
import { TRANSLATION_PROVIDERS } from "../transilate/translation/translation.component";
import { DrainsService } from './../core/drains.service';
import { PagerService } from './../core/paging.service';
import { UserService } from './../core/user.service';

import { StreetVEOPipe, UserStreetPipe } from "./../core/user.pipe";
import { NotifyComponent } from './notify/notify.component';
import { RegisterComponent } from './register/register.component';

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
    NotificationBarModule,
    HeaderModule,
    TransilateModule,
    SharedRoutingModule,
  ],
  declarations: [
    //AdminComponent,
    LeftSideComponent,
   // ContentComponent,
    FooterComponent,
    //ControlSidebarComponent,
    DrainListComponent,
    CleanDrainComponent,
    DirtyDrainComponent,
    FilterDrainsComponent,
    HeaderComponent,
    HelpDrainComponent,
    ReportComponent,
    NotFoundComponent,
    UsersComponent,
    UserDetailComponent,
    NotificationBarComponent,
    FilterDrainsComponent,
    FooterComponent,
    RanksComponent,
    UserSearchComponent,
    DashboardComponent,
    LoginComponent,
    UnknownDrainsComponent,
    SharedComponent,StreetVEOPipe, UserStreetPipe,
    TranslatePipe,
    NotifyComponent,
    RegisterComponent,
  ],
  exports: [SharedComponent],
  providers: [
    DrainsService,
    UserService,
    TRANSLATION_PROVIDERS,
    TranslateService,
    ReactiveFormsModule,
    PagerService,
    //LoginModule
  ],
})


export class SharedModule { }
