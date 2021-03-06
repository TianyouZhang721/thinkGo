import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from 'app/share/share.module';
import { DesignerListComponent } from './designer-list/designer-list.component';
import { DesignersComponent } from './designers/designers.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    RouterModule
  ],
  declarations: [DesignerListComponent, DesignersComponent]
})
export class DesignerModule { }
