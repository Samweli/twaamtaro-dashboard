import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, } from '@angular/forms';

import { FilterDrainsComponent } from './filter-drains.component';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule],
    exports: [
            FormControl,
            FormGroup
            ],
    declarations: [FilterDrainsComponent],
    providers: [],
})
export class FilterDrainsModule {}