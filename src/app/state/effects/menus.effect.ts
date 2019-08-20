import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MenusService } from 'src/app/core/services/menus.service';
import * as MenusActions from '../actions/menus.action';
import { concatMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class MenusEffect {
    constructor(
        private actions$: Actions,
        private menusService: MenusService
    ) { }

    loadMenus = createEffect(() =>
        this.actions$.pipe(
            ofType(MenusActions.loadMenus),
            concatMap(({ index, take }) =>
                this.menusService.getMenus(index, take).pipe(
                    map(data => MenusActions.loadMenusSuccess({ data })),
                    catchError(error => of(MenusActions.loadMenusFail(error)))
                )
            )
        )
    );
}
