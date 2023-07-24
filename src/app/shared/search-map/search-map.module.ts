import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchMapComponent } from './search-map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [SearchMapComponent],
  exports: [SearchMapComponent],
  imports: [CommonModule, LeafletModule]
})
export class SearchMapModule {}
