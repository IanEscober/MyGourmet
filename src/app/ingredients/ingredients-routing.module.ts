import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngredientsComponent } from './ingredients.component';
import { IngredientsDetailComponent } from './ingredients-detail/ingredients-detail.component';
import { IngredientsDetailResolver } from './ingredients-detail.resolver';

const routes: Routes = [
  {
    path: '',
    component: IngredientsComponent
  },
  {
    path: ':id',
    component: IngredientsDetailComponent,
    resolve: {
      ingredient: IngredientsDetailResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngredientsRoutingModule {}