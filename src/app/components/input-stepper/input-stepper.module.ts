import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputStepperComponent } from './input-stepper.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SharedModule } from "../../shared.module";


@NgModule({
  declarations: [
    InputStepperComponent,
  ],
  exports: [
    InputStepperComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SharedModule,
  ]
})
export class InputStepperModule {
}
