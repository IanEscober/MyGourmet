export interface IMenuItem {
    id: number;
    name: string;
    description: string;
    procedures: string[];
    ingredientIds: number[];
    ingredientNames: string[];
    price: number;
    stock: number;
}
