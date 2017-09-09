import { AdminModule } from './admin/admin.module';
import { CleanDrainModule } from './admin/drains/clean-drain.module';
import { DrainListModule } from './admin/drains/drains.module';
import { HelpDrainModule } from "./admin/drains/help-drain.module";
import { DirtyDrainModule } from './admin/drains/dirty-drain.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { NgModule } from '@angular/core';
import { Directive } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReportModule } from './admin/reports/reports.module';

import { AppComponent } from './app.component';
import { StarterComponent } from './starter/starter.component';
import { StarterHeaderComponent } from './starter/starter-header/starter-header.component';
import { StarterLeftSideComponent } from './starter/starter-left-side/starter-left-side.component';
import { StarterContentComponent } from './starter/starter-content/starter-content.component';
import { StarterFooterComponent } from './starter/starter-footer/starter-footer.component';
import { StarterControlSidebarComponent } from './starter/starter-control-sidebar/starter-control-sidebar.component';

import { AdminComponent } from './admin/admin.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminLeftSideComponent } from './admin/admin-left-side/admin-left-side.component';
import { AdminContentComponent } from './admin/admin-content/admin-content.component';
import { AdminFooterComponent } from './admin/admin-footer/admin-footer.component';
import { AdminControlSidebarComponent } from './admin/admin-control-sidebar/admin-control-sidebar.component';
import { AdminDashboard2Component } from './admin/admin-dashboard2/admin-dashboard2.component';

import { DrainsService } from './admin/drains/drains.service';
import { DrainListComponent } from './admin/drains/drain-list.component';
import { DirtyDrainComponent } from './admin/drains/dirty-drain.component';
import { CleanDrainComponent } from './admin/drains/clean-drain.component';
import { HelpDrainComponent } from './admin/drains/help-drain.component';

import { DirtyDrainsPipe } from './admin/drains/drains.pipe';

import { ReportComponent } from './admin/reports/reports.component';

@NgModule({
  declarations: [
    AppComponent,  
    StarterComponent,
    StarterHeaderComponent,
    StarterLeftSideComponent,
    StarterContentComponent,
    StarterFooterComponent,
    StarterControlSidebarComponent
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
    HelpDrainModule
  ],
  providers: [
    DrainsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
