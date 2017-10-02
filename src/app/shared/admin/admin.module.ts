import { AdminComponent } from "./admin.component";
/*import { CleanDrainComponent } from './../shared/drains/clean-drain/clean-drain.component';
import { DashboardComponent } from './../shared/dashboard/dashboard.component';
import { DirtyDrainComponent } from './../shared/drains/dirty-drain/dirty-drain.component';
import { DrainListComponent } from './../shared/drains/all-drains/all-drains.component';
import { FilterDrainsComponent } from './../shared/drains/filter-drains/filter-drains.component';
import { FooterComponent } from './../shared/footer/footer.component';
import { HeaderComponent } from './../shared/header/header.component';
import { HelpDrainComponent } from './../shared/drains/help-drain/help-drain.component';
import { LeftSideComponent } from './../shared/left-side/left-side.component';
import { LoginComponent } from './../shared/login/login.component';
import { NotFoundComponent } from './../shared/not-found/not-found.component';
import { NotificationBarComponent } from "./../shared/notification-bar/notification-bar.component";
import { RanksComponent } from './../shared/ranks/ranks.component';
import { ReportComponent } from './../shared/reports/reports.component';
import { SharedComponent } from "./../shared/shared.component";
import { UnknownDrainsComponent } from './../shared/drains/unknown-drains/unknown-drains.component';
import { UserDetailComponent } from './../shared/users/user-detail/user-detail.component';
import { UserSearchComponent } from './../shared/users/user-search/user-search.component';
import { UsersComponent } from './../shared/users/users-list/users.component';*/
import { Directive } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import { AdminRoutingModule } from './admin-routing/admin-routing.module';
/*import { CleanDrainModule } from './../shared/drains/clean-drain/clean-drain.module';
import { DirtyDrainModule } from './../shared/drains/dirty-drain/dirty-drain.module';
import { HelpDrainModule } from './../shared/drains/help-drain/help-drain.module';
import { DrainListModule } from './../shared/drains/all-drains/all-drains.module';
import { ReportModule } from './../shared/reports/reports.module';
import { UserModule } from "./../shared/users/users-list/users.module";
import { FilterDrainsModule } from './../shared/drains/filter-drains/filter-drains.module';*/

import { DrainsService } from './../drains/drains.service';
import { UserService } from './../users/user.service';




@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    Ng2GoogleChartsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    AdminComponent,
    //AdminContentComponent,
    //AdminComponent,
   
  ],
  exports: [],
  providers: [
    DrainsService,
    UserService,
    ReactiveFormsModule,
  ],
})
export class AdminModule { 
  
}
