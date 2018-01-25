import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from 'app/share/share.module';
import { LoginInputComponent } from './login-input/login-input.component';

@NgModule({
  imports: [
    CommonModule,
    ShareModule
  ],
  declarations: [LoginInputComponent]
})
export class LoginInputModule { }
