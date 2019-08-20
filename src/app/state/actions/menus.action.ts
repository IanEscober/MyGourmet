import { createAction, props } from '@ngrx/store';
import { IMenuItem } from '../../core/models/menu-item.model';

export const loadMenus = createAction(
    '[menus] LOAD_MENUS',
    props<{ index: number, take: number }>()
);

export const loadMenusSuccess = createAction(
    '[menus] LOAD_MENUS_SUCCESS',
    props<{ data: { items: IMenuItem[], count: number } }>()
);

export const loadMenusFail = createAction(
    '[menus] LOAD_MENUS_FAIL',
    props<{ error: Error }>()
);
