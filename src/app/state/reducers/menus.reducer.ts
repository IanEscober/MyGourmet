import { Action, createReducer, on } from '@ngrx/store';
import * as MenusActions from '../actions/menus.action';
import { IMenuItem } from '../../core/models/menu-item.model';

export interface Menus {
    data: { items: IMenuItem[], count: number };
    loading: boolean;
}

export interface MenusState {
    readonly menus: Menus;
}

export const menusInitialState: Menus = {
    data: {} as { items: IMenuItem[], count: number },
    loading: false
};

const reducer = createReducer(
    menusInitialState,
    on(
        MenusActions.loadMenus,
        state => ({
            ...state,
            loading: true
        })
    ),
    on(
        MenusActions.loadMenusSuccess,
        (state, action) => ({
            ...state,
            data: action.data,
            loading: false
        })
    ),
    on(
        MenusActions.loadMenusFail,
        state => ({
            ...state,
            data: menusInitialState.data,
            loading: false
        })
    ),
);

export function menusReducer(
    state: Menus | undefined,
    action: Action
): Menus {
    return reducer(state, action);
}
