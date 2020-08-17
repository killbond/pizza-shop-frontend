import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { PizzaInterface } from "../interfaces/pizza.interface";
import { ProductInterface } from "../interfaces/product.interface";
import { ApiService } from "./api.service";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private pizzas: PizzaInterface[] = null

  private products: ProductInterface[] = null

  constructor(
    private api: ApiService
  ) {
  }

  getPizzas(): Observable<PizzaInterface[]> {
    if (null !== this.pizzas) {
      return of(this.pizzas)
    }

    return this.api.get('pizzas')
      .pipe(tap((pizzas: PizzaInterface[]) => this.pizzas = pizzas))
  }

  getProducts(): Observable<ProductInterface[]> {
    if (null !== this.products) {
      return of(this.products)
    }

    return this.api.get('products')
      .pipe(tap((products: ProductInterface[]) => this.products = products))
  }
}
