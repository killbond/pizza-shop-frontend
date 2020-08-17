import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { OrderResponseInterface } from "../../interfaces/order-response.interface";
import { AuthService } from "../../services/auth.service";
import { CurrencyService } from "../../services/currency.service";
import { CurrencyInterface } from "../../interfaces/currency.interface";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  orders: OrderResponseInterface[] = []

  constructor(
    private api: ApiService,
    private auth: AuthService,
    public currencyService: CurrencyService,
  ) {
  }

  ngOnInit(): void {
    this.api.get('users/' + this.auth.getUserId() + '/orders')
      .subscribe((orders: OrderResponseInterface[]) => this.orders = orders)
  }

  getCurrency(order: OrderResponseInterface): CurrencyInterface {
    return this.currencyService.getCurrencyById(order.currency_id)
  }

}
