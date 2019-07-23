import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockApiService }  from './services/mockApi.service';
import { UserService } from './services/user.service';
import { RepositoryService } from './services/repository.service';
import { AuthGuard } from './services/auth-guard.service';


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
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        UserService,
        RepositoryService,
        AuthGuard
      ]
    };
  }
}
