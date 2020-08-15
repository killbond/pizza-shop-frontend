import { EntityInterface } from "./entity.interface";
import { OrderPositionResponseInterface } from "./order-position-response.interface";
import { OrderDeliveryResponseInterface } from "./order-delivery-response.interface";

export interface OrderResponseInterface extends EntityInterface {
  currency_id: number
  phone: string
  total: number
  positions: OrderPositionResponseInterface[]
  delivery: OrderDeliveryResponseInterface
  created_at: Date
  updated_at: Date
}