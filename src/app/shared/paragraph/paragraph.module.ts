import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParagraphComponent } from './paragraph.component';

@NgModule({
  declarations: [ParagraphComponent],
  exports: [ParagraphComponent],
  imports: [CommonModule]
})
export class ParagraphModule {}
