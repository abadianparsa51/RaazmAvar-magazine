import { PopularCardComponent } from './popular-card/popular-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PopularCardComponent],
  exports: [PopularCardComponent],
  imports: [CommonModule, RouterModule]
})
export class PopularCardModule {}
