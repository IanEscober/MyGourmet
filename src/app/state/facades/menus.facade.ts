import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as MenusActions from '../actions/menus.action';
import { MenusState } from '../reducers';
import { menusQuery } from '../selectors';

@Injectable()
export class MenusFacade {
    menus$ = this.store.select(menusQuery.getMenusData);
    isLoading$ = this.store.select(menusQuery.getMenusLoading);

    constructor(private store: Store<MenusState>) { }

    loadMenus(index: number, take: number) {
        this.store.dispatch(MenusActions.loadMenus({ index, take }));
    }
}
