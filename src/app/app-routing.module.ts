import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthPreloadingStrategyService } from './core/services/auth-preloading-strategy.service';

const routes: Routes = [
  {
    path: 'menus',
    loadChildren: () => import('./menus/menus.module').then(mod => mod.MenusModule),
    data: { preloadOnlyOnAuth: false }
  },
  {
    path: 'ingredients',
    loadChildren: () => import('./ingredients/ingredients.module').then(mod => mod.IngredientsModule),
    data: { preloadOnlyOnAuth: false }
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(mod => mod.ProfileModule),
    data: { preloadOnlyOnAuth: true }
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then(mod => mod.CartModule),
    data: { preloadOnlyOnAuth: true }
  },
  { path: '', redirectTo: '', pathMatch: 'full' }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      preloadingStrategy: AuthPreloadingStrategyService
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
