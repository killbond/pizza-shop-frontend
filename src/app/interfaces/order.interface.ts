import { OrderPositionInterface } from "./order-position.interface";
import { DeliveryInterface } from "./delivery.interface";

export interface OrderInterface {
  currency_id: number
  phone: string
  positions: OrderPositionInterface[]
  delivery: DeliveryInterface
}