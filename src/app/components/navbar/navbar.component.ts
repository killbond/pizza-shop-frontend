import { Component, OnInit } from '@angular/core';
import { CurrencyService } from "../../services/currency.service";
import { CurrencyInterface } from "../../interfaces/currency.interface";
import { CartService } from "../../services/cart.service";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  currencies: CurrencyInterface[]

  collapsed: boolean = true

  faCart = faShoppingCart

  authorized: boolean = false

  constructor(
    private auth: AuthService,
    public currency: CurrencyService,
    public currencyService: CurrencyService,
    public cart: CartService,
  ) {
  }

  ngOnInit(): void {
    this.authorized = this.auth.isAuthenticated()
    this.currencyService.getCurrencies()
      .subscribe((currencies: CurrencyInterface[]) => this.currencies = currencies)
  }

  logout(): void {
    this.auth.logout()
  }

}
