import { Component, HostListener } from '@angular/core';
import { CartService } from "./services/cart.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private cart: CartService) {
  }

  @HostListener('window:unload')
  unloadHandler() {
    this.cart.save()
  }
}
