import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from 'app/share/share.module';
import { SheSayListComponent } from './she-say-list/she-say-list.component';

@NgModule({
  imports: [
    CommonModule,
    ShareModule
  ],
  declarations: [SheSayListComponent]
})
export class SheSayModule { }
