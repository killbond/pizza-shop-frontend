import { Component, Input, OnInit } from '@angular/core';
import { faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { ValidationBagInterface } from "../../interfaces/validation-bag.interface";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})
export class DeliveryComponent implements OnInit {

  faMapMarker = faMapMarkerAlt

  faPhone = faPhone

  type_id: number = 2

  address: string = ''

  phone: string = ''

  @Input() errors: ValidationBagInterface

  constructor(
    private auth: AuthService,
  ) {
  }

  get price(): number {
    return this.type_id == 1 ? 5 : 0
  }

  ngOnInit(): void {
    this.phone = this.auth.user?.phone || ''
  }

}
