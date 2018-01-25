import { NgModule } from '@angular/core';
import { ShareModule } from 'app/share/share.module';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
// import { LoginInputComponent } from './login-input/login-input.component';
import { RouterModule } from '@angular/router';
import { HomePicComponent } from './home-pic/home-pic.component';



@NgModule({
  imports: [
    CommonModule,ShareModule,RouterModule,
  ],
  declarations: [HomeComponent, LoginComponent, NavigationComponent, HomePicComponent]
})
export class HomeModule { }
