import { NgModule } from '@angular/core';
import { UsersComponent } from './users.component';
import { CommonModule } from '@angular/common';
import { UserDetailComponent } from './../user-detail/user-detail.component';
import { StreetVEOPipe, UserStreetPipe } from "./../../../core/user.pipe";

@NgModule({
    imports: [CommonModule],
    exports: [],
    declarations: [],
    providers: [],
	schemas: []
})
export class UserModule {
}