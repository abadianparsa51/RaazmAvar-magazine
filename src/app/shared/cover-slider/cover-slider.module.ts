import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoverSliderComponent } from './cover-slider.component';

@NgModule({
  declarations: [CoverSliderComponent],
  exports: [CoverSliderComponent],
  imports: [CommonModule]
})
export class CoverSliderModule {}
