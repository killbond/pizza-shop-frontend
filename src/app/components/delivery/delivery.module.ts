import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryComponent } from './delivery.component';
import { FormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";


@NgModule({
  declarations: [
    DeliveryComponent,
  ],
  exports: [
    DeliveryComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
  ]
})
export class DeliveryModule {
}
