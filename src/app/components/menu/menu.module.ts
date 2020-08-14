import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { PizzaMenuComponent } from './pizza-menu.component';
import { InputStepperModule } from "../input-stepper/input-stepper.module";
import { SharedModule } from "../../shared.module";

@NgModule({
  declarations: [
    MenuComponent,
    PizzaMenuComponent,
  ],
  exports: [
    MenuComponent,
    PizzaMenuComponent,
  ],
  imports: [
    CommonModule,
    InputStepperModule,
    SharedModule,
  ]
})
export class MenuModule {
}
