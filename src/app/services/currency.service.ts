import { Injectable } from '@angular/core';
import { CurrencyInterface } from "../interfaces/currency.interface";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private current: CurrencyInterface

  get active() {
    return this.current
  }

  set active(value: CurrencyInterface) {
    this.current = value
  }

}
