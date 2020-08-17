import { ValidationBagInterface } from "./validation-bag.interface";

export interface ApiResponseInterface {
  data?: any
  errors?: ValidationBagInterface
  message?: string
}