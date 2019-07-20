import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockApiService }  from './services/mockApi.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      MockApiService, { dataEncapsulation: false }
    )
  ],
  exports: [
    CommonModule,
    HttpClientModule
  ]
})
export class CoreModule { }
