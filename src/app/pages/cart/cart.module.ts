import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { SharedModule } from "../../shared.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { DeliveryModule } from "../../components/delivery/delivery.module";
import { InputStepperModule } from "../../components/input-stepper/input-stepper.module";
import { NavbarModule } from "../../components/navbar/navbar.module";


@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    SharedModule,
    FontAwesomeModule,
    NavbarModule,
    DeliveryModule,
    InputStepperModule,
  ]
})
export class CartModule {
}
