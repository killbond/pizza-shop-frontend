import { ProductInterface } from "./product.interface";
import { PizzaInterface } from "./pizza.interface";

export interface OrderPositionInterface {
  product: ProductInterface | PizzaInterface
  quantity: number
}