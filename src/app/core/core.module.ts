import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockApiService }  from './services/mockApi.service';
import { AuthService } from './services/auth.service';
import { RepositoryService } from './services/repository.service';
import { MenusService } from './services/menus.service';
import { IngredientsService } from './services/ingredients.service';
import { AuthPreloadingStrategyService } from './services/auth-preloading-strategy.service';
import { AuthGuard } from './services/auth.guard';
import { CartService } from './services/cart.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      MockApiService, { dataEncapsulation: false }
    )
  ],
  providers: [
    RepositoryService,
    AuthService
  ]
})
export class CoreModule { 
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if(parentModule) {
      throw new Error('Import Core Module in the App Module only');
    }
  }
  
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        AuthService,
        RepositoryService,
        MenusService,
        IngredientsService,
        CartService,
        AuthGuard,
        AuthPreloadingStrategyService
      ]
    };
  }
}
