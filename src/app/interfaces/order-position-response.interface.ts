import { ProductInterface } from "./product.interface";

export interface OrderPositionResponseInterface extends ProductInterface {
  quantity: number
}