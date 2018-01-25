import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { SwiperModule } from 'angular2-useful-swiper';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    SwiperModule
  ],
  exports: [
    FooterComponent,
    NgZorroAntdModule,
    SwiperModule
  ],
  declarations: [FooterComponent]
})
export class ShareModule { }
