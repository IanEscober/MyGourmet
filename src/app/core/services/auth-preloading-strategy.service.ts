import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthPreloadingStrategyService implements PreloadingStrategy {
  private isAuthenticated: boolean;
  private readonly authRoutes = ['profile', 'basket'];
  private readonly baseRoutes = ['menus', 'ingredients'];

  constructor(private authService: AuthService) { 
    this.authService.isAuthenticated
      .subscribe(result => this.isAuthenticated = result);
  }

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    const url = route.path;
    const isAuthRoute = this.authRoutes.some(route => url === route);
    const isBaseRoute = this.baseRoutes.some(route => url === route);

    if(isBaseRoute) {
      return load();
    } else {
      if(this.isAuthenticated && isAuthRoute) {
        return load();
      } else {
        return of(null);
      }
    }
  }
}
