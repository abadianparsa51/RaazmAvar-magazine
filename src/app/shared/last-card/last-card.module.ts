import { RouterModule } from '@angular/router';
import { LastCardComponent } from './last-card.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [LastCardComponent],
  exports: [LastCardComponent],
  imports: [CommonModule, RouterModule, SharedModule]
})
export class LastCardModule {}
