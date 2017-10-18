import { AdminModule } from './shared/admin/admin.module';
import { CleanDrainModule } from './shared/drains/clean-drain/clean-drain.module';
import { DrainListModule } from './shared/drains/all-drains/all-drains.module';
import { HelpDrainModule } from "./shared/drains/help-drain/help-drain.module";
import { HeaderModule } from './shared/header/header.module';
import { DirtyDrainModule } from './shared/drains/dirty-drain/dirty-drain.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
//import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { NgModule } from '@angular/core';
import { Directive } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ReportModule } from './shared/reports/reports.module';
import { FormsModule } from '@angular/forms';
import { UserDetailModule } from "./shared/users/user-detail/user-detail.module";
import { SharedModule } from "./shared/shared.module";

import { AppComponent } from './app.component';
import { AdminComponent } from './shared/admin/admin.component';
import { AdminContentComponent } from './shared/admin/admin-content/admin-content.component';

//import { AdminControlSidebarComponent } from './admin-control-sidebar/admin-control-sidebar.component';
import { CleanDrainComponent } from './shared/drains/clean-drain/clean-drain.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { DirtyDrainComponent } from './shared/drains/dirty-drain/dirty-drain.component';
import { DrainListComponent } from './shared/drains/all-drains/all-drains.component';
import { FilterDrainsComponent } from './shared/drains/filter-drains/filter-drains.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { HelpDrainComponent } from './shared/drains/help-drain/help-drain.component';
import { LeftSideComponent } from './shared/left-side/left-side.component';
import { LoginComponent } from './shared/login/login.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { NotificationBarComponent } from "./shared/notification-bar/notification-bar.component";
import { RanksComponent } from './shared/ranks/ranks.component';
import { ReportComponent } from './shared/reports/reports.component';
import { SharedComponent } from "./shared/shared.component";
import { UserDetailComponent } from './shared/users/user-detail/user-detail.component';
import { UserSearchComponent } from './shared/users/user-search/user-search.component';
import { UsersComponent } from './shared/users/users-list/users.component';

import { UnknownDrainsComponent } from './shared/drains/unknown-drains/unknown-drains.component';

import { AuthGuard } from "./core/auth.guard";
import {TranslateService} from "./transilate/translate.service";
import {TranslatePipe} from "./transilate/translate.pipe";
import {TRANSLATION_PROVIDERS} from "./transilate/translation/translation.component";
import { AuthService } from "./core/auth.service";
import { DrainsUrlService } from "./core/drains-url.service";
import { SessionService } from "./core/session.service";
import { UsersUrlService } from "./core/users-url.service";

@NgModule({
  declarations: [
    AppComponent
    //HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    HttpModule,
    ReportModule,
    //Ng2GoogleChartsModule,
    DrainListModule,
    DirtyDrainModule,
    CleanDrainModule,
    HelpDrainModule,
    ReactiveFormsModule,
    FormsModule,
    HeaderModule,
    SharedModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    DrainsUrlService,
    SessionService,
    UsersUrlService,
    TRANSLATION_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
