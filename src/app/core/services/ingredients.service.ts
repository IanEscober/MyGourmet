import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IIngredientItem } from '../models/ingredient-item.model';
import { RepositoryService } from './repository.service';
import { map } from 'rxjs/operators';

@Injectable()
export class IngredientsService {
  private ingredientsUrl: string = 'api/ingredients';

  constructor(private repository: RepositoryService) { }

  getIngredients(index: number, take: number): Observable<{ items: IIngredientItem[], count: number }> {
    return this.repository.get<IIngredientItem[]>(this.ingredientsUrl)
      .pipe(
        map(item => {
          const count = item.length;
          const start = (index - 1) * take;
          const end = start + take;
          return { items: item.slice(start, end), count };
        })
      );
  }

  getIngredient(id: number): Observable<IIngredientItem> {
    return this.repository.get<IIngredientItem>(`${this.ingredientsUrl}/${id}`);
  }
}
