import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as MenuActions from '../actions/menu.action';
import { MenuState } from '../reducers';
import { menuQuery } from '../selectors';

@Injectable()
export class MenuFacade {
    menu$ = this.store.select(menuQuery.getMenuData);
    isLoading$ = this.store.select(menuQuery.getMenuLoading);

    constructor(private store: Store<MenuState>) { }

    loadMenu(id: number) {
        this.store.dispatch(MenuActions.loadMenu({ id }));
    }
}
