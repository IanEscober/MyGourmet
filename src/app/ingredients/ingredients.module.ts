import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngredientsService } from './ingredients.service';
import { IngredientsComponent } from './ingredients.component';
import { IngredientsDetailComponent } from './ingredients-detail/ingredients-detail.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [IngredientsComponent, IngredientsDetailComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    IngredientsService
  ]
})
export class IngredientsModule { }
