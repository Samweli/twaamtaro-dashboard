import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationBarComponent } from './notification-bar.component';
import { Directive } from '@angular/core';
/*import { CleanDrainComponent } from './../drains/clean-drain.component';
import { HelpDrainComponent } from './../drains/help-drain.component';
import { DirtyDrainComponent } from './../drains/dirty-drain.component';
import { DrainListComponent } from './../drains/drain-list.component';
import { UsersComponent } from './../users/users-list/users.component';


import { CleanDrainModule } from './../drains/clean-drain.module';
import { DirtyDrainModule } from './../drains/dirty-drain.module';
import { HelpDrainModule } from './../drains/help-drain.module';
import { DrainListModule } from './../drains/drains.module';
import { UserModule } from "./../users/users-list/users.module";

import { DrainsService } from './../drains/drains.service';
import { UserService } from './../users/user.service';
*/


@NgModule({
  imports: [
    CommonModule,
    /*DrainListModule,
    DirtyDrainModule,
    CleanDrainModule,
    HelpDrainModule,
    UserModule,*/
  ],
  declarations: [
    /*DrainListComponent,
    CleanDrainComponent,
    DirtyDrainComponent,
    HelpDrainComponent,
    UsersComponent,*/
  ],
  exports: [NotificationBarComponent],
  providers: [
    /*DrainsService,
    UserService,*/
  ],
})
export class NotificationBarModule { }
