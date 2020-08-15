import { Injectable } from '@angular/core';
import { OrderPositionInterface } from "../interfaces/order-position.interface";
import { ApiService } from "./api.service";
import { ProductInterface } from "../interfaces/product.interface";
import { PizzaInterface } from "../interfaces/pizza.interface";

type Item = PizzaInterface | ProductInterface

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private positions: OrderPositionInterface[] = []

  constructor(
    private api: ApiService
  ) {
  }

  add(product: Item, quantity: number): void {
    let index = this.findIndex(product)
    if (-1 === index) {
      this.positions.push({
        product_id: product.id,
        quantity: quantity
      })
    } else {
      this.positions[index].quantity += quantity
    }
  }

  get(): OrderPositionInterface[] {
    return this.positions
  }

  count(): number {
    return this.positions.length
  }

  private findIndex(product: Item): number {
    return this.positions.findIndex((item: OrderPositionInterface) => {
      return item.product_id === product.id
    })
  }
}
