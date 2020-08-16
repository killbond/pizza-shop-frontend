import { Component, ElementRef, OnInit, TemplateRef, ViewChild, } from '@angular/core';
import { CartService } from "../../services/cart.service";
import { faArrowLeft, faCircleNotch, faTrash } from "@fortawesome/free-solid-svg-icons";
import { DeliveryComponent } from "../../components/delivery/delivery.component";
import { CurrencyService } from "../../services/currency.service";
import { OrderInterface } from "../../interfaces/order.interface";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { OrderResponseInterface } from "../../interfaces/order-response.interface";
import { catchError, finalize } from "rxjs/operators";
import { ApiResponseInterface } from "../../interfaces/api-response.interface";
import { of } from "rxjs";
import { ValidationBagInterface } from "../../interfaces/validation-bag.interface";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {

  faTrash = faTrash

  faArrowLeft = faArrowLeft

  faSpinner = faCircleNotch

  @ViewChild('delivery') delivery: DeliveryComponent

  @ViewChild('successSend') successSend: TemplateRef<ElementRef>

  createdOrder: OrderResponseInterface

  sending: boolean = false

  errors: ValidationBagInterface = {}

  constructor(
    private currency: CurrencyService,
    private modalService: NgbModal,
    public cart: CartService,
  ) {
  }

  get total(): number {
    return this.cart.total() + (this.delivery?.price || 0)
  }

  ngOnInit(): void {
  }

  sendOrder(): void {
    let order: OrderInterface = this.newOrder()
    this.addPositionsToOrder(order)
    this.sending = true
    this.cart.submit(order)
      .pipe(
        catchError(({error: response}) => {
          this.errors = (response as ApiResponseInterface).errors
          return of()
        }),
        finalize(() => this.sending = false)
      ).subscribe((order: OrderResponseInterface) => {
      this.createdOrder = order
      this.modalService.open(this.successSend, {centered: true})
      this.cart.flush()
    })

  }

  private addPositionsToOrder(order: OrderInterface): void {
    for (let item of this.cart.get()) {
      order.positions.push({
        product_id: item.product.id,
        quantity: item.quantity
      })
    }
  }

  private newOrder(): OrderInterface {
    return {
      currency_id: this.currency.active.id,
      positions: [],
      phone: this.delivery.phone,
      delivery: {
        type_id: this.delivery.type_id,
        coordinates: {
          address: this.delivery.address,
        }
      }
    }
  }

}
