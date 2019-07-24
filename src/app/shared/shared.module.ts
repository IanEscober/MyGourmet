import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequiresAuthDirective } from './directives/requires-auth.directive';

@NgModule({
  declarations: [
    RequiresAuthDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RequiresAuthDirective
  ]
})
export class SharedModule { }
