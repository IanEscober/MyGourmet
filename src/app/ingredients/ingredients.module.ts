import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngredientsService } from './ingredients.service';
import { IngredientsComponent } from './ingredients.component';


@NgModule({
  declarations: [IngredientsComponent],
  imports: [
    CommonModule
  ],
  providers: [
    IngredientsService
  ]
})
export class IngredientsModule { }
