export interface IMenuItem {
    id: number,
    name: string,
    description: string,
    procedures: string[],
    ingredientItems: number[],
    price: number,
    stock: number
}