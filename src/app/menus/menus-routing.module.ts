import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenusComponent } from './menus.component';
import { MenusDetailComponent } from './menus-detail/menus-detail.component';
import { MenusDetailResolver } from './menus-detail.resolver';

const routes: Routes = [
  {
    path: '',
    component: MenusComponent,
  },
  {
    path: ':id',
    component: MenusDetailComponent,
    resolve: {
      menu: MenusDetailResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenusRoutingModule {}