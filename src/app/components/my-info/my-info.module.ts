import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from 'app/share/share.module';
import { MyInfoComponent } from './my-info/my-info.component';

@NgModule({
  imports: [
    CommonModule,
    ShareModule
  ],
  declarations: [MyInfoComponent]
})
export class MyInfoModule { }
