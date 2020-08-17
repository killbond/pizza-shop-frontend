import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card.component';
import { InputStepperModule } from "../input-stepper/input-stepper.module";
import { SharedModule } from "../../shared.module";

@NgModule({
  declarations: [
    ProductCardComponent,
  ],
  exports: [
    ProductCardComponent,
  ],
  imports: [
    CommonModule,
    InputStepperModule,
    SharedModule,
  ]
})
export class ProductCardModule {
}
