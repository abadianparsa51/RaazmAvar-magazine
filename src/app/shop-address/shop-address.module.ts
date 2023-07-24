import { PopularCardModule } from './../shared/popular-card/popular-card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ButtonsModule } from './../shared/buttons/buttons.module'
import { IonicModule } from '@ionic/angular';
import { ShopAddressPage } from './shop-address.page';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { SearchModule } from '../shared/search/search.module';
import { CoverSliderModule } from '../shared/cover-slider/cover-slider.module';


const routes: Routes = [
  {
    path: '',
    component: ShopAddressPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PopularCardModule,
    LeafletModule,
    SearchModule,
    CoverSliderModule,
    IonicModule,
    ButtonsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShopAddressPage,]
})
export class ShopAddressPageModule { }