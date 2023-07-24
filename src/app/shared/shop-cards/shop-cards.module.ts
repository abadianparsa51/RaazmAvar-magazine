import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShopCardsComponent } from './shop-cards.component';
@NgModule({
  declarations: [ShopCardsComponent],
  exports: [ShopCardsComponent],
  imports: [CommonModule, RouterModule]
})
export class ShopCardsModule { }
