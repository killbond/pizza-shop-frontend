import { Injectable } from '@angular/core';
import { CurrencyInterface } from "../interfaces/currency.interface";
import { Observable, of } from "rxjs";
import { ApiService } from "./api.service";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private current: CurrencyInterface

  private currencies: CurrencyInterface[] = null

  constructor(
    private api: ApiService,
  ) {
    this.active = JSON.parse(localStorage.getItem('active_currency'))
  }

  get active() {
    return this.current
  }

  set active(value: CurrencyInterface) {
    this.current = value
  }

  getCurrencies(): Observable<CurrencyInterface[]> {
    if (null !== this.currencies) {
      return of(this.currencies)
    }

    return this.api.get('currencies')
      .pipe(tap((currencies: CurrencyInterface[]) => {
        this.currencies = currencies
        if (!this.active) {
          this.active = currencies[0]
        }
      }))
  }

  save(): void {
    localStorage.setItem('active_currency', JSON.stringify(this.active))
  }

}
