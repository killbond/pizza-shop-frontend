import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-input-stepper',
  templateUrl: './input-stepper.component.html',
  styleUrls: ['./input-stepper.component.scss']
})
export class InputStepperComponent {

  faPlus = faPlus
  faMinus = faMinus
  @Output() valueChange = new EventEmitter<number>()

  private _value: number = 1

  get value(): number {
    return this._value
  }

  @Input()
  set value(value: number) {
    if (value > 0) {
      this._value = value
    }
  }

  set(value) {
    this.value = value
    this.valueChange.emit(this.value);
  }
}
