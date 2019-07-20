import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenusService } from './menus.service';
import { MenusComponent } from './menus.component';


@NgModule({
  declarations: [MenusComponent],
  imports: [
    CommonModule
  ],
  providers: [
    MenusService
  ]
})
export class MenusModule { }
