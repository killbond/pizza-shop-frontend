import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyService } from "../services/currency.service";
import { CurrencyPipe } from "@angular/common";

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

  transform(value: number, ...args: unknown[]): unknown {
    let exchanged = value * this.service.active?.usd_rate
    return this.currency.transform(exchanged, this.service.active.code)
  }

}
