import { Component, OnInit } from '@angular/core';
import { CartService } from "../../services/cart.service";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  faTrash = faTrash

  constructor(
    public cart: CartService
  ) {
  }

  get total(): number {
    return this.cart.total()
  }

  ngOnInit(): void {
  }

}
