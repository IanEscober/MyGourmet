import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { MenusModule } from './menus/menus.module';
import { IngredientsModule } from './ingredients/ingredients.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MenusModule,
    IngredientsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
