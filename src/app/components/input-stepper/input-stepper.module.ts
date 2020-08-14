import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputStepperComponent } from './input-stepper.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";


@NgModule({
  declarations: [
    InputStepperComponent,
  ],
  exports: [
    InputStepperComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class InputStepperModule {
}
