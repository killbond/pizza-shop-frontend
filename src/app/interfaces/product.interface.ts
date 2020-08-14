import { CategoryInterface } from "./category.interface";
import { ImageInterface } from "./image.interface";

export interface ProductInterface {
  id: number
  category_id: number
  category: CategoryInterface
  name: string
  description: string
  image: ImageInterface
  price: number
}