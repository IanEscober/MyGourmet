import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import {
  cartInitialState, cartReducer,
  ingredientsInitialState, ingredientsReducer,
  ingredientInitialState, ingredientReducer,
  menusInitialState, menusReducer,
  menuInitialState, menuReducer
} from './reducers';
import {
  CartEffect,
  IngredientsEffect,
  IngredientEffect,
  MenusEffect,
  MenuEffect
} from './effects';
import {
  CartFacade,
  IngredientsFacade,
  IngredientFacade,
  MenusFacade,
  MenuFacade
} from './facades';

@NgModule({
  imports: [
    StoreModule.forFeature('cart', cartReducer, { initialState: cartInitialState }),
    StoreModule.forFeature('ingredients', ingredientsReducer, { initialState: ingredientsInitialState }),
    StoreModule.forFeature('ingredient', ingredientReducer, { initialState: ingredientInitialState }),
    StoreModule.forFeature('menus', menusReducer, { initialState: menusInitialState }),
    StoreModule.forFeature('menu', menuReducer, { initialState: menuInitialState }),
    EffectsModule.forFeature([CartEffect]),
    EffectsModule.forFeature([IngredientsEffect]),
    EffectsModule.forFeature([IngredientEffect]),
    EffectsModule.forFeature([MenusEffect]),
    EffectsModule.forFeature([MenuEffect])
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
        CartFacade,
        IngredientsFacade,
        IngredientFacade,
        MenusFacade,
        MenuFacade
      ]
    };
  }
}
