import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortenPipe } from '../pipe/shorten.pipe';
import { SafeHtmlPipe } from '../pipe/safehtml.pipe';

@NgModule({
  declarations: [ShortenPipe, SafeHtmlPipe],
  exports: [ShortenPipe, SafeHtmlPipe],
  imports: [CommonModule]
})
export class SharedModule {}
