import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { TrackByPropertyPipe } from "./pipes/strack-by-property.pipe";
import { PricePipe } from "./pipes/price.pipe";

@NgModule({
  declarations: [
    TrackByPropertyPipe,
    PricePipe,
  ],
  exports: [
    TrackByPropertyPipe,
    PricePipe,
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
