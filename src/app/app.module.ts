import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule} from './app-routing.module';
import { HomeModule} from './home/home.module';
import { AppComponent } from './app.component';
import { DesignerModule } from './components/designer/designer.module';
import { SheSayModule } from './components/she-say/she-say.module';
import { ShopHomeModule} from './components/shop-home/shop-home.module';
// import { ShopHomeComponent } from './components/shop-home/shop-home/shop-home.component';
import { MyInfoModule } from './components/my-info/my-info.module';
import { LoginInputModule } from './components/login-input/login-input.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { SwiperModule } from 'angular2-useful-swiper';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // SwiperModule,
    NgZorroAntdModule.forRoot(),
    AppRoutingModule,
    DesignerModule,
    SheSayModule,
    ShopHomeModule,
    MyInfoModule,
    LoginInputModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
