import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from 'app/share/share.module';
import { ShopHomeComponent } from './shop-home/shop-home.component';
import { ShopHomeListComponent } from './shop-home-list/shop-home-list.component';

@NgModule({
  imports: [
    CommonModule,
    ShareModule
  ],
  declarations: [ShopHomeComponent, ShopHomeListComponent]
})
export class ShopHomeModule { }
