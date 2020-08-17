import { Component, HostListener } from '@angular/core';
import { CartService } from "./services/cart.service";
import { CurrencyService } from "./services/currency.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private cart: CartService,
    private currencyService: CurrencyService,
  ) {
  }

  @HostListener('window:unload')
  unloadHandler() {
    this.cart.save()
    this.currencyService.save()
  }
}
