import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { SwiperModule } from 'angular2-useful-swiper';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    SwiperModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    NgZorroAntdModule,
    SwiperModule
  ],
  declarations: [FooterComponent]
})
export class ShareModule { }
