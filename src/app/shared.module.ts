import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { TrackByPropertyPipe } from "./pipes/strack-by-property.pipe";
import { PricePipe } from "./pipes/price.pipe";
import { DatetimePipe } from './pipes/datetime.pipe';

@NgModule({
  declarations: [
    TrackByPropertyPipe,
    PricePipe,
    DatetimePipe,
  ],
  exports: [
    TrackByPropertyPipe,
    PricePipe,
    DatetimePipe,
  ],
  providers: [
    CurrencyPipe,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}
