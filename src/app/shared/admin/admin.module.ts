import { AdminComponent } from "./admin.component";
import { Directive } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import { DrainsService } from './../../core/drains.service';
import { UserService } from './../../core/user.service';
import {TranslateService} from "../../translate/translate.service";
import {TRANSLATION_PROVIDERS} from "../../translate/translation/translation.component";




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
    TRANSLATION_PROVIDERS,
    TranslateService,
    ReactiveFormsModule,
  ],
})
export class AdminModule {

}
