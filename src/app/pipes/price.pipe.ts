import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyService } from "../services/currency.service";
import { CurrencyPipe } from "@angular/common";
import { CurrencyInterface } from "../interfaces/currency.interface";

@Pipe({
  name: 'price',
  pure: false,
})
export class PricePipe implements PipeTransform {

  constructor(
    private service: CurrencyService,
    private currency: CurrencyPipe,
  ) {
  }

  transform(value: number, currency: CurrencyInterface = this.service.active, ...args: unknown[]): unknown {
    let exchanged = value * currency?.usd_rate
    return this.currency.transform(exchanged, currency?.code)
  }

}
