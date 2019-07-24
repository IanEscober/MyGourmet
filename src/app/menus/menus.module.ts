import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenusComponent } from './menus.component';
import { MenusDetailComponent } from './menus-detail/menus-detail.component';
import { MenusDetailResolver } from './menus-detail.resolver';
import { MenusRoutingModule } from './menus-routing.module';

@NgModule({
  declarations: [
    MenusComponent, 
    MenusDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MenusRoutingModule
  ],
  providers: [
    MenusDetailResolver
  ]
})
export class MenusModule { }
