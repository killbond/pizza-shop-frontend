import { Component, OnInit } from '@angular/core';
import { combineLatest } from "rxjs";
import { PizzaInterface } from "../../interfaces/pizza.interface";
import { CategoryInterface } from "../../interfaces/category.interface";
import { ApiService } from "../../services/api.service";
import { ProductInterface } from "../../interfaces/product.interface";
import { CartService } from "../../services/cart.service";

type Item = ProductInterface | PizzaInterface

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  pizzas: PizzaInterface[]

  products: ProductInterface[]

  categories: CategoryInterface[]

  constructor(
    private api: ApiService,
    private cart: CartService,
  ) {
  }

  ngOnInit(): void {
    combineLatest([this.api.get('pizzas'), this.api.get('products'), this.api.get('categories')])
      .subscribe((data: [PizzaInterface[], ProductInterface[], CategoryInterface[]]) => {
        let [pizzas, products, categories] = data
        this.categories = categories.filter((category: CategoryInterface) => category.id != 1)
        this.products = products
        this.pizzas = pizzas
      })
  }

  addToCart(event: { product: Item, quantity: number }): void {
    this.cart.add(event.product, event.quantity)
  }

  filterByCategoryId<T extends ProductInterface>(items: T[], id: number): T[] {
    return items.filter((item: T) => item.category_id === id)
  }

}