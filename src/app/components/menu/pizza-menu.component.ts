import { Component, Input, OnInit } from '@angular/core';
import { PizzaInterface } from "../../interfaces/pizza.interface";
import { MenuComponent } from "./menu.component";
import { ApiService } from "../../services/api.service";

@Component({
  selector: 'app-pizza-menu',
  templateUrl: './pizza-menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class PizzaMenuComponent extends MenuComponent implements OnInit {

  @Input() items: PizzaInterface[];

  constructor(
    protected api: ApiService,
  ) {
    super(api)
  }

  ngOnInit(): void {
    this.api.get('pizzas')
      .subscribe((pizzas: PizzaInterface[]) => this.items = pizzas)
  }

}
