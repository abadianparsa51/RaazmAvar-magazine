import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './buttons.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [ButtonsComponent],
    exports: [ButtonsComponent]
})
export class ButtonsModule { }
