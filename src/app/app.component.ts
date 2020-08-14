import { Component, OnInit } from '@angular/core';
import { ApiService } from "./services/api.service";
import { PizzaInterface } from "./interfaces/pizza.interface";
import { ProductInterface } from "./interfaces/product.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  pizzas: PizzaInterface[]

  products: ProductInterface[]

  constructor(
    private api: ApiService,
  ) {
  }

  ngOnInit(): void {
  }
}
