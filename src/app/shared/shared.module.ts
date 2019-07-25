import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequiresAuthDirective } from './directives/requires-auth.directive';
import { PagerComponent } from './components/pager/pager.component';

@NgModule({
  declarations: [
    RequiresAuthDirective,
    PagerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RequiresAuthDirective,
    PagerComponent
  ]
})
export class SharedModule { }
