import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IIngredientItem } from '../core/models/ingredientItem.model';
import { RepositoryService } from '../core/services/repository.service';

@Injectable()
export class IngredientsService {
  private ingredientsUrl: string = 'api/ingredients';

  constructor(private repository: RepositoryService) { }

  getIngredients(): Observable<IIngredientItem[]> {
    return this.repository.get<IIngredientItem[]>(this.ingredientsUrl);
  }

  getIngredient(id: number): Observable<IIngredientItem> {
    return this.repository.get<IIngredientItem>(`${this.ingredientsUrl}/${id}`);
  }
}
