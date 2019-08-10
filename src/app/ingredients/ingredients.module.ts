import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IngredientsComponent } from './ingredients.component';
import { IngredientsDetailComponent } from './ingredients-detail/ingredients-detail.component';
import { IngredientsDetailResolver } from './ingredients-detail.resolver';
import { IngredientsRoutingModule } from './ingredients-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    IngredientsComponent,
    IngredientsDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    IngredientsRoutingModule,
    SharedModule
  ],
  providers: [
    IngredientsDetailResolver
  ]
})
export class IngredientsModule { }
