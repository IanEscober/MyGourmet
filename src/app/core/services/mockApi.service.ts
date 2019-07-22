import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IMenuItem } from '../models/menuItem.model';
import { IIngredientItem } from '../models/ingredientItem.model';
import { IUser } from '../models/user.model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class MockApiService implements InMemoryDbService {
    createDb() {
        const ingredients: IIngredientItem[] = [
            { id: 1, name: 'Salt', description: 'Proin vel lectus id enim porta tristique.', price: 1, stock: 1 },
            { id: 2, name: 'Pepper', description: 'Praesent tincidunt diam a ligula venenatis, non facilisis magna gravida.', price: 2, stock: 2 },
            { id: 3, name: 'Sugar', description: 'Nam auctor tellus vestibulum bibendum malesuada.', price: 3, stock: 3 },
            { id: 4, name: 'Vinegar', description: 'Morbi blandit ipsum ut sodales luctus.', price: 4, stock: 4 },
            { id: 5, name: 'Honey', description: 'In at nibh at purus vestibulum aliquet.', price: 5, stock: 5 },
            { id: 6, name: 'Rice', description: 'Curabitur molestie nisi vel ligula sagittis interdum.', price: 6, stock: 6 },
            { id: 7, name: 'Meat', description: 'Aliquam ultricies ante in dapibus suscipit.', price: 7, stock: 7 },
            { id: 8, name: 'Chicken', description: 'Praesent id mi vel lorem aliquam blandit.', price: 8, stock: 8 },
            { id: 9, name: 'Fish', description: 'Duis euismod purus malesuada tellus volutpat interdum.', price: 9, stock: 9 },
            { id: 10, name: 'Vegetables', description: 'Vivamus ut purus eu dolor pharetra pharetra at nec nisl.', price: 10, stock: 10 }
        ];

        const menus: IMenuItem[] = [
            { id: 1, name: 'Salad', description: 'Vestibulum interdum sapien quis iaculis sagittis.', procedures: ['Put Vegetables', 'Mix', 'Done'], ingredientIds: [1, 2, 10], ingredientNames: ['Salt', 'Pepper', 'Vegetables'], price: 1, stock: 1 },
            { id: 2, name: 'Barbeque', description: 'Nullam laoreet neque at pharetra maximus.', procedures: ['Put Meat', 'Grill', 'Done'], ingredientIds: [1, 2, 7], ingredientNames: ['Salt', 'Pepper', 'Meat'], price: 2, stock: 2 },
            { id: 3, name: 'Sushi', description: 'Suspendisse tempor mauris nec turpis maximus, in placerat erat mattis.', procedures: ['Put Vegetables', 'Simmer', 'Done'], ingredientIds: [1, 2, 9], ingredientNames: ['Salt', 'Pepper', 'Fish'], price: 3, stock: 3 },
        ];

        const users: IUser[] = [
            { id: 1, username: 'admin', password: 'admin' }
        ];
        return { ingredients, menus, users };
    }
}