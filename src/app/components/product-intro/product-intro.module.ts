import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from 'app/share/share.module';
import { ProductIntroComponent } from './product-intro.component';

@NgModule({
  imports: [
    CommonModule,
    ShareModule
  ],
  declarations: [ProductIntroComponent]
})
export class ProductIntroModule { }
