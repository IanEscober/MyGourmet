import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { cartInitialState, cartReducer } from './reducers/cart.reducer';
import { ingredientsInitialState, ingredientsReducer } from './reducers/ingredients.reducer';
import { ingredientInitialState, ingredientReducer } from './reducers/ingredient.reducer';
import { CartEffect } from './effects/cart.effect';
import { IngredientsEffect } from './effects/ingredients.effect';
import { IngredientEffect } from './effects/ingredient.effect';
import { CartFacade } from './facades/cart.facade';
import { IngredientsFacade } from './facades/ingredients.facade';
import { IngredientFacade } from './facades/ingredient.facade';

@NgModule({
  imports: [
    StoreModule.forFeature('cart', cartReducer, { initialState: cartInitialState }),
    StoreModule.forFeature('ingredients', ingredientsReducer, { initialState: ingredientsInitialState }),
    StoreModule.forFeature('ingredient', ingredientReducer, { initialState: ingredientInitialState }),
    EffectsModule.forFeature([CartEffect]),
    EffectsModule.forFeature([IngredientsEffect]),
    EffectsModule.forFeature([IngredientEffect])
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
        IngredientEffect,
        CartFacade,
        IngredientsFacade,
        IngredientFacade
      ]
    };
  }
}
