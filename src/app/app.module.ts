import { AdminModule } from './admin/admin.module';
import { CleanDrainModule } from './admin/drains/clean-drain/clean-drain.module';
import { DrainListModule } from './admin/drains/all-drains/all-drains.module';
import { HelpDrainModule } from "./admin/drains/help-drain/help-drain.module";
import { DirtyDrainModule } from './admin/drains/dirty-drain/dirty-drain.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { NgModule } from '@angular/core';
import { Directive } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ReportModule } from './admin/reports/reports.module';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminLeftSideComponent } from './admin/admin-left-side/admin-left-side.component';
import { AdminContentComponent } from './admin/admin-content/admin-content.component';
import { AdminFooterComponent } from './admin/admin-footer/admin-footer.component';
import { AdminControlSidebarComponent } from './admin/admin-control-sidebar/admin-control-sidebar.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { NotificationBarComponent } from "./admin/notification-bar/notification-bar.component";

@NgModule({
  declarations: [
    AppComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    HttpModule,
    ReportModule,
    Ng2GoogleChartsModule,
    DrainListModule,
    DirtyDrainModule,
    CleanDrainModule,
    HelpDrainModule,
    ReactiveFormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
