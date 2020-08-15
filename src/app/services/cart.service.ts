import { Injectable } from '@angular/core';
import { CartPositionInterface } from "../interfaces/cart-position.interface";
import { ApiService } from "./api.service";
import { ProductInterface } from "../interfaces/product.interface";
import { PizzaInterface } from "../interfaces/pizza.interface";
import { Observable } from "rxjs";
import { OrderInterface } from "../interfaces/order.interface";
import { OrderResponseInterface } from "../interfaces/order-response.interface";

type Item = PizzaInterface | ProductInterface

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private positions: CartPositionInterface[] = []

  constructor(
    private api: ApiService
  ) {
  }

  add(product: Item, quantity: number): void {
    let index = this.findIndex(product)
    if (-1 === index) {
      this.positions.push({
        product: product,
        quantity: quantity
      })
    } else {
      this.positions[index].quantity += quantity
    }
  }

  remove(product: Item): void {
    this.positions = this.positions.filter((item: CartPositionInterface) => {
      return product.id !== item.product.id
    })
  }

  get(): CartPositionInterface[] {
    return this.positions
  }

  count(): number {
    return this.positions.length
  }

  isEmpty(): boolean {
    return this.positions.length == 0
  }

  total(): number {
    let sum = 0
    for (let item of this.positions) {
      sum += item.quantity * item.product.price
    }
    return sum
  }

  submit(order: OrderInterface): Observable<OrderResponseInterface> {
    return this.api.post('orders', order)
  }

  flush() {
    this.positions.length = 0
  }

  private findIndex(product: Item): number {
    return this.positions.findIndex((item: CartPositionInterface) => {
      return item.product.id === product.id
    })
  }
}
