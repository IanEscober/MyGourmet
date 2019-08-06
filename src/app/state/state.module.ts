import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { cartInitialState, cartReducer } from './reducers/cart.reducer';
import { CartEffect } from './effects/cart.effect';
import { CartFacade } from './facades/cart.facade';

@NgModule({
    imports: [
      StoreModule.forFeature('cart', cartReducer, { initialState: cartInitialState }),
      EffectsModule.forFeature([CartEffect])
    ]
  })
  export class StateModule {
    constructor(@Optional() @SkipSelf() parentModule: StateModule) {
        if(parentModule) {
          throw new Error('Import State Module in the App Module only');
        }
      }
      
      static forRoot(): ModuleWithProviders {
        return {
          ngModule: StateModule,
          providers: [
            CartEffect,
            CartFacade
          ]
        };
      }
  }