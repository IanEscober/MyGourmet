import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { MenusModule } from './menus/menus.module';
import { IngredientsModule } from './ingredients/ingredients.module';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    AuthModule,
    MenusModule,
    IngredientsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
