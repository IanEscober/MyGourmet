import { createAction, props } from '@ngrx/store';
import { IMenuItem } from '../../core/models/menu-item.model';

export const loadMenu = createAction(
    '[menu] LOAD_MENU',
    props<{ id: number }>()
);

export const loadMenuSuccess = createAction(
    '[menu] LOAD_MENU_SUCCESS',
    props<{ menu: IMenuItem }>()
);

export const loadMenuFail = createAction(
    '[menu] LOAD_MENU_FAIL',
    props<{ error: Error }>()
);
