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
