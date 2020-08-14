import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductInterface } from "../../interfaces/product.interface";
import { PizzaInterface } from "../../interfaces/pizza.interface";
import { InputStepperComponent } from "../input-stepper/input-stepper.component";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  host: {'class': 'card'}
})
export class ProductCardComponent<T extends ProductInterface | PizzaInterface> {

  @Input() product: T

  @Output('added') added: EventEmitter<{ product: T, quantity: number }> = new EventEmitter()

  public addClickHandler(stepper: InputStepperComponent, product: T): void {
    this.added.emit({
      product: product,
      quantity: stepper.value
    })
    stepper.value = 1
  }
}
