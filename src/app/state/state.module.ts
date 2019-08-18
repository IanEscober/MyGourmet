import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { cartInitialState, cartReducer } from './reducers/cart.reducer';
import { ingredientsInitialState, ingredientsReducer } from './reducers/ingredients.reducer';
import { CartEffect } from './effects/cart.effect';
import { IngredientsEffect } from './effects/ingredients.effect';
import { CartFacade } from './facades/cart.facade';
import { IngredientsFacade } from './facades/ingredients.facade';

@NgModule({
  imports: [
    StoreModule.forFeature('cart', cartReducer, { initialState: cartInitialState }),
    StoreModule.forFeature('ingredients', ingredientsReducer, { initialState: ingredientsInitialState }),
    EffectsModule.forFeature([CartEffect]),
    EffectsModule.forFeature([IngredientsEffect])
  ]
})
export class StateModule {
  constructor(@Optional() @SkipSelf() parentModule: StateModule) {
    if (parentModule) {
      throw new Error('Import State Module in the App Module only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: StateModule,
      providers: [
        CartEffect,
        IngredientsEffect,
        CartFacade,
        IngredientsFacade
      ]
    };
  }
}
