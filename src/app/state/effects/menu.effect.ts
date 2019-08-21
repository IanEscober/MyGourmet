import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MenusService } from 'src/app/core/services/menus.service';
import * as MenuActions from '../actions/menu.action';
import { concatMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class MenuEffect {
    constructor(
        private actions$: Actions,
        private menusService: MenusService
    ) { }

    loadMenu = createEffect(() =>
        this.actions$.pipe(
            ofType(MenuActions.loadMenu),
            concatMap(({ id }) =>
                this.menusService.getMenu(id).pipe(
                    map(menu => MenuActions.loadMenuSuccess({ menu })),
                    catchError(error => of(MenuActions.loadMenuFail(error)))
                )
            )
        )
    );
}
