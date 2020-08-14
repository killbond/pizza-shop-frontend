import { Component, OnInit } from '@angular/core';
import { ProductInterface } from "../../interfaces/product.interface";
import { ApiService } from "../../services/api.service";
import { combineLatest } from "rxjs";
import { PizzaInterface } from "../../interfaces/pizza.interface";
import { CategoryInterface } from "../../interfaces/category.interface";
import { InputStepperComponent } from "../input-stepper/input-stepper.component";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  items: ProductInterface[]

  categories: CategoryInterface[]

  constructor(
    protected api: ApiService
  ) {
  }

  ngOnInit(): void {
    combineLatest([this.api.get('products'), this.api.get('categories')])
      .subscribe((data: [PizzaInterface[], ProductInterface[]]) => {
        let [products, categories] = data
        this.categories = categories.filter((category: CategoryInterface) => category.id != 1)
        this.items = products
      })
  }

  addToCart(stepper: InputStepperComponent, id: number): void {
    let quantity = stepper.value
    stepper.value = 1
    console.log(id, quantity)
  }

  filterByCategoryId<T extends ProductInterface>(items: T[], id: number): T[] {
    return items.filter((item: T) => item.category_id === id)
  }

}
