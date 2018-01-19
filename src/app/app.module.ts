import { AdminModule } from './shared/admin/admin.module';
import { CleanDrainModule } from './shared/drains/clean-drain/clean-drain.module';
import { DrainListModule } from './shared/drains/all-drains/all-drains.module';
import { HelpDrainModule } from "./shared/drains/help-drain/help-drain.module";
import { HeaderModule } from './shared/header/header.module';
import { DirtyDrainModule } from './shared/drains/dirty-drain/dirty-drain.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ReportModule } from './shared/reports/reports.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from "./shared/shared.module";

import { AppComponent } from './app.component';
import { AuthGuard } from "./core/auth.guard";
import { AuthService } from "./core/auth.service";
import { DrainsUrlService } from "./core/drains-url.service";
import { FormErrorsService } from "./core/form-errors.service";
import { NgProgressModule } from 'ngx-progressbar';
import { SessionService } from "./core/session.service";
import { SmsService } from "./core/sms.service";
import { StreetsUrlService } from "./core/streets-url.service";
import { TRANSLATION_PROVIDERS } from "./translate/translation/translation.component";
import { UsersUrlService } from "./core/users-url.service";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    HttpModule,
    ReportModule,
    DrainListModule,
    DirtyDrainModule,
    CleanDrainModule,
    NgProgressModule,
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
    FormErrorsService,
    SessionService,
    SmsService,
    StreetsUrlService,
    TRANSLATION_PROVIDERS,
    UsersUrlService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
