import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
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

    return this.userService.isAuthenticated
      .pipe(
        map(result => {
          if (result && authType === 'login' || authType === 'register') {
            return false;
          } else if (!result && authType === 'login' || authType === 'register') {
            return true;
          } else {
            return result;
          }
        })
      );
  }
}