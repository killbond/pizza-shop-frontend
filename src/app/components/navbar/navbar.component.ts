import { Component, OnInit } from '@angular/core';
import { CurrencyService } from "../../services/currency.service";
import { CurrencyInterface } from "../../interfaces/currency.interface";
import { ApiService } from "../../services/api.service";
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
    private api: ApiService,
    private auth: AuthService,
    public currency: CurrencyService,
    public cart: CartService,
  ) {
  }

  ngOnInit(): void {
    this.authorized = this.auth.isAuthenticated()
    this.api.get('currencies')
      .subscribe((currencies: CurrencyInterface[]) => {
        this.currencies = currencies
        this.currency.active = currencies[0]
      })
  }

  logout(): void {
    this.auth.logout()
  }

}
