import { RouterModule } from '@angular/router';
import { VideoCardComponent } from './video-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [VideoCardComponent],
  exports: [VideoCardComponent],
  imports: [CommonModule, RouterModule]
})
export class VideoCardModule {}
