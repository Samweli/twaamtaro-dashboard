import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationBarComponent } from './notification-bar.component';
import { Directive } from '@angular/core';

@NgModule({
  imports: [ CommonModule,],
  declarations: [],
  exports: [NotificationBarComponent],
  providers: [ ],
})
export class NotificationBarModule { }
