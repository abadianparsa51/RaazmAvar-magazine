import { CarouselModule } from 'ngx-owl-carousel-o';
import { SliderComponent } from './slider/slider.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SliderComponent],
  exports: [SliderComponent],
  imports: [
    CommonModule,
    CarouselModule
  ]
})
export class SliderModule { }
