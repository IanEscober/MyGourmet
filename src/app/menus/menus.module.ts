import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenusService } from './menus.service';
import { MenusComponent } from './menus.component';
import { MenusDetailComponent } from './menus-detail/menus-detail.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [MenusComponent, MenusDetailComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    MenusService
  ]
})
export class MenusModule { }
