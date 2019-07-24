import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockApiService }  from './services/mockApi.service';
import { UserService } from './services/user.service';
import { RepositoryService } from './services/repository.service';
import { AuthGuard } from './services/auth.guard';
import { MenusService } from './services/menus.service';
import { IngredientsService } from './services/ingredients.service';


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
    RepositoryService
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
        UserService,
        RepositoryService,
        AuthGuard,
        MenusService,
        IngredientsService
      ]
    };
  }
}
