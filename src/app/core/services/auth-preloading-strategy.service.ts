import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthPreloadingStrategyService implements PreloadingStrategy {
  private isAuthenticated: boolean;

  constructor(private authService: AuthService) {
    this.authService.isAuthenticated
      .subscribe(result => this.isAuthenticated = result);
  }

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    const { data } = route;

    if (data) {
      if (data.hasOwnProperty('preloadOnlyOnAuth')) {
        const { preloadOnlyOnAuth } = data;

        if (preloadOnlyOnAuth && this.isAuthenticated) {
          return load();
        } else if (!preloadOnlyOnAuth && !this.isAuthenticated) {
          return load();
        }
      }
    }

    return of(null);
  }
}
