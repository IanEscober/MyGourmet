import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IMenuItem } from '../core/models/menuItem.model';
import { RepositoryService } from '../core/services/repository.service';

@Injectable()
export class MenusService {
  private menusUrl: string = 'api/menus';
  
  constructor(private repository: RepositoryService) { }

  getMenus(): Observable<IMenuItem[]> {
    return this.repository.get<IMenuItem[]>(this.menusUrl);
  }

  getMenu(id: number): Observable<IMenuItem> {
    return this.repository.get<IMenuItem>(`${this.menusUrl}/${id}`);
  }
}
