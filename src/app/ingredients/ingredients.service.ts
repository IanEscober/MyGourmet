import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IIngredientItem } from '../core/models/IngredientItem.model';

@Injectable()
export class IngredientsService {
  private ingredientsUrl: string = 'api/ingredients';

  constructor(private http: HttpClient) { }

  getIngredients(): Observable<IIngredientItem[]> {
    return this.http.get<IIngredientItem[]>(this.ingredientsUrl);
  }

  getIngredient(id: number): Observable<IIngredientItem> {
    return this.http.get<IIngredientItem>(`${this.ingredientsUrl}/${id}`);
  }
}
