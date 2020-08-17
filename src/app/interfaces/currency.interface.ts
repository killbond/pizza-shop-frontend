import { EntityInterface } from "./entity.interface";

export interface CurrencyInterface extends EntityInterface {
  code: string
  usd_rate: number
}