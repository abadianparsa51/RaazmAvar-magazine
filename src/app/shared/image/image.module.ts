import { ImageComponent } from './image.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ImageComponent],
  exports: [ImageComponent],
  imports: [CommonModule]
})
export class ImageModule {}
