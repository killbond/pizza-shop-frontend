import { EntityInterface } from "./entity.interface";

export interface UserInterface extends EntityInterface {
  name: string
  phone: string
  email: string
  created_at: string
  updated_at: string
}