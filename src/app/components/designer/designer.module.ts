import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from 'app/share/share.module';
import { DesignerListComponent } from './designer-list/designer-list.component';

@NgModule({
  imports: [
    CommonModule,
    ShareModule
  ],
  declarations: [DesignerListComponent]
})
export class DesignerModule { }
