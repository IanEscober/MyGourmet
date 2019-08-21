import { Action, createReducer, on } from '@ngrx/store';
import * as MenuActions from '../actions/menu.action';
import { IMenuItem } from '../../core/models/menu-item.model';

export interface Menu {
    data: IMenuItem;
    loading: boolean;
}

export interface MenuState {
    readonly menu: Menu;
}

export const menuInitialState: Menu = {
    data: {} as IMenuItem,
    loading: false
};

const reducer = createReducer(
    menuInitialState,
    on(
        MenuActions.loadMenu,
        state => ({
            ...state,
            loading: true
        })
    ),
    on(
        MenuActions.loadMenuSuccess,
        (state, action) => ({
            ...state,
            data: action.menu,
            loading: false
        })
    ),
    on(
        MenuActions.loadMenuFail,
        state => ({
            ...state,
            data: menuInitialState.data,
            loading: false
        })
    ),
);

export function menuReducer(
    state: Menu | undefined,
    action: Action
): Menu {
    return reducer(state, action);
}
