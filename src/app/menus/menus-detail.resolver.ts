import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { MenuFacade } from '../state';

@Injectable()
export class MenusDetailResolver implements Resolve<any>  {
  constructor(
    private menuFacade: MenuFacade
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    return this.menuFacade.loadMenu(route.params.id);
  }
}
