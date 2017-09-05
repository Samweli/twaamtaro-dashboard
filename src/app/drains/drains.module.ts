import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { DrainListComponent } from './drain-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    exports: [DrainListComponent],
    declarations: [DrainListComponent],
    providers: [],
	schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class DrainListModule {
}