import { ProductInterface } from "./product.interface";
import { PizzaInterface } from "./pizza.interface";

export interface CartPositionInterface {
  product: ProductInterface | PizzaInterface
  quantity: number
}