import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { IMenuItem } from '../core/models/menuItem.model';
import { MenusService } from '../core/services/menus.service';

@Injectable()
export class MenusDetailResolver implements Resolve<IMenuItem>  {
  constructor(
    private menusService: MenusService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IMenuItem> {
    return this.menusService.getMenu(route.params['id']);
  }
}
