import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenusComponent } from './menus/menus.component';
import { MenusDetailComponent } from './menus/menus-detail/menus-detail.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { IngredientsDetailComponent } from './ingredients/ingredients-detail/ingredients-detail.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: 'menus', component: MenusComponent },
  { path: 'menus/:id', component: MenusDetailComponent },
  { path: 'ingredients', component: IngredientsComponent },
  { path: 'ingredients/:id', component: IngredientsDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
