import { CategoryInterface } from "./category.interface";
import { ImageInterface } from "./image.interface";
import { EntityInterface } from "./entity.interface";

export interface ProductInterface extends EntityInterface {
  category_id: number
  category: CategoryInterface
  name: string
  description: string
  image: ImageInterface
  price: number
}