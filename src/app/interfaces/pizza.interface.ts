import { ProductInterface } from "./product.interface";
import { IngredientInterface } from "./ingredient.interface";

export interface PizzaInterface extends ProductInterface {
  ingredients: IngredientInterface[]
}