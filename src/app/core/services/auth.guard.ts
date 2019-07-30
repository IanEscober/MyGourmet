import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const url = route.url;
    const urlType = url.length ? url[url.length - 1].path : state.url.substring(1);
    const overrideRoutes = urlType === 'login' || urlType === 'register';

    return this.authService.isAuthenticated
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