import { Component, OnInit } from '@angular/core';
import { CurrencyService } from "../../services/currency.service";
import { CurrencyInterface } from "../../interfaces/currency.interface";
import { CartService } from "../../services/cart.service";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  currencies: CurrencyInterface[]

  collapsed: boolean = true

  faCart = faShoppingCart

  constructor(
    public currencyService: CurrencyService,
    public cart: CartService,
  ) {
  }

  ngOnInit(): void {
    this.currencyService.getCurrencies()
      .subscribe((currencies: CurrencyInterface[]) => this.currencies = currencies)
  }

}
