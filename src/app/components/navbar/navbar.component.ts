import { Component, OnInit } from '@angular/core';
import { CurrencyService } from "../../services/currency.service";
import { CurrencyInterface } from "../../interfaces/currency.interface";
import { ApiService } from "../../services/api.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  currencies: CurrencyInterface[]

  constructor(
    private api: ApiService,
    public currency: CurrencyService,
  ) {
  }

  ngOnInit(): void {
    this.api.get('currencies')
      .subscribe((currencies: CurrencyInterface[]) => {
        this.currencies = currencies
        this.currency.active = currencies[0]
      })
  }

}
