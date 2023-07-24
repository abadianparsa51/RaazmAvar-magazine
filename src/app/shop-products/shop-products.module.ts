import { SearchMapModule } from './../shared/search-map/search-map.module';
import { SliderModule } from './../shared/slider/slider.module';
import { PopularCardModule } from './../shared/popular-card/popular-card.module';
import { ShopCardsModule } from './../shared/shop-cards/shop-cards.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ButtonsModule } from './../shared/buttons/buttons.module';
import { SearchModule } from '../shared/search/search.module';
import { CategoryCardModule } from '../shared/category-card/category-card.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ShopProductsPage } from './shop-products.page';

const routes: Routes = [
  {
    path: '',
    component: ShopProductsPage
  }
];

@NgModule({
  imports: [
    ButtonsModule,
    // ButtonModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ShopCardsModule,
    // PopularCardModule,
    SearchModule,
    SearchMapModule,
    SliderModule,
    CategoryCardModule,
    Ng2SearchPipeModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShopProductsPage]
})
export class ShopProductsPageModule { }
