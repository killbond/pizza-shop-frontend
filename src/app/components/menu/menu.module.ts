import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { PizzaMenuComponent } from './pizza-menu.component';
import { InputStepperModule } from "../input-stepper/input-stepper.module";
import { TrackByPropertyPipe } from "../../pipes/pipestrack-by-property.pipe";

@NgModule({
  declarations: [
    MenuComponent,
    PizzaMenuComponent,
    TrackByPropertyPipe,
  ],
  exports: [
    MenuComponent,
    PizzaMenuComponent,
  ],
  imports: [
    CommonModule,
    InputStepperModule,
  ]
})
export class MenuModule {
}
