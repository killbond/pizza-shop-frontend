import { Component, OnInit } from '@angular/core';
import { combineLatest } from "rxjs";
import { PizzaInterface } from "../../interfaces/pizza.interface";
import { CategoryInterface } from "../../interfaces/category.interface";
import { ProductInterface } from "../../interfaces/product.interface";
import { CartService } from "../../services/cart.service";
import { ProductService } from "../../services/product.service";
import { CategoryService } from "../../services/category.service";

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
    private categoryService: CategoryService,
    private productService: ProductService,
    private cart: CartService,
  ) {
  }

  ngOnInit(): void {
    combineLatest([
      this.productService.getPizzas(),
      this.productService.getProducts(),
      this.categoryService.getCategories(),
    ]).subscribe((data: [PizzaInterface[], ProductInterface[], CategoryInterface[]]) => {
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
