import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const url = route.url;
    const authType = url[url.length - 1].path
    const overrideRoutes = authType === 'login' || authType === 'register';

    return this.userService.isAuthenticated
      .pipe(
        map(result => {
          if (result && overrideRoutes) {
            return false;
          } else if (!result && overrideRoutes) {
            return true;
          } else {
            return result;
          }
        })
      );
  }
}