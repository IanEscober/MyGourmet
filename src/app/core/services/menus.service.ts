import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IMenuItem } from '../models/menu-item.model';
import { RepositoryService } from './repository.service';

@Injectable()
export class MenusService {
  private menusUrl: string = 'api/menus';
  
  constructor(private repository: RepositoryService) { }

  getMenus(index: number, take: number): Observable<{ items: IMenuItem[], count: number }> {
    return this.repository.get<IMenuItem[]>(this.menusUrl)
      .pipe(
        map(item => {
          const count = item.length;
          const start = (index - 1) * take;
          const end = start + take;
          return { items: item.slice(start, end), count };
        })
      );
  }

  getMenu(id: number): Observable<IMenuItem> {
    return this.repository.get<IMenuItem>(`${this.menusUrl}/${id}`);
  }
}
