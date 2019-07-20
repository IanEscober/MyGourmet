import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IMenuItem } from '../shared/models/MenuItem.model';

@Injectable()
export class MenusService {
  private menusUrl: string = 'api/menus';
  
  constructor(private http: HttpClient) { }

  getMenus(): Observable<IMenuItem[]> {
    return this.http.get<IMenuItem[]>(this.menusUrl);
  }

  getMenu(id: number): Observable<IMenuItem> {
    return this.http.get<IMenuItem>(`${this.menusUrl}/${id}`);
  }
}
